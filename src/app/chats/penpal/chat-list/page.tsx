"use client"
import { Nunito } from 'next/font/google'
import BottomNavBar from "../../../components/BottomNavBar"
import { Search } from 'lucide-react'
import GroupChatPeople from "../../../components/GroupChatPeople"

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

            <div>
                <GroupChatPeople 
                    image="/FOX.png"
                    name="Funky Fox"
                    country="Australia"
                    link='/chats/penpal/chat/fox'
                />
                <GroupChatPeople 
                    image="/PENGUIN.png"
                    name="Confused Penguin"
                    country="Singapore"
                    link='/chats/penpal/chat/penguin'
                />

            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">Direct Messages</h2>
                <div className="flex flex-col items-center justify-center space-y-4 mt-8">
                    <p className="text-gray-400">Uh oh... No messages</p>
                    <button 
                        onClick={() => {
                            const popup = document.createElement('div')
                            popup.className = `${nunito.className} fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`
                            popup.innerHTML = `
                                <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
                                    <h3 class="text-xl font-bold text-center mb-4">Uh Oh! this is a premium feature!</h3>
                                    <div class="space-y-3">
                                        <button class="w-full py-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                                            Buy Premium!
                                        </button>
                                        <button class="w-full py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors" onclick="this.parentElement.parentElement.parentElement.remove()">
                                            Maybe next time...
                                        </button>
                                    </div>
                                </div>
                            `
                            document.body.appendChild(popup)
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        DM your fellow travellers!
                    </button>
                </div>
            </div>

            <BottomNavBar />
        </div>
    )
}