'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Nunito } from 'next/font/google'
import { useState } from 'react'

const nunito = Nunito({ subsets: ['latin'] })

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (email === 'emilytan4803@gmail.com' && password === 'crazycow11') {
      window.location.href = '/events/home'
    } else {
      setError('Oops! That was the wrong email or password! Please try again.')
    }
  }

  return (
    <div className={`min-h-screen bg-white flex flex-col items-center px-4 py-6 text-black ${nunito.className}`} >
      <div className="w-full max-w-md">
        <div className="relative h-48 w-full mb-8">
          <Image
            src="/paris.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
          
        </div>
        
        <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Login
          </h1>
          
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
            </div>
            
            <div className="space-y-2">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
          </div>
          
          <button 
            onClick={handleLogin}
            className="mt-6 w-full rounded-lg bg-black px-4 py-3 text-white hover:bg-gray-800">
            Login →
          </button>
          
          <p className="mt-4 text-sm text-gray-600">
            Forgot password? <Link href="/" className="font-bold text-gray-900">Get new</Link>
          </p>
          
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account? <Link href="/" className="font-bold text-gray-900">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
