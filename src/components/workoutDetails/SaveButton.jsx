'use client'
import { workoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { LuCalendarPlus2 } from 'react-icons/lu';
import { toast } from 'react-toastify';

const SaveButton = ({ workout }) => {
    const { saved, setSaved } = useContext(workoutContext)
    const addSavedWorkout = () => {
        const isExist = saved.some((item) => item.id === workout.id)
        if (isExist) {
            toast.error(`${workout.name} is already exist!`)
            return saved;
        }
        toast.success(`${workout.name} is successfully added into saved list!`)
        return setSaved([...saved, workout])
    }
    return (
        <button
            onClick={()=>addSavedWorkout()}
            className="btn rounded-md border border-[#374151] px-7 text-white"
        >
            <FaRegBookmark />
            <span>Save for later</span>
        </button> 
    );
};

export default SaveButton;