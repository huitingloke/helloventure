
'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SignupConfirmation() {
  return (
    <div className="min-h-screen bg-[#cffff6] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
        Congratulations!
      </h1>
      
      <div className="w-64 h-64 md:w-72 md:h-72 relative mb-8">
        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
          {/* Placeholder for celebration image */}
          <span className="text-gray-400">Celebration Image</span>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
        Your event sign up confirmation has been verified
      </h2>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link 
          href="/chats/group/chat-list"
          className="bg-white text-black py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center text-lg font-semibold border-2 border-gray-300"
        >
          Connect with my fellow event-goers
        </Link>

        <Link 
          href="/events/home"
          className="bg-white text-black py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center text-lg font-semibold border-2 border-gray-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
