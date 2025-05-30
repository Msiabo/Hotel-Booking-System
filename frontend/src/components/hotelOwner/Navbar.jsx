import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 bg-white transition-all mt-5 duration-300'>
            {/* Logo */}
            <Link to="/" >
                <img src={assets.logo} alt="logo" className='h-9 opacity-80' />
            </Link>
            <UserButton />
        </div>
    )
}

export default Navbar