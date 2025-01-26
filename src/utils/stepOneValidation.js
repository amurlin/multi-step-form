const isStepOneValid = (formValue) => {
  const errors = {};
  let isValid = true;

  // name
  if (!formValue.firstName.trim()) {
    errors.firstName = "First name is required.";
    isValid = false;
  }
  if (!formValue.lastName.trim()) {
    errors.lastName = "Last name is required.";
    isValid = false;
  }
  if (!formValue.userName.trim()) {
    errors.userName = "User name is required.";
    isValid = false;
  }
  
  return { isValid, errors };
};

export default isStepOneValid;
