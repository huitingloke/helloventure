"use client"
import Image from 'next/image';
import BottomNavBar from '../../components/BottomNavBar';
import { useRouter } from 'next/navigation';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default function ForumPage() {
    const router = useRouter();

    return (
        <div className={`${nunito.className} h-screen overflow-y-auto overscroll-y-contain`} style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="fixed top-0 left-0 right-0 bg-white p-4 flex items-center shadow-sm">
                <button onClick={() => router.back()} className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                <h1 className="text-lg font-semibold">Forum: Osaka</h1>
            </div>
            <div className="mt-16 pb-20">
                <Image src="/forum.png" alt="placeholder" width={500} height={300} />
            </div>
            <BottomNavBar />
        </div>
    )
}