import Link from 'next/link';
import React from 'react';

const Badges = () => {
    return (
        <>
            <Link
                href="/my-plan"
                className="flex items-center gap-1 text-sm text-[#D1D5DB] hover:bg-slate-900 px-3 py-1 rounded-full"
            >
                <span>Plan</span>

                <span className="badge h-5 w-5 rounded-full border-none bg-custom-primary text-sm font-semibold text-black">
                    0
                </span>
            </Link>

            <Link
                href="/my-plan"
                className="flex items-center gap-1 text-sm text-custom-secondary hover:bg-slate-900 px-3 py-1 rounded-full"
            >
                <span>Saved</span>

                <span className="badge h-5 w-5 rounded-full border border-[#2D313B] text-sm bg-transparent text-gray-300">
                    0
                </span>
            </Link>
        </>
    );
};

export default Badges;