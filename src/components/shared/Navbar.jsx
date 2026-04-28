"use client"
import Image from 'next/image';
import navLogo from "@/assets/user.png"
import NavLink from './NavLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
   

    const user = session?.user;
    console.log(user, "navbar");


    return (
        <div className='flex justify-between items-center container mx-auto py-5 px-4'>
            <div></div>
            <div>
                <ul className='flex justify-center items-center gap-2 text-gray-400'>
                    <li><NavLink className={""} href={"/"}>Home</NavLink></li>
                    <li><NavLink href={"/about"}>About</NavLink></li>
                    <li><NavLink href={"/carrier"}>Carrier</NavLink></li>
                </ul>
            </div>
            {isPending? (<span className="loading loading-dots loading-xs"></span>): user ? (
                <div className='flex justify-center items-center gap-2'>
                    <h2>Hello,{user?.name}</h2>
                    <Image
                        width={100}
                        height={100}
                        alt='nav-logo'
                        className='w-10 h-10 rounded-full'
                        src={user?.image || navLogo} ></Image>

                   
                        <button 
                        onClick={async()=>await authClient.signOut()}
                        className='btn bg-gray-600 text-white w-25'>LogOut</button>
                    
                </div>) 
                : <Link href={'/login'}>
                <button className='btn bg-gray-600 text-white w-25'>Login</button>
               </Link>
            }

        </div>
    );
};

export default Navbar;