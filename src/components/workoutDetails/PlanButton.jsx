'use client'
import { workoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { LuCalendarPlus2 } from 'react-icons/lu';
import { toast } from 'react-toastify';

const PlanButton = ({ workout }) => {
    const { plans, setPlans } = useContext(workoutContext)
    const addPlans = () => {
        const isExist = plans.some(
            (item) => item.id === workout.id
        );

        if (isExist) {
            toast.error(`${workout.name} already exists in today's plan!`);
            return;
        }

        const newWorkout = {
            ...workout,
            isDone: false,
        };

        setPlans((prevPlans) => [
            ...prevPlans,
            newWorkout,
        ]);

        toast.success(
            `${workout.name} successfully added to today's plan!`
        );
    };
    return (
        <button
            onClick={() => addPlans()}
            className="btn rounded-md bg-custom-primary px-7 text-black"
        >
            <LuCalendarPlus2 />
            <span>Add to today&apos;s plan</span>
        </button>
    );
};

export default PlanButton;