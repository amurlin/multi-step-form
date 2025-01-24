import React from 'react'

export const BackButton = (props) => {
    const {handleBackStep} = props;
    
  return (
    <button onClick={handleBackStep} className='w-[30%] h-[44px] bg-[#FFFFFF] border-[1.5px] border-solid border-[#CBD5E1] rounded-[6px] flex flex-row justify-center items-center gap-[4px] text-[#202124] -bottom-0' >Back</button>
  )
}
