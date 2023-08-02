import React from "react";

const SignupDisplay = (props) => {
  return (
    <>
      <input
        style={{
          width: "350px",
          boxShadow: " 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
          padding: "15px",
        }}
        maxLength={15}
        placeholder="   Username"
        onChange={(e) => props.setName(e.target.value.trim())}
        value={props.name}
      />
      <br />
      <br />
      <input
        style={{
          width: "350px",
          boxShadow: " 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
          padding: "15px",
        }}
        maxLength={30}
        placeholder="    Email"
        onChange={(e) => props.setEmail(e.target.value.trim())}
        value={props.email}
      />
      <br />
      <br />
      <input
        style={{
          width: "350px",
          boxShadow: " 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
          padding: "15px",
        }}
        placeholder="   Password"
        onChange={(e) => props.setPassword(e.target.value.trim())}
        value={props.password}
        required
      />
      <br/>
      <br/>
      <button
        style={{ width: "100px", height: "40px" }}
        onClick={props.onManualSignup}
      >
        Sign Up
      </button>
    </>
  );
};

export default SignupDisplay;
