import React from 'react'
import { isStepOneValid } from '@/utils/stepOneValidation';
import InputSection from './InputSection';

const StepTwo = (props) => {
    const {handleNextStep, handleBackStep, errors, formValue, handleError, setFormValue} = props;

    const handleChange = (event) => {
      const {name, value} = event.target;
      setFormValue((prev) => ({
        ...prev,
        [name]: value,
      }))
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
        <img alt='pinecone logo' src="./img/pinecone-logo.png" className='w-[60px] h-[60px] '/>
        <p className='text-[26px] font-semibold'>Join Us! 😎</p>
        <p className='text-[18px] font-normal text-[#8E8E8E] '>Please provide all current information accurately.</p>
      </div>
      <div className='mt-[28px] flex flex-col gap-[12px] '>

            <InputSection handleChange={handleChange} errors={errors} question={"Email"} name={"email"} placeholder={"Your email"} />
            <InputSection handleChange={handleChange} errors={errors} question={"Phone number"} name={"phoneNumber"} placeholder={"Your phone number"} />
            <InputSection handleChange={handleChange} errors={errors} question={"Password"} name={"password"} placeholder={"Your password"} />
            <InputSection handleChange={handleChange} errors={errors} question={"Confirm password"} name={"confirmPassword"} placeholder={"Confirm password"} /> 
      </div>
      </div>
      <div>
          <button onClick={handleFormNextStep} className='w-full h-[44px] bg-[#121316] rounded-[6px] flex flex-row justify-center items-center gap-[4px] text-[#FFFFFF] -bottom-0'>
            <p>Continue</p>
            <div>2/3</div>
            <div></div>
          </button>
          <button onClick={handleBackStep}>Back</button>
      </div>
    </div>
  </div>
  );
};

export default StepTwo;
