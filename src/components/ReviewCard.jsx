import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex flex-col flex-1 items-center justify-center shadow-3xl dark:shadow-slate-900 px-10 py-16 '>
        <img className='rounded-full object-cover w-[120px] h-[120px]  ' src={imgURL} alt="cusotmer" />
        <p className='info-text mt-6 max-w-sm text-center '>
            {feedback}
        </p>
        <div className='flex flex-row mt-4 items-center justify-center gap-2.5 '>
            <img className='object-contain m-0 ' width={24} height={24} src={star} alt="rating" />
            <p className='font-montserrat text-xl text-slate-gray dark:text-white-400 '>
                ({rating})
            </p>
        </div>
        <h3 className='font-palanquin font-bold text-3xl text-cneter mt-2 '>
            {customerName}
        </h3>
    </div>
  )
}

export default ReviewCard