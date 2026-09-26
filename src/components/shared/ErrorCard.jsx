import React from 'react';

const ErrorCard = () => {
    return (
        <div className="container mx-auto py-20 text-center">
            <div className="rounded-2xl border border-white/10 bg-[#111317]/50 p-10">
                <h2 className="text-2xl font-bold text-white">
                    SOMETHING WENT WRONG
                </h2>

                <p className="mt-2 text-sm text-[#A1A1AA]">
                    Could not load this workout.
                </p>
            </div>
        </div>
    );
};

export default ErrorCard;