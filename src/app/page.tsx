'use client';
import { Nunito } from 'next/font/google';
import Head from 'next/head';

import { NextPage } from 'next';

const nunito = Nunito({ subsets: ['latin'] });

const OpeningPage: NextPage = () => {
  return (
    <div className={`min-h-screen bg-[#cbe3ff] bg-opacity-100 flex flex-col justify-center items-center px-6 py-12 ${nunito.className}`} style={{backgroundColor: '#cbe3ff'}}>
      <Head>
        <title>Ready to Travel?</title>
        <meta name="description" content="Your travel companion app" />
      </Head>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className={`text-4xl font-bold text-gray-900 ${nunito.className}`}>
            Ready to Travel?
          </h1>
          <p className={`mt-4 text-lg text-gray-600 ${nunito.className}`}>
            We've helped thousands across the globe to experience travel with ease... and you're next!
          </p>
        </div>


        <div className="flex gap-4 justify-center">
          <button
            className={`px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 ${nunito.className}`}
          >
            Sign Up
          </button>
          <button
            onClick={() => {window.location.href = '/authentication/sign-in'}}
            className={`px-6 py-3 border-2 bg-white border-black text-black rounded-lg hover:bg-gray-100 transition-colors duration-200 ${nunito.className}`}
          >
            Log In
          </button>
        </div>

        <div className="flex justify-center my-16">
          {/* Space reserved for suitcase image */}
          <div className="w-64 h-64 flex items-center justify-center text-gray-400">
            {/* Image placeholder - replace with actual image */}
            <img src="/luggage.png" alt="Suitcase" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpeningPage;