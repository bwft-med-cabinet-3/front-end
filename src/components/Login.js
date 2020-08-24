import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./validation/formSchema";
import styled from "styled-components";

//set initial form shape and values
const initialLoginValues = {
  username: "",
  password: "",
};

const initialLoginErrors = {
  username: "",
  password: "",
};

const initialCredentials = [];

//set submit button to disabled
const disableButton = true;

const Login = () => {
    const [formValues, setFormValues] = useState(initialLoginValues);
    const [orders, setOrders] = useState(initialCredentials);
    const [disabled, setDisabled] = useState(disableButton);
    const [formErrors, setFormErrors] = useState(initialLoginErrors);


    return ( 
    
    <form>

    </form>

    )
};

export default Login;
