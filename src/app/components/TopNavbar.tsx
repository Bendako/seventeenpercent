'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaCar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Image from 'next/image';
import MeImg from '../../../public/me.jpg'



type Props = {}

const TopNavbar = (props: Props) => {
    const router = useRouter()
    
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <button className="btn btn-ghost text-xl" onClick={() => router.push('/')}>17%</button>
  </div>
  <div className="flex-none gap-2">
    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image alt="Tailwind CSS Navbar component" width={100} height={100} src={MeImg} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            {/* <span className="badge">New</span> */}
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default TopNavbar