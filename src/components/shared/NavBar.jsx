import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import Badges from './Badges';

const NavBar = () => {
    const links = <>
        <li className='text-custom-primary '><Link href="/">Workouts</Link></li>
        <li><Link href="/my-plan">My plan</Link></li>
    </>
    return (
        <div className='bg-[#0C0D10] shadow-sm'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <GiHamburgerMenu />
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-[#20242E] rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLinks></NavLinks>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Image width={20} height={20} src={logo} alt='FITLOG' className='w-5! h-5!'></Image>
                        <Link className="text-lg font-bold text-white" href='/'>FITLOG</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Badges></Badges>
                </div>
            </div>
        </div>
    );
};

export default NavBar;