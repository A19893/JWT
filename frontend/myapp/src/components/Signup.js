import React,{useEffect, useState} from 'react'
import { manualSignup } from "../services/manualSignup.service";
import SignupDisplay from './SignupDisplay';
import {useNavigate} from 'react-router-dom';
import { checkSession } from '../services/checkSession.service';
const Signup = () => {
  useEffect(()=>{
    const getData=async()=>{
      const res=await checkSession();
      if(res.status===203){
        navigate("/home");
      }
    }
  getData();
  })
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
    const onManualSignup = async (e) => {
        e.preventDefault();
          const res = await manualSignup(name, password, email);
          console.log(res);
          if (res.status === 201) {
          setName("");
          setPassword("");
          setEmail("");
          localStorage.setItem("authKey",JSON.stringify(res.data.auth));
          navigate('/home');
          } else if (res.status === 203) {
            alert("Email already exists");
             navigate("/login");
          }
      };
  return (
    <SignupDisplay
    name={name}
    password={password}
    email={email}
    setName={setName}
    setPassword={setPassword}
    setEmail={setEmail}
    onManualSignup={onManualSignup}
    />
  )
}

export default Signup