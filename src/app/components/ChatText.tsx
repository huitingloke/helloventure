  import React from 'react';
  import { Nunito } from 'next/font/google';

  const nunito = Nunito({ subsets: ['latin'] });

  interface ChatTextProps {
    message: string;
    sender: string;
  }

  const ChatText: React.FC<ChatTextProps> = ({ message, sender, image }) => {
    return (
      <div className="flex items-start gap-2.5 mb-4">
        {image && (
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={image} alt={sender} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-700">{sender}</span>
          <div className={`bg-white rounded-lg p-3 max-w-lg shadow-md border border-gray-200 ${nunito.className}`}>
            <p className="text-sm text-black">{message}</p>
          </div>
        </div>
      </div>
    );
  };

  export default ChatText;