import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='border-t border-t-[#1A1D24] py-10 px-2'>
            <div className='flex flex-col md:flex-row justify-between container mx-auto gap-2 md:gap-0'>
                <div className='flex justify-center items-center gap-2'>
                    <Image width={14} height={14} src={logo} alt='FITLOG' className='w-3.5! h-3.5!'></Image>
                    <Link className="text-sm font-bold text-white" href='/'>FITLOG</Link>
                </div>
                <p className='text-xs text-center md:text-left text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;