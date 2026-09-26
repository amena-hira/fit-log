"use client";
import { workoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MarkDoneButton = ({workout}) => {
    const { markAsDone } = useContext(workoutContext)
    const handleMarkAsDone = () =>{
        markAsDone(workout.id);
        toast.success(`${workout.name} marked as done!`);
    }
    return (
        <button
        onClick={handleMarkAsDone}
            disabled={workout.isDone}
            className={`btn btn-outline border rounded-full
                ${workout.isDone ? "border-custom-primary text-black bg-custom-primary" :"border-[#374151]"}`}
        >
            <FaCheck />
            <span>Mark as Done</span>
        </button>
    );
};

export default MarkDoneButton;