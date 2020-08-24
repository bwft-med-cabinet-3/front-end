import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./validation/registrationSchema";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";

//styling

const DOBContainer = styled.div``;

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
  email: "",
  birthdate: "", //insert datepicker here
  password: "",
  terms: false, //checkbox
};

const intialRegistered = [];

//set submit button to disabled
const disableButton = true;

const Register = () => {
  const [registerValues, setRegisterValues] = useState(initialRegisterValues);
  const [newUsers, setNewUsers] = useState(intialRegistered);
  const [disabled, setDisabled] = useState(disableButton);
  const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);

  //fetching current user list data
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setNewUsers(response.data.data);
      })
      .catch((error) => {
        debugger;
      });
  };

  //posting new user to database and console logging current users data
  const postNewUser = (user) => {
    axios
      .post("https://reqres.in/api/users", user)
      .then((response) => {
        setNewUsers([...newUsers, response.data]);
      })
      .catch((error) => {
        console.log("error", error);
        debugger;
      })
      .finally(() => {
        console.log(newUsers);
        setRegisterValues(initialRegisterValues);
      });
  };

  //functionaity to input info while validating registration form has all required info
  const registerInput = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setRegisterErrors({
          ...registerErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setRegisterErrors({
          ...registerErrors,
          [name]: err.errors[0],
        });
      });
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
  };

  //terms checkbox
  const updateCheckbox = (name, isChecked) => {
    setRegisterValues({
      ...registerValues,
      terms: {
        ...registerValues.terms,
        [name]: isChecked,
      },
    });
  };

  //birthdate input
  const updateBirthdate = (birthdate) => {
    setRegisterValues({
      ...registerValues,
      terms: {
        ...registerValues.terms,
        birthdate,
      },
    });
  };

  //submit button functionality
  const handleSignUp = () => {
    const newUser = {
      username: registerValues.username.trim(),
      email: registerValues.email.trim(),
      birthdate: registerValues.birthdate,
      password: registerValues.password.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    formSchema.isValid(registerValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [registerValues]);

  const onSignUp = (event) => {
    event.preventDefault();
    handleSignUp();
  };

  const onCheckboxChange = (event) => {
    const { name, checked } = event.target;
    updateCheckbox(name, checked);
  };

  const onBirthdateChange = (event) => {
    const { name, checked } = event.target;
    updateBirthdate(name, checked);
  };

  const onRegisterInput = (event) => {
    const { name, value } = event.target;
    registerInput(name, value);
  };

  return (
    <form>
      <h2>Sign Up Here</h2>
      <p>
        Get personalized results on the best strains and dosing to fit your
        needs.
      </p>
      <label>
        Username&nbsp;
        <input
          value={registerValues.username}
          onChange={onRegisterInput}
          name="username"
          type="text"
        />
      </label>
      <label>
        Email&nbsp;
        <input
          value={registerValues.email}
          onChange={onRegisterInput}
          name="email"
          type="email"
        />
      </label>
      <label>
        Password&nbsp;
        <input
          value={registerValues.password}
          onChange={onRegisterInput}
          name="password"
          type="password"
        />
      </label>
      <label>
        <div>
          Date of Birth&nbsp;
          <ReactDatePicker
            selected={registerValues.birthdate}
            onChange={updateBirthdate}
          />
        </div>
      </label>
      <h4>
        By checking here you agree to MedCabinet's{" "}
        <button>Privacy Policy</button> and <button>Terms of Use</button>.
      </h4>
      <label>
        I agree
        <input
          type="checkbox"
          name="terms"
          checked={registerValues.terms}
          onChange={onCheckboxChange}
        />
      </label>
      <button disabled={disabled}>Register</button>

      <div className="errors">
        <div>{registerErrors.username}</div>
        <div>{registerErrors.password}</div>
        <div>{registerErrors.email}</div>
        <div>{registerErrors.birthdate}</div>
        <div>{registerErrors.terms}</div>
      </div>
    </form>
  );
};

export default Register;
