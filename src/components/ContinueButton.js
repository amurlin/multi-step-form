import React from 'react'

export const ContinueButton = (props) => {
    const {handleFormNextStep} = props;

  return (
    <button onClick={handleFormNextStep} className='w-full h-[44px] bg-[#121316] rounded-[6px] flex flex-row justify-center items-center gap-[4px] text-[#FFFFFF] -bottom-0'>
            <p>Continue</p>
            {/* {todos.filter((task) => task.status === "DONE").length} of {todos.length}{" "} */}
            <div>1/3</div>
            <div></div>
          </button>
  )
}
