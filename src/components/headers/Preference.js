import React from 'react'
import Toogle from '../Toogle/Toogle'

const Preference = (props) => {
    const { header , text, } = props
  return (
    <div className='flex items-center justify-between border-b-2 lg:w-[850px]'>
        <div className=' my-[15px] lg:my-[30px]'>
            <h1 className='font-bold lg:text-[24px] leading-[36px]'>{header}</h1>
            <p className='text-[20px] leading-6 w-[230px] lg:w-auto '>{text}</p>
        </div>
        <Toogle
        
        />

    </div>
  )
}

export default Preference