import React from 'react'

const FormFinished = () => {
    

  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#F4F4F4]'>
      <div className='w-[480px] p-[32px] bg-white flex flex-col justify-between rounded-[8px]'>
        <div>
        <div className='flex flex-col gap-[8px] '>
          <img alt='pinecone logo' src="./img/pinecone-logo.png" className='w-[60px] h-[60px] ' />
          <p className='text-[26px] font-semibold'>You`re All Set 🔥</p>
          <p className='text-[18px] font-normal text-[#8E8E8E] '>We have received your submission. Thank you!</p>
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default FormFinished;
