
"use client"
import Image from 'next/image';

interface LocationCardProps {
  country: string;
  city: string;
}

export default function LocationCard({ country, city }: LocationCardProps) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="relative w-16 h-16 mr-4">
        <Image
          src="/person1.png"
          alt={`${city}, ${country}`}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{country}</span>
        <span className="text-lg font-bold">{city}</span>
      </div>
    </div>
  );
}
