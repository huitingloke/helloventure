"use client"
import { Nunito } from 'next/font/google'
import BottomNavBar from "../../../components/BottomNavBar"
import { Search } from 'lucide-react'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export default function PenpalChat() {
    return (
        <div className={`flex flex-col min-h-screen bg-white p-4 ${nunito.className}`}>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-black">Your Pen Pals</h1>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Search className="w-6 h-6 text-gray-600" />
                </button>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">Direct Messages</h2>
                <div className="flex flex-col items-center justify-center space-y-4 mt-8">
                    <p className="text-gray-400">Uh oh... No messages</p>
                    <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        DM your fellow travellers!
                    </button>
                </div>
            </div>

            <BottomNavBar />
        </div>
    )
}