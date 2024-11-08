"use client"
import Image from 'next/image';

const PlanNextTrip = () => {
  return (
    <div className="flex items-center w-fit overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white">
      <div className="w-24 h-24 relative">
        <Image
          src="/placeholder-travel.jpg"
          alt="Travel planning"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-l-xl"
        />
      </div>
      <div className="px-6 py-4">
        <p className="text-sm text-gray-500 mb-1">Plan your next trip!</p>
        <h3 className="text-xl font-bold text-black">Add New</h3>
      </div>
    </div>
  );
};

export default PlanNextTrip;
