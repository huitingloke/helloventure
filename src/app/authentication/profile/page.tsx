'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin']
})

export default function Profile() {
  const [name, setName] = useState('Emily Tan')
  const [country, setCountry] = useState('Singapore')
  const [gender, setGender] = useState('Female')
  const router = useRouter()

  return (
    <main className={`min-h-screen bg-sky-50 px-4 py-6 ${nunito.className}`}>
      <button 
        onClick={() => router.back()} 
        className="flex items-center text-gray-600 mb-4"
      >
        <span className="text-2xl">←</span>
        <span className="ml-2"></span>
      </button>

      <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
        My Profile
      </h1>

      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-8">
          <Image
            src="/person-emily.png"
            alt="Profile Picture"
            fill
            className="rounded-full object-cover border-4 border-sky-200"
            priority
          />
        </div>

        <div className="w-full max-w-md">
          <div className="flex items-center bg-white rounded-lg p-4">
            <span className="w-24 text-gray-600">Name</span>
            <input
              type="text"
              value={name}
              readOnly
              className="flex-1 px-3 py-2 rounded-md border-0 focus:outline-none"
            />
          </div>

          <div className="flex items-center bg-white rounded-lg p-4 mt-2">
            <span className="w-24 text-gray-600">Country</span>
            <input
              type="text"
              value={country}
              readOnly
              className="flex-1 px-3 py-2 rounded-md border-0 focus:outline-none"
            />
          </div>

          <div className="flex items-center bg-white rounded-lg p-4 mt-2">
            <span className="w-24 text-gray-600">Gender</span>
            <input
              type="text"
              value={gender}
              readOnly
              className="flex-1 px-3 py-2 rounded-md border-0 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8 relative w-full h-48 max-w-md">
          <Image
            src="/camping.png"
            alt="Additional Image"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </main>
  )
}
