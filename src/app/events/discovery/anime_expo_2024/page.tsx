'use client';
import { useState, useEffect } from 'react';
import { Nunito } from 'next/font/google';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const nunito = Nunito({ subsets: ['latin'] });

interface EventData {
  link_name: string;
  name: string;
  organizer: string;
  long_desc: string;
  time: string;
  date: string;
  address: string;
  comments: string;
  price: string;
  country?: string;
  city?: string;
}

const profileImages: string[] = [
  "/person1.png", "/person2.png"
];

export default function EventDiscoveryPage() {
  const router = useRouter();
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    async function fetchEventData() {
      try {
        const response = await fetch('/eventdb.csv');
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const data = results.data[1] as EventData;
            data.comments = data.comments ? (data.comments as string).split(',') : [];
            setEventData(data);
          }
        });
      } catch (error) {
        console.error('Error loading event data:', error);
      }
    }

    fetchEventData();
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    setProfileImage(profileImages[randomIndex]);
  }, []);

  if (!eventData) return <div>Loading...</div>;

  const { name, organizer, long_desc, time, date, address, comments, link_name } = eventData;
  return (
    <div className={`min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 ${nunito.className}`}>
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-800">
              <IoArrowBack size={24} />
            </button>
          </div>

          <h1 className="text-4xl font-extrabold text-center mb-8">{name}</h1>

          <div className="flex flex-col items-center mb-8">
            <img
              src={profileImage}
              alt={organizer}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-black">{organizer}</h2>
          </div>

          <div className="text-center mb-12">
            <p className="text-gray-500 text-xs">"{long_desc}"</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-4 flex">
              <div className="w-2/5">
                <img src="/calendar.png" alt="Time" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-3/5 pl-4 text-left">
                <p className="text-sm text-gray-500">Be on time!</p>
                <p className="font-bold text-black">{time}</p>
                <p className="font-bold text-black">{date}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 flex">
              <div className="w-2/5">
                <img src="/map.png" alt="Location" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-3/5 pl-4 text-left">
                <p className="text-sm text-gray-500">{eventData.country}, {eventData.city}</p>
                <p className="text-sm text-black">{address}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 flex">
              <div className="w-2/5">
                <img src="/cat.png" alt="Comments" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-3/5 pl-4 text-left">
                <p className="text-sm text-gray-500">Pay attention!</p>
                {comments.map((comment, index) => (
                  <p key={index} className="text-sm text-black">{comment}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <button 
            onClick={() => router.push('/events/redirection')}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity text-lg"
          >
            Sign Up Now!
          </button>
        </div>
      </div>
    </div>
  );
}
