import React from 'react'

const StepThree = (props) => {
    const {handleNextStep, handleBackStep} = props;
  return (
    <div>
        <p>StepThree</p>
        <button onClick={handleNextStep}>Next</button>
        <button onClick={handleBackStep}>Back</button>
    </div>
  );
};

export default StepThree;
