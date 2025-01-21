import React from 'react'

const StepOne = (props) => {
    const {handleNextStep} = props;

  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#F4F4F4]'>
      <div className='w-[480px] h-[655px] p-[32px] bg-white flex flex-col rounded-[8px]'>
        <div className='flex flex-col gap-[8px] '>
          <img alt='pinecone logo' src="./img/pinecone-logo.png" className='w-[60px] h-[60px] '/>
          <p className='text-[26px] font-semibold'>Join Us! 😎</p>
          <p className='text-[18px] font-normal text-[#8E8E8E] '>Please provide all current information accurately.</p>
        </div>
        <div className='mt-[28px] '>
            <div className='w-[416px] h-[68px] flex flex-col '>
                <p>First name</p>
                <input className='w-full h-[44px] '/>
            </div>
        </div>
        <button onClick={handleNextStep}>Next</button>
      </div>
    </div>
  );
};


export default StepOne;