import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-2 pt-10'>
            <div>
                <Image 
                width={300}
                height={300}
                src={logo} alt='logo'></Image>
            </div>
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-[#403F3F] font-semibold'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;