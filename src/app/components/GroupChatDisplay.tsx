'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface GroupChatDisplayProps {
  name: string;
  organizer: string;
  link_name: string;
}

const GroupChatDisplay = ({ name, organizer, link_name }: GroupChatDisplayProps) => {
  return (
    <Link href={`/chats/group/chat/${link_name || ''}`}>
      <div className="w-full bg-white rounded-xl shadow-md p-4 mb-3 flex justify-between items-center hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <div className="flex flex-col">
          <h3 className="font-nunito font-bold text-base text-left text-gray-800">
            {name}
          </h3>
          <p className="font-nunito text-sm text-gray-500 mt-1">
            {organizer}
          </p>
        </div>
        <ChevronRight className="text-gray-400 w-5 h-5" />
      </div>
    </Link>
  );
};

export default GroupChatDisplay;
