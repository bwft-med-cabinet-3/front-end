import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import loginSchema from "./validation/loginSchema";
import { useHistory, Link } from 'react-router-dom';
import users from "../users.json"

// import styled from "styled-components";

//set initial form shape and values
// const initialLoginValues = {
//   username: "",
//   password: "",
// };

// const initialLoginErrors = {
//   username: "",
//   password: "",
// };

// const initialCredentials = [];

//set submit button to disabled
// const disableButton = true;

export  default function Login() {
  // const [loginValues, setLoginValues] = useState(initialLoginValues);
  // const [orders, setOrders] = useState(initialCredentials);
  // const [disabled, setDisabled] = useState(disableButton);
  // const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  
  const [ cred, setCred ] = useState({
    email: '',
    password: '',
    });
    
    const {push}= useHistory();

  //fetching current users credentials data
  // const getCredentials = () => {
  //   axiosWithAuth()
  //     .get("https://reqres.in/api/users")
  //     .then((response) => {
  //       setOrders(response.data.data);
  //     })
  //     .catch((error) => {
  //       debugger;
  //     });
  // };

  // //posting new login credentials to database
  // const postCredentials = (credentials) => {
  //   axios
  //     .post("https://reqres.in/api/users", credentials)
  //     .then((response) => {
  //       setOrders([...orders, response.data]);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       debugger;
  //     })
  //     .finally(() => {
  //       setLoginValues(initialLoginValues);
  //     });
  // };

  //functionaity to input info while validating login form has all required info
  // const loginInput = (name, value) => {
  //   yup
  //     .reach(loginSchema, name)
  //     .validate(value)
  //     .then((valid) => {
  //       setLoginErrors({
  //         ...loginErrors,
  //         [name]: "",
  //       });
  //     })
  //     .catch((err) => {
  //       setLoginErrors({
  //         ...loginErrors,
  //         [name]: err.errors[0],
  //       });
  //     });
  //   setLoginValues({
  //     ...loginValues,
  //     [name]: value,
  //   });
  // };

  //login button functionality
//   const handleSubmit= e =>{
//     e.preventDefault();
//     axiosWithAuth().post('/login', 
//               `grant_type=password&username=${cred.username}&password=${cred.password}`, {
//         headers: {
//           // btoa is converting our client id/client secret into base64
//           //if auth breaks, insert `bearer`
//           Authorization: `Basic ${btoa('OAUTHCLIENTID:OAUTHCLIENTSECRET')}`,
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       })
      
//       .then(res => {
//         console.log('data:', res.data)
//         localStorage.setItem('token', res.data.access_token);
//         push('/Home')
//       })
// }


const handleSubmit = e => {
  console.log(cred)
  
  e.preventDefault();
    axios.post('https://reqres.in/api/login/', cred, {
    headers: { 
          Authorization: "token"
      }
    })
    
  
  // axios.post('https://med-cabinet-ol.herokuapp.com/login', `grant_type=password&username=${cred.username}&password=${cred.password}`, {
  //   headers: {
  //     // btoa is converting our client id/client secret into base64
  //     Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // })
  
  
  
  .then(res => {
    console.log(res)
    localStorage.setItem('token', res.data.token);
    push('/Home');
  })
}


  // useEffect(() => {
  //   getCredentials();
  // }, []);

  //enable button when login passes validation
  // useEffect(() => {
  //   loginSchema.isValid(loginValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // });


  const handleChange = e =>{
    setCred({...cred, [e.target.name]: e.target.value})
}
  // const onLogin = (event) => {
  //   event.preventDefault();
  //   handleLogin();
  // };

  // const onLoginInput = (event) => {
  //   const { name, value } = event.target;
  //   loginInput(name, value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Username&nbsp;
        <input
          value={cred.email}
          onChange={handleChange}
          name="email"
          type="text"
        />
      </label>
      <label>
        Password&nbsp;
        <input
          value={cred.password}
          onChange={handleChange}
          name="password"
          type="password"
        />
      </label>
      <button type="submit">login</button>

      {/* <div className="errors">
        <div>{loginErrors.username}</div>
        <div>{loginErrors.password}</div>
      </div> */}
    </form>
  );
};


