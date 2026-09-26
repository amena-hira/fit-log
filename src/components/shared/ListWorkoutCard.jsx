import { workoutContext } from '@/context/WorkoutContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import {  FaRegClock, FaRegStar } from 'react-icons/fa';
import { LiaBurnSolid } from 'react-icons/lia';
import { RxCross1 } from 'react-icons/rx';
import { toast } from 'react-toastify';
import MarkDoneButton from './MarkDoneButton';

const ListWorkoutCard = ({ workout, selectedTab }) => {
    const { setPlans, setSaved } = useContext(workoutContext);
    
    const handleRemoveWorkout = () => {
        if (selectedTab === 'plan') {
            setPlans((prevPlans) =>
                prevPlans.filter((plan) => plan.id !== workout.id)
            );
        } else {
            setSaved((prevSaved) =>
                prevSaved.filter((save) => save.id !== workout.id)
            );
        }
        toast.error(`${workout.name.toUpperCase()} is removed from ${selectedTab} workout list!`)
    };
    return (
        <div>
            <div className='flex justify-between items-center bg-[#14171E] border border-[#232732] p-4 rounded-2xl'>
                <div className='flex gap-4 items-center'>
                    <div>
                        <Image src={workout.image} alt={workout.name} height={80} width={144} className='w-36 h-20 object-cover rounded-lg'></Image>
                    </div>
                    <div>
                        <h3 className='text-white font-bold'>{workout.name}</h3>
                        <p className='text-[#8A92A0] text-xs'>{workout.equipment}</p>
                        <div className="flex items-center gap-5 pt-1">
                            <div className='flex gap-2 items-center justify-center'>
                                <FaRegClock className='text-custom-primary' />
                                <span className='text-xs text-[#D1D5DB]'>{workout.duration}</span>
                            </div>
                            <div className='flex gap-2 items-center justify-center'>
                                <LiaBurnSolid className='text-custom-primary' />
                                <span className='text-xs text-[#D1D5DB]'>{workout.caloriesBurned}</span>
                            </div>
                            <div className='flex gap-2 items-center justify-center'>
                                <FaRegStar className='text-custom-primary' />
                                <span className='text-xs text-[#D1D5DB]'>{workout.rating}</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex items-center gap-3'>
                    <Link href={`/workouts/${workout.id}`} className="btn btn-outline border border-[#374151] rounded-full">View Details</Link>
                    {
                        selectedTab === 'plan' && <MarkDoneButton workout={workout}></MarkDoneButton>
                    }
                    <button onClick={handleRemoveWorkout} className="btn btn-ghost">
                        <RxCross1 />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListWorkoutCard;