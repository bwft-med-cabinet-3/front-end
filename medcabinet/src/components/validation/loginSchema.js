import * as yup from "yup";

const loginSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "Username must be at least 5 characters long")
      .required("Username is Required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is Required")    
  })
  
  export default loginSchema
