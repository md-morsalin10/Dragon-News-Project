import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import navLogo from "@/assets/user.png"
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto py-5 px-4'>
            <div></div>
            <div>
                <ul className='flex justify-center items-center gap-2 text-gray-400'>
                    <li><NavLink href={"/"}>Home</NavLink></li>
                    <li><NavLink href={"about"}>About</NavLink></li>
                    <li><NavLink href={"carrier"}>Carrier</NavLink></li>
                </ul>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <Image
                    width={100}
                    height={100}
                    alt='nav-logo'
                    className='w-10 h-10'
                    src={navLogo} ></Image>

                <button className='btn bg-gray-600 text-white w-25'>Login</button>
            </div>

        </div>
    );
};

export default Navbar;