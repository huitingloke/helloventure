'use client';
import Link from 'next/link';
import { IoArrowBack, IoSearchOutline } from 'react-icons/io5';
import { BsQuestionCircle } from 'react-icons/bs';
import GroupChatPeople from '../../../../components/GroupChatPeople';
import { useState } from 'react';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const users = [
    ["Henry Jung", "Korea", "Male", "someone else! yay~~~"],
    ["Kendall", "Singapore", "Female", "good monring!"],
    ["Jacob Homes", "Arctic", "Non-Binary", "Hi!!! I'm jakey"],
  ]
export default function FestChat() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-100 ${nunito.className}`}>
      <div className="fixed top-0 left-0 right-0 bg-white p-4 flex justify-between items-center shadow-sm">
        <Link href=".." className="text-gray-600 hover:text-gray-800">
          <IoArrowBack size={24} />
        </Link>
        <h1 className="text-xl font-bold text-black">In this event:</h1>
        <div className="flex gap-3">
          <button className="text-gray-600 hover:text-gray-800">
            <IoSearchOutline size={24} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <BsQuestionCircle size={24} />
          </button>
        </div>
      </div>
            {/* Main content area */}
            <div className="pt-16 pb-24">
              {users.map((user, index) => (
                <GroupChatPeople
                  key={index}
                  name={user[0]}
                  image={`/person${Math.floor(Math.random() * 2) + 1}.png`}
                  country={user[1]}
                />
              ))}
            </div>
      {/* Fixed bottom buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-top flex flex-col gap-3">
        <button 
          onClick={() => setShowPopup(true)}
          className="w-full py-3 px-6 bg-pink-400 hover:bg-pink-500 text-white rounded-full font-semibold shadow-lg transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
          Message them privately today!
        </button>
      <Link 
          href="/chats/penpal/match/penguin"
          className="w-full py-3 px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-semibold transform transition-transform hover:scale-[1.02] active:scale-[0.98] block text-center">
        Chat with an anonymous pen pal
      </Link>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold text-center mb-4">You need premium for that!</h2>
            <div className="flex flex-col gap-3">
              <button className="w-full py-3 px-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full font-semibold shadow-lg transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Buy now!
              </button>
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full py-3 px-6 bg-gray-200 text-gray-600 rounded-full font-semibold transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Maybe next time...
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}