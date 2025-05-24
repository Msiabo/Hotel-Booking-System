import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const Featured = () => {

    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center [x-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

        <Title title='Featured Destinations' subTitle='Discover our handpicked selection of exceptional properties around the world,
         offering unparalled luxury and unforgettable experiences'/>

        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room,index) => (
                <HotelCard key={room._id} room={room} index={index}/>
            ))}
        </div>
        <button onClick={() => {navigate('/all-rooms'); scrollTo(0,0)}} className='bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 hover:bg-white mt-8 
                    hover:text-black cursor-pointer hover:border hover:border-black'>
            View All Destinations
        </button>
    </div>
  )
}

export default Featured