import React from "react";
import { useInput } from "../utils/network-data";

export default function RegisterInput({register}) {
  const [name, onChangeNamehandler] = useInput("");
  const [email, onChangeEmailHandler] = useInput("");
  const [password, onChangePasswordHandler] = useInput("");
  const [confirmPassword, onChangeConfirmPassword] = useInput("");

function onSubmitHandler(event){
    event.preventDefault()
    if(password === confirmPassword){
        register({name:name, email:email,password:password})
    }else{
        alert('Password and password confirm must be same');
    }
}

  return (
    <form onSubmit={onSubmitHandler} className="input-register">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={onChangeNamehandler}
      />
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
        id="password"
        value={password}
        onChange={onChangePasswordHandler}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
      />
      <button type="submit">Register</button>
    </form>
  );
}
