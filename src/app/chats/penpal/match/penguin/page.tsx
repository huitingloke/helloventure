  'use client'

  import Image from 'next/image'
  import { useRouter } from 'next/navigation'
  import { Nunito } from 'next/font/google'

  const nunito = Nunito({ subsets: ['latin'] })

  // Editable variables
  const penpalName = "Confused Penguin"
  const penpalAge = 21
  const penpalGender = "Male"
  const penpalImage = "/PENGUIN.png" // Add your image path here

  export default function PenpalMatch() {
    const router = useRouter()

    return (
      <div className={`min-h-screen bg-white p-6 flex flex-col items-center justify-start gap-6 ${nunito.className}`}>
        <p className="text-sm text-black mt-8">
          You have been matched with...
        </p>

        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src={penpalImage}
            alt="Penpal"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-center">
          <h1 className="text-4xl text-blue-500 font-bold mb-2">
            {penpalName}
          </h1>
          <p className="text-2xl text-blue-400">
            {penpalAge} • {penpalGender}
          </p>
        </div>

        <p className="text-lg text-black mt-4">
          Start a conversation now with each other!
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button 
            className="w-full py-3 px-6 bg-blue-500 text-pink-100 rounded-full hover:bg-blue-600 transition-colors"
            onClick={() => router.push('/chats/penpal/chat/penguin')}
          >
            Say Hello!
          </button>

          <button 
            className="w-full py-3 px-6 bg-pink-100 text-blue-500 rounded-full hover:bg-pink-500 transition-colors"
            onClick={() => router.push('/chats/penpal/match/fox')}
          >
            Generate New Penpal
          </button>

          <button 
            className="w-full py-3 px-6 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors mt-4"
            onClick={() => router.push('/')}
          >
            Return Home
          </button>
        </div>
      </div>
    )
  }