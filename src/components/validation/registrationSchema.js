import * as yup from "yup";
import moment from "moment";

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
    birthdate: yup.date().test(
      "birthdate",
      "You must be 18 or older to register",
      value => {
        const today = moment();
        const birthdate = moment(value.toISOString());
        const diffInYears = today.diff(birthdate, "years");
        return diffInYears >= 18;
      }
    ).required("Birthdate is required"),
    terms: yup
    .bool()
    .oneOf([true], 'Must Accept Terms and Conditions')
    .required("You must read and agree to the Terms of Service"),  
  })
  
  export default registrationSchema