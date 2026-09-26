'use client'
import ListWorkoutCard from '@/components/shared/ListWorkoutCard';
import NotFound from '@/components/shared/NotFound';
import { workoutContext } from '@/context/WorkoutContext';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {
    const { plans, saved } = useContext(workoutContext)
    const [sortBy, setSortBy] = useState("duration")
    const [selectedTab, setSelectedTab] = useState("plan")
    const selectedWorkouts = selectedTab === "plan" ? plans : saved;

    const sortWorkouts = (workouts) => {
        const sortedWorkouts = [...workouts]
        if (sortBy === 'duration') {
            sortedWorkouts.sort((a, b) => parseFloat(b.duration) - parseFloat(a.duration))
        }
        else if (sortBy === 'calories') {
            sortedWorkouts.sort((a, b) => parseFloat(b.caloriesBurned) - parseFloat(a.caloriesBurned))
        }
        else if (sortBy === 'rating') {
            sortedWorkouts.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
        }
        return sortedWorkouts;
    }

    const sortedWorkouts = sortWorkouts(selectedWorkouts)
    console.log(`sorted workouts: ${sortedWorkouts}`)
    const totalDuration = selectedWorkouts.reduce((sum, workout) => sum + parseInt(workout.duration), 0);
    const totalCalories = selectedWorkouts.reduce((sum, workout) => sum + parseInt(workout.caloriesBurned), 0);
    return (
        <div className='container mx-auto px-2 my-10 space-y-2'>
            <h2 className='text-3xl font-bold text-white text-center lg:text-left'>MY PLAN</h2>
            <p className='text-[#8A92A0] text-center lg:text-left'>Cap of five lifts for today. Finish them, then load more.</p>
            <div className="my-10 grid w-full grid-cols-3 rounded-2xl border border-[#232732] bg-[#13161D] px-8 py-10">
                <div className="border-r border-[#232732]">
                    <p className="text-sm text-[#8A92A0]">
                        Exercises
                    </p>
                    <p className="mt-2 text-4xl font-bold text-custom-primary">
                        {selectedWorkouts.length}
                    </p>
                </div>

                <div className="border-r border-[#232732] pl-3 lg:pl-10">
                    <p className="text-sm text-[#8A92A0]">
                        Minutes
                    </p>
                    <p className="mt-2 text-4xl font-bold text-white">
                        {totalDuration}
                    </p>
                </div>

                <div className="pl-3 lg:pl-10">
                    <p className="text-sm text-[#8A92A0]">
                        Calories
                    </p>
                    <p className="mt-2 text-4xl font-bold text-white">
                        {totalCalories}
                    </p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className="tabs tabs-box gap-1 rounded-xl border p-1 bg-[#151921] border-[#232732]">
                    <input type="radio" name="my_tabs_1" className="tab rounded-lg checked:bg-[#1F242D] checked:border checked:border-[#1F242D] checked:font-bold checked:text-white" aria-label="Today's Plan"
                        checked={selectedTab === 'plan'}
                        onChange={() => setSelectedTab("plan")} />
                    <input type="radio" name="my_tabs_1" className="tab rounded-lg checked:bg-[#1F242D] checked:border checked:border-[#1F242D] checked:font-bold checked:text-white" aria-label="Saved"
                        checked={selectedTab === 'saved'}
                        onChange={() => setSelectedTab("saved")} />
                </div>

                <div className='flex items-center gap-4'>
                    <p className='whitespace-nowrap text-[#8A92A0]'>Sort By</p>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select w-full rounded-lg bg-[#13161D] border border-[#232732] text-white">
                        <option value={"duration"}>Duration</option>
                        <option value={"calories"}>Calories</option>
                        <option value={"rating"}>Rating</option>
                    </select>
                </div>

            </div>
            <div className='mt-8 space-y-4'>
                {
                    sortedWorkouts.length === 0 ? (<NotFound />)
                        :
                        (sortedWorkouts.map(workout => {
                            return (
                                <ListWorkoutCard key={workout.id} workout={workout} selectedTab={selectedTab}></ListWorkoutCard>
                            )
                        }))
                }

            </div>

        </div>
    );
};

export default MyPlanPage;