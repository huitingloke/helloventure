
import React from 'react';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface GroupChatPeopleProps {
  image: string;
  name: string;
  country: string;
}

const GroupChatPeople: React.FC<GroupChatPeopleProps> = ({ image, name, country }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-2">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{country}</p>
        </div>
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <BsThreeDotsVertical className="text-gray-600" />
      </button>
    </div>
  );
};

export default GroupChatPeople;
