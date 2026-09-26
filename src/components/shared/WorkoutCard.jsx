import Image from 'next/image';
import React from 'react';
import { LiaBurnSolid } from "react-icons/lia";
import { FaRegClock, FaRegStar } from "react-icons/fa";

const WorkoutCard = ({ workout }) => {
    return (
        <div>
            <div className="card bg-[#15171D] border-[#222630] rounded-2xl shadow-sm">
                <figure>
                    <Image className='w-full h-48' width={740} height={400} loading='eager' src={workout.image} alt={workout.name}></Image>
                </figure>
                <div className="card-body">
                    <div className='flex gap-2'>
                        {
                            workout.muscleGroups?.map((muscle, index) => {
                                return (
                                    <div key={index} className='badge bg-custom-primary text-black font-bold text-xs rounded-full'>{muscle}</div>
                                )
                            })
                        }
                    </div>
                    <h2 className="card-title font-extrabold!">{workout.name}</h2>
                    <p className='text-xs text-custom-secondary text-left!'>{workout.equipment}</p>
                    <div className="divider my-0!"></div>
                    <div className="flex items-center gap-5">
                        <div className='flex gap-2 items-center justify-center'>
                            <FaRegClock />
                            <span>{workout.duration}</span>
                        </div>
                        <div className='flex gap-2 items-center justify-center'>
                            <LiaBurnSolid />
                            <span>{workout.caloriesBurned}</span>
                        </div>
                        <div className='flex gap-2 items-center justify-center'>
                            <FaRegStar />
                            <span>{workout.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;