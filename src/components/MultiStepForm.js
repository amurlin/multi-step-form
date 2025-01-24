"use client";

import React, { useEffect, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FormFinished from "./FormFinished";
import { AnimatePresence, motion } from "framer-motion";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImg: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImg: "",
  });

  const handleError = (errors) => {
    setFormError((prev) => ({ ...prev, ...errors }));
  };

  const clearError = (name) => {
    setFormError((prev) => ({ ...prev, [name]: "" }));
  }

  const Step = [StepOne, StepTwo, StepThree, FormFinished][currentStep];

  const handleNextStep = () => {
    if (currentStep !== 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  useEffect (() => {
    const data = localStorage.getItem("formData");
    console.log(JSON.parse(data));
  }, []);

  const animationVariants = {
    enter : { opacity: 0, x: 100 },
    center : { opacity: 1, x: 0 },
    exit : { opacity: 0, x: -100 },
  }

  return (
   <AnimatePresence >
     <motion.div
      key={currentStep}
      initial="enter"
      animate="center"
      exit="exit"
      variants={animationVariants}
      transition={{duration:0.5}}>
      <Step
        errors={formError}
        formValue={formValue}
        clearError={clearError}
        handleError={handleError}
        setFormValue={setFormValue}
        handleNextStep={handleNextStep}
        handleBackStep={handleBackStep}
      />
     </motion.div>
   </AnimatePresence>
  );
};

export default MultiStepForm;
