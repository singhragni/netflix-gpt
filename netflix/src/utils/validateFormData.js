const validateFormData = (Email, password) =>{
    console.log(Email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(Email)
    const passwordRegex = /^.{4,60}$/;
    const isValidPassword = passwordRegex.test(password)
    
    const errors = {};
    if (!isValidPassword) {
        errors.password = "Password must be between 4 and 60 characters.";
    }
    if(!isValid){
        errors.eemail = "Please enter a valid email address.";
    }

    if(Object.keys(errors).length>0)
        return {errors}

}


export default validateFormData;