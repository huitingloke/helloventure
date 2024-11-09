'use client'
import { useRouter } from 'next/navigation'
import { IoArrowBack } from 'react-icons/io5'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoFilterOutline } from 'react-icons/io5'
import { IoSearchOutline } from 'react-icons/io5'
import { Nunito } from 'next/font/google'
import { useState, useEffect } from 'react'
import EventDisplayColumn from "../../components/EventDisplayColumn";
import BottomNavBar from '@/app/components/BottomNavBar';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

export default function HomePage() {
  const router = useRouter()
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  interface TripData {
    cityTitle: string
    countryName: string
    duration: string
    imageUrl: string
    forumLink: string
    price: number
    attendees: number
  }

  const trips: TripData[] = [
    {
      cityTitle: "Paris",
      countryName: "France",
      duration: "7 days",
      imageUrl: "/images/paris.jpg",
      forumLink: "/forum/paris",
      price: 1500,
      attendees: 12
    }
  ]

  const [activeFilter, setActiveFilter] = useState('')
  const [filteredTrips, setFilteredTrips] = useState(trips)

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
    setShowFilters(false)
  }

  useEffect(() => {
    const searchResults = trips.filter(trip => {
      const searchTerm = searchQuery.toLowerCase()
      const cityMatch = trip.cityTitle.toLowerCase().includes(searchTerm)
      const countryMatch = trip.countryName.toLowerCase().includes(searchTerm)
      return cityMatch || countryMatch
    })

    let sortedResults = [...searchResults]
  
    switch(activeFilter) {
      case 'price-low':
        sortedResults.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        sortedResults.sort((a, b) => b.price - a.price)
        break
      case 'more-10':
        sortedResults = sortedResults.filter(trip => trip.attendees >= 10)
        break
      case 'less-10':
        sortedResults = sortedResults.filter(trip => trip.attendees < 10)
        break
    }

    setFilteredTrips(sortedResults)
  }, [searchQuery, activeFilter])

  return (
    <div className={`min-h-screen bg-sky-50 p-4 ${nunito.className}`}>
      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        className="p-2 text-sky-500 hover:text-sky-700 transition-colors"
      >
        <IoArrowBack size={24} />
      </button>

      {/* Header with Settings and Profile */}
      <div className="flex justify-between items-center mb-6 mt-2 px-2">
        <div className="w-10 sm:w-12" /> {/* Spacer for layout balance */}
        <h1 className="text-2xl sm:text-3xl font-bold text-sky-800">
          Upcoming Trips
        </h1>
        <button className="p-2 text-sky-500 hover:text-sky-700 transition-colors">
          <IoSettingsOutline size={24} />
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="relative mb-6">
        <div className="flex items-center bg-white rounded-lg shadow-sm">
          <IoSearchOutline size={20} className="ml-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search trips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-2 rounded-lg focus:outline-none"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 text-sky-500 hover:text-sky-700 transition-colors"
          >
            <IoFilterOutline size={20} />
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 font-semibold ml-2 mr-2">
            ✨ Curate
          </button>
        </div>

        {/* Filter Dropdown */}
        {showFilters && (
          <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg">
            <div className="p-2">
              <button
                onClick={() => handleFilterClick('price-low')}
                className={`w-full text-left p-2 hover:bg-sky-50 rounded ${
                  activeFilter === 'price-low' ? 'bg-sky-100' : ''
                }`}
              >
                Price: Low to high
              </button>
              <button
                onClick={() => handleFilterClick('price-high')}
                className={`w-full text-left p-2 hover:bg-sky-50 rounded ${
                  activeFilter === 'price-high' ? 'bg-sky-100' : ''
                }`}
              >
                Price: High to low
              </button>
              <button
                onClick={() => handleFilterClick('more-10')}
                className={`w-full text-left p-2 hover:bg-sky-50 rounded ${
                  activeFilter === 'more-10' ? 'bg-sky-100' : ''
                }`}
              >
                {'>10 travellers'}
              </button>
              <button
                onClick={() => handleFilterClick('less-10')}
                className={`w-full text-left p-2 hover:bg-sky-50 rounded ${
                  activeFilter === 'less-10' ? 'bg-sky-100' : ''
                }`}
              >
                {'<10 travellers'}
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Future Trip Components Container */}
      <div className="space-y-4 mt-6 max-w-md mx-auto ">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip, index) => (
            <EventDisplayColumn
              key={index}
              cityTitle={trip.cityTitle}
              countryName={trip.countryName}
              duration={trip.duration}
              imageUrl={trip.imageUrl}
              forumLink={trip.forumLink}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No trips found matching your search.</p>
        )}
      </div>
      <BottomNavBar />
    </div>
  )
}

interface TripData {
  cityTitle: string
  countryName: string
  duration: string
  imageUrl: string
  forumLink: string
  price: number
  travelers: number
}

const trips: TripData[] = [
  {
    cityTitle: "Paris",
    countryName: "France",
    duration: "7 days",
    imageUrl: "/images/paris.jpg",
    forumLink: "/forum/paris",
    price: 1500,
    travelers: 12
  }
]