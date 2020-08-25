import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import loginSchema from "./validation/loginSchema";
// import styled from "styled-components";

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
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [orders, setOrders] = useState(initialCredentials);
  const [disabled, setDisabled] = useState(disableButton);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);

  //fetching current users credentials data
  const getCredentials = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        debugger;
      });
  };

  //posting new login credentials to database
  const postCredentials = (credentials) => {
    axios
      .post("https://reqres.in/api/users", credentials)
      .then((response) => {
        setOrders([...orders, response.data]);
      })
      .catch((error) => {
        console.log("error", error);
        debugger;
      })
      .finally(() => {
        setLoginValues(initialLoginValues);
      });
  };

  //functionaity to input info while validating login form has all required info
  const loginInput = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then((valid) => {
        setLoginErrors({
          ...loginErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setLoginErrors({
          ...loginErrors,
          [name]: err.errors[0],
        });
      });
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  //login button functionality
  const handleLogin = () => {
    const loginDetails = {
      username: loginValues.login.trim(),
      password: loginValues.password.trim(),
    };
    postCredentials(loginDetails);
  };

  useEffect(() => {
    getCredentials();
  }, []);

  //enable button when login passes validation
  useEffect(() => {
    loginSchema.isValid(loginValues).then((valid) => {
      setDisabled(!valid);
    });
  });

  const onLogin = (event) => {
    event.preventDefault();
    handleLogin();
  };

  const onLoginInput = (event) => {
    const { name, value } = event.target;
    loginInput(name, value);
  };

  return (
    <form onSubmit={onLogin}>
      <h2>Login</h2>
      <label>
        Username&nbsp;
        <input
          value={loginValues.username}
          onChange={onLoginInput}
          name="username"
          type="text"
        />
      </label>
      <label>
        Password&nbsp;
        <input
          value={loginValues.password}
          onChange={onLoginInput}
          name="password"
          type="password"
        />
      </label>
      <button disabled={disabled}>login</button>

      <div className="errors">
        <div>{loginErrors.username}</div>
        <div>{loginErrors.password}</div>
      </div>
    </form>
  );
};

export default Login;
