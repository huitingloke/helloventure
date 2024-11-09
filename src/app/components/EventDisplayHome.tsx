import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiUsers } from 'react-icons/hi'

interface EventDisplayHomeProps {
  cityTitle: string;
  eventTitle: string;
  countryName: string;
  duration: string;
  imageUrl: string;
  forumLink: string;
  date: string;
  attendees: number;
  description: string;
}

const EventDisplayHome: React.FC<EventDisplayHomeProps> = ({
  cityTitle,
  eventTitle,
  countryName,
  duration,
  imageUrl,
  forumLink,
  date,
  attendees,
  description
}) => {
  const pastelColors = [
    'bg-pink-200',
    'bg-purple-200',
    'bg-blue-200',
    'bg-green-200',
    'bg-yellow-200',
    'bg-orange-200',
    'bg-red-200',
  ];

  const randomPastelColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];

  return (
    <div className={`w-64 max-w-sm overflow-hidden rounded-lg shadow-lg ${randomPastelColor} h-[600px]`}>
      <div className="relative h-56 w-full">
        <Image
          src="/paris.png"
          alt={cityTitle}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-2 flex flex-col items-start h-full">
        <h3 className="text-black font-extrabold text-2xl mb-2">
          {eventTitle}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {description}
        </p>
        <span className="text-gray-900 text-sm mb-2">
          {cityTitle} - {date} - {duration}
        </span>
        <div className='flex flex-row items-center mb-4'>
          <HiUsers className="text-gray-900 text-sm" />
          <span className="text-gray-900 text-sm ml-1">
            {attendees} 
          </span>
        </div>
        <Link 
          href={`/events/discovery/${forumLink}`}
          className="w-full mt-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-center text-sm"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};
export default EventDisplayHome;