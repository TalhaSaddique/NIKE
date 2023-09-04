import React from 'react'

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl dark:shadow-slate-800 px-10 py-16 '>
        <div className='flex flex-row items-center justify-center w-11 h-11 bg-coral-red rounded-full '>
            <img width={24} height={24} src={imgURL} alt={label} />
        </div>
        <h3 className='mt-5 font-palanquin font-bold text-3xl leading-normal '>
            {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray dark:text-white-400 '>
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard