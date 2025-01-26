const isStepThreeValid = (formValue, selectedImg) => {
    const errors = {};
    let isValid = true;

    // Төрсөн огноо шалгах
    if (!formValue.dateBirth.trim()) {
        errors.dateBirth = "Date of Birth is required.";
        isValid = false;
    }

    // Програмын зураг шалгах
    if (!selectedImg && !formValue.profileImage) {
        errors.profileImg = "Profile image is required.";
        isValid = false;
    }

    return { isValid, errors };
};

export default isStepThreeValid; 