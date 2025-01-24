const isStepOneValid = (formValue) => {
  const errors = {};
  let isValid = true;

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
  
  // if (!formValue.email.match(`@{re[0]}`)) {
  //   errors.firstName = "First name is required.";
  //   isValid = false;
  // }
  // if (!formValue.phoneNumber === !"") {
  //   errors.lastName = "Last name is required.";
  //   isValid = false;
  // }
  // if (!formValue.password.trim()) {
  //   errors.userName = "User name is required.";
  //   isValid = false;
  // }

  return { isValid, errors };
};

export default isStepOneValid;
