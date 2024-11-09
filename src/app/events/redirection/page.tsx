'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { Nunito } from 'next/font/google'
import { useRouter } from 'next/navigation'

const nunito = Nunito({ subsets: ['latin'] })

export default function RedirectingPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/events/authorization')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-pink-200 ${nunito.className}`}>
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite
        }
      `}</style>
      
      <h1 className="text-4xl font-extrabold text-black mb-8">
        Redirecting...
      </h1>
      
      <div className="floating">
        <Image
          src="/email.png"
          alt="Floating Image"
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  )
}