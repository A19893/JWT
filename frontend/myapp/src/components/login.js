import React, { useState } from "react";
import LoginDisplay from "./loginDisplay";
import { manualLogin } from "../services/manualLogin.service";
import {useNavigate} from 'react-router-dom'
 const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate();
  const onManualLogin = async (e) => {
    e.preventDefault();
    if (password.length <= 6) {
      alert("Please Fill Password Properly");
    } else {
      const res = await manualLogin(password, email);
      console.log(res);
      if (res.status === 201) {
          setPassword("");
          setEmail("");
          localStorage.setItem("authKey",JSON.stringify(res.data.auth))
          navigate('/home');
      } else if (res.status === 200) {
        alert("You are Not a Registered User");
      } else if (res.status === 203) {
        alert("Credentials are InValid");
      }
    }
  };
  return (
    <LoginDisplay
      onManualLogin={onManualLogin}
      password={password}
      email={email}
      setPassword={setPassword}
      setEmail={setEmail}
    />
  );
};
export default Login;
