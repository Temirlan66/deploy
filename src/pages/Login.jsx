import React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/auth/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const changeHadnler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      inputValue,
      token: "suiiii",
    };

    dispatch(AuthActions.emailToken(data));
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <TextField label="Email" value={inputValue} onChange={changeHadnler} />
      <Button type="submit">Sing Up</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export default Login;
