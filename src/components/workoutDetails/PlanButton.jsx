'use client'
import { workoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { LuCalendarPlus2 } from 'react-icons/lu';
import { toast } from 'react-toastify';

const PlanButton = ({workout}) => {
    const {plans, setPlans} = useContext(workoutContext)
    const addPlans = () =>{
        const isExist = plans.some((item)=>item.id === workout.id)
        if (isExist) {
            toast.error(`${workout.name} is already exist!`)
            return plans;
        }
        toast.success(`${workout.name} is successfully added into plans!`)
        return setPlans([...plans,workout])
    }
    return (
        <button
            onClick={()=>addPlans()}
            className="btn rounded-md bg-custom-primary px-7 text-black"
        >
            <LuCalendarPlus2 />
            <span>Add to today&apos;s plan</span>
        </button>
    );
};

export default PlanButton;