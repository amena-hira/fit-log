import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';
import Link from 'next/link';

const getWorkOuts = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/fitlog`)
        if (!response.ok) {
            throw new Error(`Failed to fetch books: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}

const Workouts = async () => {
    const workoutsData = await getWorkOuts()
    // console.log(workoutsData)
    return (
        <section id='workouts' className='container mx-auto p-2 my-10 text-center lg:text-left'>
            <h3 className='text-3xl text-bold text-white'>THE LIBRARY</h3>
            <p className='text-custom-secondary text-sm'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-15'>
                {
                    workoutsData.length === 0 ?
                        <p className='text-center'>Workouts Not Found</p>
                        : workoutsData.map(workout => {
                            return (
                                <Link key={workout.id} href={`/workouts/${workout.id}`}>
                                    <WorkoutCard workout={workout}></WorkoutCard>
                                </Link>
                            )
                        })
                }
            </div>
        </section>
    );
};

export default Workouts;