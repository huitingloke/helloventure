'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { IoSettingsOutline } from 'react-icons/io5'
import BottomNavBar from '../../components/BottomNavBar'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

const handleNavigation = () => {
  const router = useRouter();
  router.push('src/app/chats/forum');
};

export default function Home() {
  return (
    <div className={`min-h-screen bg-sky-50 p-4 ${nunito.className}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Upcoming Trips</h1>
        <div className="flex gap-4 items-center">
          <Link href="/authentication/profile">
            <Image
              src="/person-emily.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            />
          </Link>
          <IoSettingsOutline size={24} className="cursor-pointer" />
        </div>
      </div>
        <Link href="/chats/forum" className="mx-4">
          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col cursor-pointer hover:shadow-xl transition-shadow">
            <div className="relative h-32 w-full">
              <Image
                src="/calendar.png"
                alt="Osaka"
                width={512}
                height={256}
                className="rounded-t-xl object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-end mt-4">
              <div className="w-[60%]">
                <p className="text-gray-500 text-sm mb-1">Japan, Osaka -- 2 weeks</p>
                <h2 className="font-bold text-xl">City of Osaka</h2>
              </div>
              <button 
                onClick={() => handleNavigation}
                className="bg-amber-100 px-4 py-2 mx-3 rounded-lg border-2 border-amber-400 font-bold text-sm">
                Go To Forum
              </button>
            </div>
          </div>
        </Link>      
      <Link href="/events/display">
        <div className="bg-white rounded-xl shadow-lg p-4 flex cursor-pointer hover:shadow-xl transition-shadow">
          <div className="w-[20%] relative h-24 flex-shrink-0">
            <Image
              src="/plane.png"
              alt="Add New Trip"
              width={100}
              height={64}
              className="rounded-lg object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col justify-center pl-4">
            <h3 className="font-bold text-lg">Add New</h3>
            <p className="text-gray-500 text-sm">Plan your next trip!</p>
          </div>
        </div>
      </Link>      
      <BottomNavBar />    </div>
  );
}
