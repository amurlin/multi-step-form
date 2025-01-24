import React, { useState } from 'react';
import InputSection from './InputSection';
import isStepOneValid from '@/utils/stepOneValidation';
import Image from 'next/image';

const StepThree = (props) => {
    const {handleNextStep, handleBackStep, errors, formValue, handleError, setFormValue, clearError} = props;
    const [selectedImg, setSelectedImg] = useState("");

    const handleChange = (event) => {
      const {name, value} = event.target;
      setFormValue((prev) => ({
        ...prev,
        [name]: value,
      }));
      clearError(name)
    };

    const handleFormNextStep = () => {
      const { isValid, errors } = isStepOneValid(formValue);

      if (isValid){
        handleNextStep();
      }
      handleError(errors);
    };

    const handleImageUpload = (event) => {
      const file = event.target.files[0];

      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setSelectedImg(fileReader.result);
        clearError("profileImg");
      };
      fileReader.readAsDataURL(file);

      setFormValue((prev) => ({
        ...prev,
        profileImg: file,
      }));
    }

    const handleImageRemove = () => {
      setSelectedImg(null);

      setFormValue((prev) => ({
        ...prev,
        profileImg: "",
      }))
    }

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

        {/* <InputSection handleChange={handleChange} errors={errors} title={"Date of Birth"} name={"dateBirth"} placeholder={""} />
        <InputSection handleChange={handleChange} errors={errors} title={"Profile image"} name={"profileImg"} placeholder={""} /> */}

        <div className="w-[416px] flex flex-col ">
              <div className="flex flex-row gap-[5px]">
                <p className="text-[14px] font-[700] text-[#334155] ">{"Date of birth"}</p>
                <p className="text-[14px] font-[700] text-[#E14942]">*</p>
              </div>
              <input
                name={"dateBirth"}
                className={`${
                  errors.length > 0 ? "" : ""
                }, w-full border-[1.5px] border-solid border-[#CBD5E1] rounded-[8px] flex items-center text-[16px] font-[500] p-[12px]`}
                onChange={handleChange}
                placeholder={"yyyy-mm-dd"}
                value={formValue.dateBirth}
                type='date'
              />
              {errors.length > 0 && (
                <p className="text-red-500">{errors}</p>
              )}
        </div>

        {!formValue.profileImg.length > 0 ? (
          <div className="w-[416px] flex flex-col ">
              <div className="flex flex-row gap-[5px]">
                <p className="text-[14px] font-[700] text-[#334155] ">{"Date of birth"}</p>
                <p className="text-[14px] font-[700] text-[#E14942]">*</p>
              </div>
              <input
                name="profileImg"
                className={`${
                  errors.profileImg.length > 0 ? "" : ""
                }, object-cover w-full border-[1.5px] border-solid border-[#CBD5E1] rounded-[8px] flex items-center text-[16px] font-[500] p-[12px]`}
                onChange={handleImageUpload}
                value={formValue.profileImg}
                accept='image/*'
                type='file'
                // layout='fill'
              />
              {errors.profileImg.length > 0 && (
                <p className="text-red-500">{errors.profileImg}</p>
              )}
            </div>
            ) : (
              <div>
                <Image src={selectedImg} alt='upload file' onChange={handleImageRemove} />
              </div>
            )
          }
          
      </div>
      </div>
      <div>
          <button onClick={handleFormNextStep} className='w-full h-[44px] bg-[#121316] rounded-[6px] flex flex-row justify-center items-center gap-[4px] text-[#FFFFFF] -bottom-0'>
            <p>Continue</p>
            <div>3/3</div>
            <div></div>
          </button>
          <button onClick={handleBackStep}>Back</button>
      </div>
    </div>
  </div>
  );
};

export default StepThree;


