// import React from 'react'
// import isStepOneValid from '@/utils/stepOneValidation';
// import InputSection from './InputSection';
// import { ContinueButton } from './ContinueButton';
// import { BackButton } from './BackButton';
// // import Image from 'next/image';


// const StepTwo = (props) => {
//     const {handleNextStep, handleBackStep, errors, formValue, handleError, setFormValue, clearError} = props;

//     const handleChange = (event) => {
//       const {name, value} = event.target;
//       setFormValue((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//       clearError(name);
//     };

//     const handleFormNextStep = () => {
//       const { isValid, errors } = isStepOneValid(formValue);

//       if (isValid){
//         const localData = {
//             ...formValue,
//             currentStep: 1,
//         }

//         localStorage.setItem("formData", JSON.stringify(localData));

//         handleNextStep();
//       }
//       handleError(errors);
//     };
    
//   return (
//     <div className='h-screen w-full flex justify-center items-center bg-[#F4F4F4]'>
//     <div className='w-[480px] h-[655px] p-[32px] bg-white flex flex-col justify-between rounded-[8px]'>
//       <div>
//       <div className='flex flex-col gap-[8px] '>
//         <img alt='pinecone logo' src="./img/pinecone-logo.png" className='w-[60px] h-[60px] '/>
//         <p className='text-[26px] font-semibold'>Join Us! 😎</p>
//         <p className='text-[18px] font-normal text-[#8E8E8E] '>Please provide all current information accurately.</p>
//       </div>
//       <div className='mt-[28px] flex flex-col gap-[12px] '>

//             <InputSection handleChange={handleChange} errors={errors} title={"Email"} name={"email"} placeholder={"Your email"} value={formValue.email} />
//             <InputSection handleChange={handleChange} errors={errors} title={"Phone number"} name={"phoneNumber"} placeholder={"Your phone number"} />
//             <InputSection handleChange={handleChange} errors={errors} title={"Password"} name={"password"} placeholder={"Your password"} />
//             <InputSection handleChange={handleChange} errors={errors} title={"Confirm password"} name={"confirmPassword"} placeholder={"Confirm password"} /> 
//       </div>
//       </div>
//       <div className='flex flex-row gap-[5px]'>
//           <BackButton handleBackStep={handleBackStep} />
//           <ContinueButton handleFormNextStep={handleFormNextStep} />
//       </div>
//     </div>
//   </div>
//   );
// };

// export default StepTwo;

import React from 'react';
import { ContinueButton } from './ContinueButton';
import { BackButton } from './BackButton';
import InputSection from './InputSection';
import isStepTwoValid from '@/utils/stepTwoValidation';

const StepTwo = (props) => {
    const { handleNextStep, handleBackStep, errors, formValue, handleError, setFormValue, clearError } = props;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        clearError(name);
    };

    const handleFormNextStep = () => {
        const { isValid, errors } = isStepTwoValid(formValue);

        if (isValid) {
            const localData = {
                ...formValue,
                currentStep: 2,  // Алхам 2
            };
            localStorage.setItem("formData", JSON.stringify(localData));
            handleNextStep();
        }
        handleError(errors);
    };

    return (
        <div className='h-screen w-full flex justify-center items-center bg-[#F4F4F4]'>
            <div className='w-[480px] h-[655px] p-[32px] bg-white flex flex-col justify-between rounded-[8px]'>
                <div>
                    <div className='flex flex-col gap-[8px]'>
                        <img alt='pinecone logo' src="./img/pinecone-logo.png" className='w-[60px] h-[60px]' />
                        <p className='text-[26px] font-semibold'>Join Us! 😎</p>
                        <p className='text-[18px] font-normal text-[#8E8E8E]'>Please provide all current information accurately.</p>
                    </div>
                    <div className='mt-[28px] flex flex-col gap-[12px]'>
                        <InputSection handleChange={handleChange} errors={errors.email} title={"Email"} name={"email"} placeholder={"Your email"} value={formValue.email} />
                        <InputSection handleChange={handleChange} errors={errors.phoneNumber} title={"Phone number"} name={"phoneNumber"} placeholder={"Your phone number"} value={formValue.phoneNumber} />
                        <InputSection handleChange={handleChange} errors={errors.password} title={"Password"} name={"password"} placeholder={"Your password"} value={formValue.password} />
                        <InputSection handleChange={handleChange} errors={errors.confirmPassword} title={"Confirm password"} name={"confirmPassword"} placeholder={"Confirm password"} value={formValue.confirmPassword} />
                    </div>
                </div>
                <div className='flex flex-row gap-[5px]'>
                    <BackButton handleBackStep={handleBackStep} />
                    <ContinueButton handleFormNextStep={handleFormNextStep} currentStep={2} totalSteps={3} />
                </div>
            </div>
        </div>
    );
};

export default StepTwo;

