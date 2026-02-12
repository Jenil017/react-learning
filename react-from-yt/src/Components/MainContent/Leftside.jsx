import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Leftside = () => {
    return (
        <div className='h-[80vh] w-1/4 mt-10 ml-10 border-r-2 border-gray-200 pr-10 flex flex-col gap-5'>
            <div className='flex flex-col gap-5 justify'>
                <h2 className='text-6xl font-semibold size-12'>Prospective customers segmentation</h2>
                <p className='mt-50 text-gray-500 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat facere repellat suscipit molestias! Provident non exercitationem ullam ipsa officia et!</p>
            </div>
            <div className='mt-auto flex justify-start'>
                <GoArrowUpRight className='size-25' aria-hidden="true" />
            </div>

        </div>
    )
}

export default Leftside