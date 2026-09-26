import React from 'react';
import banner from '@/assets/banner.png'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='container mx-auto my-10 p-2'>
            <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-2 items-center rounded-2xl bg-[#15171D] border-[#222630] p-5 md:p-15'>
                <div className='space-y-5 text-center lg:text-left'>
                    <h4 className='text-xs font-bold text-custom-primary'>WORKOUT LIBRARY</h4>
                    <h2 className='font-extrabold text-5xl text-white font-oswald'>TRAIN WITH INTENT. LOG <br />
                        EVERY SET.</h2>
                    <p className='text-lg text-custom-secondary'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <Link
                        href="#library"
                        className="btn rounded-md bg-custom-primary px-7 text-black"
                    >
                        <FaArrowDown />
                        BROWSE WORKOUTS
                    </Link>
                </div>
                <div>
                    <Image src={banner} alt='Banner' loading="eager"></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;