import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const Loader = ({text}) => {
  return (
    <div className='flex justify-center items-center h-[450px] w-full'>
        <div className='flex flex-col items-center gap-1 '>
             <OrbitProgress variant="disc" color="#32cd32" size="medium" text="" textColor="" />
             <p className='text-slate-800'>
                {text ? text : 'Loading...'} 
            </p>
        </div>
    </div>
    
   
  )
}

export default Loader