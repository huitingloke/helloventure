import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import EventDisplayHome from './EventDisplayHome';

interface EventData {
  [key: string]: {
    [key: string]: string;
    price: number;
    attendees: number;
  };
}

const EventDisplayColumn = () => {
  const [eventData, setEventData] = useState<EventData>({});
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = [
    { name: 'Popular', color: '#FFE5E5' },
    { name: 'Nature', color: '#E5FFE5' },
    { name: 'Culture', color: '#E5E5FF' },
    { name: 'Photography', color: '#FFE5FF' },
    { name: 'Sightseeing', color: '#FFFFE5' }
  ];

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
    <>
      <div className="tags-container no-scrollbar" style={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'inline-flex',
          gap: '15px'
        }}>
          {tags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => setSelectedTag(selectedTag === tag.name ? null : tag.name)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: tag.color,
                cursor: 'pointer',
                fontWeight: selectedTag === tag.name ? 'bold' : 'normal',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transform: 'perspective(1px) translateZ(0)',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
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
                price={data.price || 0}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventDisplayColumn;