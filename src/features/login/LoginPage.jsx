import React from "react";
import { useDispatch } from "react-redux";

import Container from "@material-ui/core/Container";
import LoginForm from "./LoginForm";
import { login } from "./LoginSlice";

export default () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ username, apikey, userkey }) => {
    dispatch(login({ username, apikey, userkey }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <LoginForm onSubmit={handleSubmit} />
    </Container>
  );
};
