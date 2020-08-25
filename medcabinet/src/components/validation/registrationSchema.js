import * as yup from "yup";

const registrationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "Username must be at least 5 characters long")
      .required("Username is Required"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include email address"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is Required"),
    // birthdate: yup
    //    .
    terms: yup
    .boolean()
    .oneOf([true], "Please read and agree to the Terms of Service"),  
  })
  
  export default registrationSchema