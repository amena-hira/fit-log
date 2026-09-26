import Image from 'next/image';
import React from 'react';
import PlanButton from '@/components/workoutDetails/PlanButton';
import SaveButton from '@/components/workoutDetails/SaveButton';
import NotFound from '@/app/not-found';

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;
    let workData = {};
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/fitlog/${id}`
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch workout: ${response.status}`);
        }

        workData = await response.json();
    } catch (error) {
        return <NotFound/>;
    }
    return (
        <div className='py-10'>
            <div className='container mx-auto p-2 grid grid-cols-1 lg:grid-cols-2 justify-center lg:justify-around gap-10'>
                <div>
                    <Image className='h-full w-auto object-cover rounded-2xl' loading='eager' width={400} height={800} src={workData.image} alt={workData.name}></Image>
                </div>
                <div className='space-y-5'>
                    <h2 className='font-bold text-4xl text-white'>{workData.name}</h2>
                    <p className='text-custom-secondary'>{workData.description}</p>
                    <div className='flex gap-2'>
                        {
                            workData.muscleGroups?.map((muscle, index) => {
                                return (
                                    <div key={index} className='badge bg-custom-primary text-black font-semibold text-xs rounded-full'>{muscle}</div>
                                )
                            })
                        }
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-[#1E2330] bg-[#151922]">
                        <table className="table">
                            <tbody>
                                <tr className="border-b-[#1E2330]">
                                    <td className="text-xs font-bold text-custom-secondary">
                                        EQUIPMENT
                                    </td>
                                    <td className="text-right text-sm text-[#E5E7EB]">
                                        {workData.equipment}
                                    </td>
                                </tr>

                                <tr className="border-b-[#1E2330]">
                                    <td className="text-xs font-bold text-custom-secondary">
                                        DIFFICULTY
                                    </td>
                                    <td className="text-right text-sm text-[#E5E7EB]">
                                        {workData.difficulty}
                                    </td>
                                </tr>

                                <tr className="border-b-[#1E2330]">
                                    <td className="text-xs font-bold text-custom-secondary">
                                        SETS
                                    </td>
                                    <td className="text-right text-sm text-[#E5E7EB]">
                                        {workData.sets}
                                    </td>
                                </tr>

                                <tr className="border-b-[#1E2330]">
                                    <td className="text-xs font-bold text-custom-secondary">
                                        REPS
                                    </td>
                                    <td className="text-right text-sm text-[#E5E7EB]">
                                        {workData.reps}
                                    </td>
                                </tr>

                                <tr className="border-b-[#1E2330]">
                                    <td className="text-xs font-bold text-custom-secondary">
                                        DURATION
                                    </td>
                                    <td className="text-right text-sm text-[#E5E7EB]">
                                        {workData.duration}
                                    </td>
                                </tr>

                                <tr className="border-b-[#1E2330]">
                                    <td className="text-xs font-bold text-custom-secondary">
                                        CALORIES
                                    </td>
                                    <td className="text-right text-sm text-[#E5E7EB]">
                                        {workData.caloriesBurned}
                                    </td>
                                </tr>

                                <tr className="border-b-0">
                                    <td className="text-xs font-bold text-custom-secondary">
                                        RATING
                                    </td>
                                    <td className="text-right text-sm text-[#E5E7EB]">
                                        {workData.rating}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className='font-extrabold text-white tracking-wider'>INSTRUCTIONS</h3>
                    <ol className='list-decimal px-4 space-y-2'>
                        {
                            workData.instructions?.map((instruction, index) => {
                                return (
                                    <li key={index} className='text-[#D1D5DB]'>{instruction}</li>
                                )
                            })
                        }
                    </ol>
                    <div className='flex gap-2'>
                        <PlanButton workout={workData}></PlanButton>
                        <SaveButton workout={workData}></SaveButton>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default WorkoutDetailsPage;