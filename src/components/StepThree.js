import React, { useState } from 'react';
import InputSection from './InputSection';
import isStepThreeValid from '@/utils/stepThreeValidation';
import Image from 'next/image';
import { ContinueButton } from './ContinueButton';
import { BackButton } from './BackButton';

const StepThree = (props) => {
    const {handleNextStep, handleBackStep, errors, formValue, handleError, setFormValue, clearError} = props;
    const [selectedImg, setSelectedImg] = useState("");

    const handleChange = (event) => {
      const {name, value} = event.target;
      setFormValue((prev) => ({
        ...prev,
        [name]: value,
      }));
      clearError(name);
    };

    const handleFormNextStep = () => {
      const { isValid, errors } = isStepThreeValid(formValue);

      if (isValid){
        const localData = {
            ...formValue,
            currentStep: 3,
        }

        localStorage.setItem("formData", JSON.stringify(localData));

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
        profileImage: file,
      }));
    };

    const handleImageRemove = () => {
      setSelectedImg(null);

      setFormValue((prev) => ({
        ...prev,
        profileImg: "",
      }))
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

        {!selectedImg.length > 0 ? (
          <div className="w-[416px] flex flex-col ">
              <div className="flex flex-row gap-[5px]">
                <p className="text-[14px] font-[700] text-[#334155] ">{"Date of birth"}</p>
                <p className="text-[14px] font-[700] text-[#E14942]">*</p>
              </div>
              <input
                name="profileImg"
                className={`${
                  errors.length > 0 ? "" : ""
                }, object-cover w-full bg-[#F4F4F4] rounded-[8px] flex justify-center items-center text-[16px] font-[500] p-[12px] h-[200px]`}
                onChange={handleImageUpload}
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
                <Image src={selectedImg} alt='upload file' onChange={handleImageRemove} width={200} height={200} />
              </div>
            )
          }
          
      </div>
      </div>
     <div className='flex flex-row gap-[5px]'>
               <BackButton handleBackStep={handleBackStep} />
               <ContinueButton handleFormNextStep={handleFormNextStep} currentStep={3} totalSteps={3} />
           </div>
    </div>
  </div>
  );
};

export default StepThree;

// import React, { useState } from 'react';
// import InputSection from './InputSection';
// import isStepThreeValid from '@/utils/stepThreeValidation';
// import { ContinueButton } from './ContinueButton';
// import { BackButton } from './BackButton';
// import Image from 'next/image';

// const StepThree = (props) => {
//     const { handleNextStep, handleBackStep, errors, formValue, handleError, setFormValue, clearError } = props;
//     const [selectedImg, setSelectedImg] = useState("");

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormValue((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//         clearError(name);
//     };

//     const handleFormNextStep = () => {
//         const { isValid, errors } = isStepThreeValid(formValue);

//         if (isValid) {
//             const localData = {
//                 ...formValue,
//                 currentStep: 3,
//             };
//             localStorage.setItem("formData", JSON.stringify(localData));
//             handleNextStep();
//         }
//         handleError(errors);
//     };

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
        
//         // Зургийн формат шалгах
//         if (file && !file.type.startsWith("image/")) {
//             handleError({ profileImg: "Please upload a valid image." });
//             return;
//         }

//         const fileReader = new FileReader();
//         fileReader.onloadend = () => {
//             setSelectedImg(fileReader.result);
//             clearError("profileImg");
//         };
//         fileReader.readAsDataURL(file);

//         setFormValue((prev) => ({
//             ...prev,
//             profileImage: file,
//         }));
//     };

//     const handleImageRemove = () => {
//         setSelectedImg(null);
//         setFormValue((prev) => ({
//             ...prev,
//             profileImage: "",
//         }));
//     };

//     return (
//         <div className="h-screen w-full flex justify-center items-center bg-[#F4F4F4]">
//             <div className="w-[480px] h-[655px] p-[32px] bg-white flex flex-col justify-between rounded-[8px]">
//                 <div>
//                     <div className="flex flex-col gap-[8px]">
//                         <img alt="pinecone logo" src="./img/pinecone-logo.png" className="w-[60px] h-[60px]" />
//                         <p className="text-[26px] font-semibold">Join Us! 😎</p>
//                         <p className="text-[18px] font-normal text-[#8E8E8E]">
//                             Please provide all current information accurately.
//                         </p>
//                     </div>
//                     <div className="mt-[28px] flex flex-col gap-[12px]">
//                         {/* Date of Birth */}
//                         <div className="w-[416px] flex flex-col">
//                             <div className="flex flex-row gap-[5px]">
//                                 <p className="text-[14px] font-[700] text-[#334155]">Date of Birth</p>
//                                 <p className="text-[14px] font-[700] text-[#E14942]">*</p>
//                             </div>
//                             <input
//                                 name="dateBirth"
//                                 className={`${
//                                     errors.dateBirth ? "border-red-500" : "border-[#CBD5E1]"
//                                 }, w-full border-[1.5px] border-solid rounded-[8px] text-[16px] font-[500] p-[12px]`}
//                                 onChange={handleChange}
//                                 placeholder={"yyyy-mm-dd"}
//                                 value={formValue.dateBirth}
//                                 type="date"
//                             />
//                             {errors.dateBirth && <p className="text-red-500">{errors.dateBirth}</p>}
//                         </div>

//                         {/* Profile Image */}
//                         {!selectedImg ? (
//                             <div className="w-[416px] flex flex-col">
//                                 <div className="flex flex-row gap-[5px]">
//                                     <p className="text-[14px] font-[700] text-[#334155]">Profile Image</p>
//                                     <p className="text-[14px] font-[700] text-[#E14942]">*</p>
//                                 </div>
//                                 <input
//                                     name="profileImg"
//                                     className={`${
//                                         errors.profileImg ? "border-red-500" : "border-[#CBD5E1]"
//                                     }, object-cover w-full bg-[#F4F4F4] rounded-[8px] flex justify-center items-center text-[16px] font-[500] p-[12px] h-[200px]`}
//                                     onChange={handleImageUpload}
//                                     accept="image/*"
//                                     type="file"
//                                 />
//                                 {errors.profileImg && <p className="text-red-500">{errors.profileImg}</p>}
//                             </div>
//                         ) : (
//                             <div>
//                                 <Image
//                                     src={selectedImg}
//                                     alt="Uploaded file"
//                                     onClick={handleImageRemove}
//                                     width={200}
//                                     height={200}
//                                     className="cursor-pointer"
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <div className="flex flex-row gap-[5px]">
//                     <BackButton handleBackStep={handleBackStep} />
//                     <ContinueButton handleFormNextStep={handleFormNextStep} currentStep={3} totalSteps={3}/>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StepThree;

