import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import EventDisplayHome from './EventDisplayHome';

interface EventData {
  [key: string]: {
    [key: string]: string;
  };
}

const EventDisplayColumn = () => {
  const [eventData, setEventData] = useState<EventData>({});

  useEffect(() => {
    const loadEventData = async () => {
      try {
        const response = await fetch('/eventdb.csv');
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const jsonData: EventData = {};
            
            results.data.forEach((row: any) => {
              if (row.link_name) {
                const { link_name, ...rest } = row;
                jsonData[link_name] = rest;
              }
            });
            
            setEventData(jsonData);
          }
        });
      } catch (error) {
        console.error('Error loading event data:', error);
      }
    };

    loadEventData();
  }, []);
  {console.log(eventData)}
  return (
    <div className="event-display-column no-scrollbar" style={{
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      padding: '20px 0'
    }}>
      <div style={{
        display: 'inline-flex',
        gap: '20px',
        padding: '0 20px'
      }}>
        {Object.entries(eventData).map(([linkName, data]) => (
          <div key={linkName} style={{ 
            minWidth: '300px',
            display: 'inline-block'
          }}> 
            <EventDisplayHome
              eventTitle={data.name || ''}
              cityTitle={data.city || ''}
              countryName={data.country || ''}
              duration={data.time || ''}
              imageUrl={data.image_url || ''}
              forumLink={linkName || ''}
              date={data.date || ''}
              attendees={data.attendees || 0}
              description={data.description || ''}
            />
          </div>
        ))}
      </div>
    </div>
  );
};export default EventDisplayColumn;