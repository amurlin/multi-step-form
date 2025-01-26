import React from 'react'

export const ContinueButton = (props) => {
    const { handleFormNextStep, currentStep = 1, totalSteps = 3 } = props;  // Алхам, нийт алхамын тоо авах

    return (
        <button onClick={handleFormNextStep} className='w-full h-[44px] bg-[#121316] rounded-[6px] flex flex-row justify-center items-center gap-[4px] text-[#FFFFFF]'>
            <p>Continue</p>
            <div className="text-white">{currentStep} / {totalSteps}</div> {/* Алхам 1/3 */}
        </button>
    )
}
