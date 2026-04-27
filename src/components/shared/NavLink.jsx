"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const pathName =usePathname()
    // console.log(pathName,"pathName");
    const isActive = href === pathName;
    return (
        <Link className={`${isActive ? "border-b-2 border-b-purple-500":"" }${className}`} href={href}>{children}</Link>
    );
};

export default NavLink;