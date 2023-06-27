import React from "react";
import { useInput } from "../utils/network-data";
import PropTypes from 'prop-types';

export default function LoginInput({ login }) {
  const [email, onChangeEmailHandler] = useInput("");
  const [password, onChangePasswordHandler] = useInput("");

  function onSubmitHandler(event) {
    event.preventDefault();
    login({ email: email, password: password });
  }

  return (
    <form onSubmit={onSubmitHandler} className="input-login">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={onChangeEmailHandler}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={onChangePasswordHandler}
      />
      <button type="submit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired
}
