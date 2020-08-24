import React, { useState, useEffect }from "react";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./validation/registrationSchema";
import styled from "styled-components";
import moment from "moment";

//set initial form shape and values
const initialRegisterValues = {
    username: "",
    email: "",
    birthdate: "", //insert datepicker here
    password: "",
    terms: false, //checkbox
  };
  
  const initialRegisterErrors = {
    username: "",
    password: "",
  };
  
  const intialRegistered = [];
  
  //set submit button to disabled
  const disableButton = true;

const Register = () => {
    const [formValues, setFormValues] = useState(initialRegisterValues);
    const [orders, setOrders] = useState(intialRegistered);
    const [disabled, setDisabled] = useState(disableButton);
    const [formErrors, setFormErrors] = useState(initialRegisterErrors);

    return (
        <form>

        </form>
    )
}

export default Register;