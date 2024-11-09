"use client"
import BottomNavBar from "../../../components/BottomNavBar"
import { Search, Star } from 'lucide-react'
import { Nunito } from 'next/font/google'
import GroupChatDisplay from '../../../components/GroupChatDisplay'
const nunito = Nunito({ subsets: ['latin'] })

import { useState, useEffect } from 'react';
import Papa from 'papaparse';

interface EventData {
  [key: string]: string;
}

const useEventData = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/eventdb.csv');
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setEvents(results.data as EventData[]);
          }, 
          error: (error) => {
            console.error('Error parsing CSV:', error);
          }
        });
      } catch (error) {
        console.error('Error fetching CSV:', error);
      }
    };

    fetchData();
  }, []);

  return events;
};


export default function ChatListPage() {
    const events = useEventData();

    return (
        <div className={`min-h-screen bg-pink-50 p-4 ${nunito.className}`}>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Chats</h1>
                <div className="flex gap-4">
                    <Search className="w-6 h-6 text-gray-400" />
                    <Star className="w-6 h-6 text-gray-400" />
                </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 mb-4">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                            src="/paris.png" 
                            alt="Osaka" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Japan</p>
                        <h2 className="text-xl font-bold text-gray-900">Osaka</h2>
                    </div>
                </div>
            </div>
            
            <div>
                {events && events.slice(0, 3).map((event: EventData, index: number) => (
                    <GroupChatDisplay 
                        key={index}
                        name={event.name}
                        organizer={event.organizer}
                        link_name={event.link_name}
                    />
                ))}
            </div>

            <BottomNavBar />
        </div>
    )
}