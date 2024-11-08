import Image from 'next/image'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

interface EventDisplayProps {
  imageUrl: string
  title: string
  description: string
  dateTime: string
  attendees: number
  eventSlug: string
}

const Event_Display = ({ imageUrl, title, description, dateTime, attendees, eventSlug }: EventDisplayProps) => {
  return (
    <div className="flex flex-col items-center w-full max-w-sm p-4">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
        <Image
          src={imageUrl}
          alt={title}
          width={192}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h2 className="text-xl font-bold text-black mb-2 text-center">
        {title}
      </h2>
      
      <p className="text-gray-600 text-sm mb-2 text-left w-full">
        {description}
      </p>
      
      <p className="text-xs text-gray-500 mb-3">
        {dateTime}
      </p>
      
      <div className="flex items-center w-full mb-4">
        <FaUser className="text-gray-600 mr-2" />
        <span className="text-sm font-bold text-black">
          {attendees} attending
        </span>
      </div>
      
      <Link href={`/events/${eventSlug}`}>
        <button className="border border-black bg-white px-6 py-2 text-sm hover:bg-gray-100 transition-colors">
          Learn More
        </button>
      </Link>
    </div>
  )
}

export default Event_Display
