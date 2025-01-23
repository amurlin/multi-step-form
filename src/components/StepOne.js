import React from 'react';
import { isStepOneValid } from '@/utils/stepOneValidation';
import InputSection from './InputSection';


const StepOne = (props) => {
    const {handleNextStep, errors, formValue, handleError, setFormValue, clearError} = props;

    const handleChange = (event) => {
      const {name, value} = event.target;
      setFormValue((prev) => ({
        ...prev,
        [name]: value,
      }));
      clearError(name);
    };

    const handleFormNextStep = () => {
      const { isValid, errors } = isStepOneValid(formValue);

      if (isValid){
        handleNextStep();
      }
      handleError(errors);
    };

  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#F4F4F4]'>
      <div className='w-[480px] h-[655px] p-[32px] bg-white flex flex-col justify-between rounded-[8px]'>
        <div>
        <div className='flex flex-col gap-[8px] '>
          <img alt='pinecone logo' src="./img/pinecone-logo.png" className='w-[60px] h-[60px] ' />
          <p className='text-[26px] font-semibold'>Join Us! 😎</p>
          <p className='text-[18px] font-normal text-[#8E8E8E] '>Please provide all current information accurately.</p>
        </div>
        <div className='mt-[28px] flex flex-col gap-[12px] '>
            <InputSection handleChange={handleChange} errors={errors} question={"First name"} name={"firstName"} placeholder={"Your first name"} value={formValue.firstName} />
            <InputSection handleChange={handleChange} errors={errors} question={"Last name"} name={"lastName"} placeholder={"Your second name"} value={formValue.lastName} />
            <InputSection handleChange={handleChange} errors={errors} question={"User name"} name={"userName"} placeholder={"Your username"} value={formValue.userName} />


            {/* <div className='w-[416px] h-[68px] flex flex-col '>
                <div className='flex flex-row gap-[5px]'>
                  <p className='text-[14px] font-[700] text-[#334155] '>First name</p>
                  <p className='text-[14px] font-[700] text-[#E14942]'>*</p>
                </div>
                <input 
                name={"firstName"}
                className={`${errors ? "" : ""}, w-full h-[44px] border-[1.5px] border-solid border-[#CBD5E1] rounded-[8px] flex items-center text-[16px] font-[500] p-[12px]`}
                onChange={handleChange}
                placeholder='Your first name'/>
                {errors.firstName.length > 0 && (
                  <p className='text-red-500'>{errors.firstName}</p>)}
            </div> */}
            
        </div>
        </div>
        <button onClick={handleFormNextStep} className='w-full h-[44px] bg-[#121316] rounded-[6px] flex flex-row justify-center items-center gap-[4px] text-[#FFFFFF] -bottom-0'>
          <p>Continue</p>
          <div>1/3</div>
          <div></div>
        </button>
      </div>
    </div>
  );
};


export default StepOne;