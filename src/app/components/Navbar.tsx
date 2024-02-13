'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaCar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";



type Props = {}

const Navbar = (props: Props) => {
    const router = useRouter()
    
    return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-2 mx-auto">
        <button onClick={() => router.push('/')} data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <FaHome color='white' size={30} />
        </button>
        <button onClick={() => router.push('/Futureride')} data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <FaCar color='white' size={30} />
        </button>
    </div>
    </div>
  )
}

export default Navbar