   const isStepTwoValid = (formValue) => {
    const errors = {};
    let isValid = true;

    // email
    if (!formValue.email.trim()) {
        errors.email = "Email is required.";
        isValid = false;
    } else {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(formValue.email)) {
            errors.email = "Invalid email address.";
            isValid = false;
        }
    }

    // phone number
    if (!formValue.phoneNumber.trim()) {
        errors.phoneNumber = "Phone number is required.";
        isValid = false;
    } else if (formValue.phoneNumber.length !== 8) {
        errors.phoneNumber = "Phone number must be 8 digits.";
        isValid = false;
    }

    // password
    if (!formValue.password.trim()) {
        errors.password = "Password is required.";
        isValid = false;
    } else if (formValue.password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
        isValid = false;
    }

    // confirm password
    if (formValue.password !== formValue.confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
        isValid = false;
    }

    return { isValid, errors };
};

export default isStepTwoValid;