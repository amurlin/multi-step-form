import React from 'react'

const StepTwo = (props) => {
    const {handleNextStep, handleBackStep} = props;
  return (
    <div>
        <p>StepTwo</p>
        <button onClick={handleNextStep}>Next</button>
        <button onClick={handleBackStep}>Back</button>
    </div>
  );
};

export default StepTwo;
