'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = () => {
    const pathName = usePathname()
    return (
        <>
            <li ><Link className={`rounded-full px-4 py-1.5 ${pathName === "/" ? "font-semibold bg-custom-primary-bg text-custom-primary border border-custom-primary-bg":""} `} href="/">Workouts</Link></li>
            <li><Link className={`rounded-full px-4 py-1.5 ${pathName === "/my-plan" ? "font-semibold bg-custom-primary-bg text-custom-primary border border-custom-primary-bg" : ""} `} href="/my-plan">My plan</Link></li>
        </>
    );
};

export default NavLinks;