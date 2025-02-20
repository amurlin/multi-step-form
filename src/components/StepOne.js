import React from 'react';
import isStepOneValid from '@/utils/stepOneValidation';
import InputSection from './InputSection';
import { ContinueButton } from './ContinueButton';
import { motion } from 'framer-motion';
// import Image from 'next/image';


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
        const localData = {
            ...formValue,
            currentStep: 1,
        }

        localStorage.setItem("formData", JSON.stringify(localData));

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
            <InputSection handleChange={handleChange} errors={errors.firstName} title={"First name"} name={"firstName"} placeholder={"Your first name"} value={formValue.firstName} />
            <InputSection handleChange={handleChange} errors={errors.lastName} title={"Last name"} name={"lastName"} placeholder={"Your second name"} value={formValue.lastName} />
            <InputSection handleChange={handleChange} errors={errors.userName} title={"User name"} name={"userName"} placeholder={"Your username"} value={formValue.userName} />
        </div>
        </div>
        <ContinueButton handleFormNextStep={handleFormNextStep} currentStep={1} totalSteps={3} />
      </div>
    </div>
  );
};


export default StepOne;