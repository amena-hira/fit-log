'use client'
import React, { createContext, useState } from 'react';

export const workoutContext = createContext(null)

const WorkoutProvider = ({ children }) => {
    const [plans, setPlans] = useState([])
    const [saved, setSaved] = useState([])
    const markAsDone = (id) => {
        setPlans((prevPlans) =>
            prevPlans.map((workout) =>
                workout.id === id
                    ? { ...workout, isDone: true }
                    : workout
            )
        );
    };
    const sharedData = {
        plans,
        setPlans,
        saved,
        setSaved,
        markAsDone
    }
    
    return <workoutContext.Provider value={sharedData}>{children}</workoutContext.Provider>
};

export default WorkoutProvider;