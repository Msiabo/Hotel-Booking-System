import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelRegistration = () => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
            <form className='flex bg-gray-100 rounded-xl max-w-4xl max-md:mx-2'>
                <img src={assets.regImage} alt='' className='w-1/2 rounded-xl hidden md:block' />
                <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
                    <img src={assets.closeIcon} alt='' className='w-4 h-4 cursor-pointer absolute top-4 right-4' />
                    <p className='text-2xl font-semibold mt-6'>Sign Up Your Hotel</p>

                    {/** Name */}
                    <div className='w-full mt-4'>
                        <label htmlFor='name' className='font-medium text-gray-500'>
                            Hotel Name
                        </label>
                        <input id='name' type='text' placeholder='Enter Name' className='border border-gray-300 rounded w-full px-3 py-2.5 mt-1
                    outline-indigo-500 font-light' required />
                    </div>

                    {/** Phone */}
                    <div className='w-full mt-4'>
                        <label htmlFor='contact' className='font-medium text-gray-500'>
                            Phone
                        </label>
                        <input id='contact' type='text' placeholder='Enter Phone Number' className='border border-gray-300 rounded w-full px-3 py-2.5 mt-1
                    outline-indigo-500 font-light' required />
                    </div>

                    {/** Address */}
                    <div className='w-full mt-4'>
                        <label htmlFor='address' className='font-medium text-gray-500'>
                            Address
                        </label>
                        <input id='address' type='text' placeholder='Enter Phone Number' className='border border-gray-300 rounded w-full px-3 py-2.5 mt-1
                    outline-indigo-500 font-light' required />
                    </div>
                    {/** City */}
                    <div className='w-full mt-4 max-w-60 mr-auto'>
                    <label htmlFor='city' className='font-medium text-gray-500'>City</label>
                    <select id='city' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500
                        font-light cursor-pointer' required>
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                    </div>
                    <button className="bg-black text-white px-8 py-2.5 rounded-full mt-5 transition-all duration-500 hover:bg-gray-200
                    hover:text-black cursor-pointer">
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default HotelRegistration