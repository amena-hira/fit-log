'use client'
import React, { createContext, useState } from 'react';

export const workoutContext = createContext(null)

const WorkoutProvider = ({ children }) => {
    const [plans, setPlans] = useState([])
    const [saved, setSaved] = useState([])
    const sharedData = {
        plans,
        setPlans,
        saved,
        setSaved
    }
    return <workoutContext.Provider value={sharedData}>{children}</workoutContext.Provider>
};

export default WorkoutProvider;