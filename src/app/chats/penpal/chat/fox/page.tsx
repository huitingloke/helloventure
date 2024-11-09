'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Nunito } from 'next/font/google';
import ChatText from '../../../../components/ChatText';

const nunito = Nunito({ subsets: ['latin'] });
const name = "Funky Fox"

const prompts = [
  "How are you today?",
  "How often do you travel?",
  "Any favourite foods?"
];

interface Message {
  message: string;
  sender: string;
  image: string;
}

export default function ChatPage() {
  const [randomPrompt, setRandomPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      message: "yooo wassap",
      sender: "Funky Fox",
      image: ''
    },
    {
      message: "hi! how are you?",
      sender: "Emily",
      image: ''
    },
    {
      message: "im good, im good,,, am i your first penpal?",
      sender: "Funky Fox",
      image: ''
    },
  ]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setRandomPrompt(prompts[randomIndex]);
  }, []);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { message: inputText, sender: 'Emily', image: '' }]);
      setTimeout(() => {
        const randomResponse = penguinResponses[Math.floor(Math.random() * penguinResponses.length)];
        setMessages(prev => [...prev, { message: randomResponse, sender: 'Waddles', image: '' }]);
      }, 1000);
      setInputText('');
    }
  };

  return (
    <div className={`h-screen flex flex-col bg-gray-100 ${nunito.className}`}>
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href=".." className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-black">{name}</h1>
          <div className="w-6"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'Emily' ? 'justify-end' : 'justify-start'} my-2`}>
            <ChatText message={message.message} sender={message.sender} />
          </div>
        ))}
      </div>

      <div className="p-4 bg-white">
        <div className="bg-white shadow-md flex">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={randomPrompt}
            className="w-full p-3 rounded-l-lg border border-gray-200 focus:outline-none focus:border-pink-200 transition-colors"
            style={{ position: 'relative', zIndex: 1 }}
          />
          <button
            onClick={handleSendMessage}
            className="w-12 h-12 flex items-center justify-center bg-pink-200 rounded-full hover:bg-pink-300 transition-all duration-200 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>         
        </div>
      </div>
    </div>
  );
}