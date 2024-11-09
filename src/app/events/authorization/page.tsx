  'use client'

  import { useState, useEffect } from 'react';
  import Image from 'next/image';
  import { Nunito } from 'next/font/google';
  import { useRouter } from 'next/navigation';

  const nunito = Nunito({ subsets: ['latin'] });

  export default function Authorization() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
      if (selectedImage) {
        const timer = setTimeout(() => {
          router.push('/events/signup-confirmation');
        }, 3000);

        return () => clearTimeout(timer);
      }
    }, [selectedImage, router]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const fileType = file.type.toLowerCase();
        if (fileType === 'image/jpeg' || fileType === 'image/png') {
          const imageUrl = URL.createObjectURL(file);
          setSelectedImage(imageUrl);
        } else {
          alert('Please upload only JPEG or PNG files');
        }
      }
    };

    return (
      <div className={`min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4 ${nunito.className}`}>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-600">
          Upload your proof of attendance!
        </h1>
      
        <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
          {selectedImage ? (
            <div className="relative w-full h-64 mb-4">
              <Image
                src={selectedImage}
                alt="Uploaded proof"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          ) : null}
        
          <div className="flex justify-center">
            <label className="cursor-pointer">
              <div className="bg-pink-400 hover:bg-pink-500 text-white py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
                {selectedImage ? 'Change Image' : 'Upload Image'}
                <input
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png"
                  onChange={handleImageUpload}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }