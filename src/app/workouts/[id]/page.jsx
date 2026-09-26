import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuCalendarPlus2 } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const workData = await response.json()
    return (
        <div className='py-10'>
            <div className='container mx-auto p-2 flex flex-col lg:flex-row  justify-around  gap-10'>
                <div>
                    <Image className='h-full object-cover rounded-2xl' width={500} height={800} src={workData.image} alt={workData.name}></Image>
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
                        <Link
                            href="#workouts"
                            className="btn rounded-md bg-custom-primary px-7 text-black"
                        >
                            <LuCalendarPlus2 />
                            <span>Add to today&apos;s plan</span>
                        </Link>
                        <Link
                            href="#workouts"
                            className="btn rounded-md border border-[#374151] px-7 text-white"
                        >
                            <FaRegBookmark />
                            <span>Save for later</span>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default WorkoutDetailsPage;