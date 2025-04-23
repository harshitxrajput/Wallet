import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import React from 'react'

const Card = ({ type, name, bank, time, amount }) => {
    return (
        <div className='w-full h-auto hover:bg-gray-100 flex justify-start ml-10 md:ml-0 md:justify-center items-center mt-10 gap-3 md:gap-6'>
            {type==="in" ? <ArrowUpRight className='text-green-600 bg-green-200 rounded-lg size-12 p-2'/> : <ArrowDownRight className='text-yellow-600 bg-yellow-200 rounded-lg size-12 p-2'/>}
            <div className='w-1/2 md:w-1/3'>
                <p className='font-semibold text-lg md:text-xl'>{name}</p>
                <p className='font-medium text-gray-400 text-sm md:text-base w-full'>{bank}</p>
            </div>

            <div className='text-right font-medium text-gray-600'>
                <p className='md:text-lg'>{time}</p>
                {
                    type==="in" ? <p className='text-green-600 text-xl md:text-2xl'>{amount}</p> : <p className='text-yellow-600 text-xl md:text-2xl'>{amount}</p>
                }
            </div>
        </div>
    )
}

export default Card
