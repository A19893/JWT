import React from "react";

const LoginDisplay = (props) => {
  return (
    <>
      <input
        style={{
          width: "350px",
          boxShadow: " 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
          padding: "15px",
        }}
        maxLength={30}
        placeholder="Email/Phone Number"
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
      />
      <br />
      <button
        style={{
          paddingRight: "10px",
          marginRight: "100px",
          height: "40px",
        }}
        onClick={props.onManualLogin}
      >
        Login
      </button>
    </>
  );
};

export default LoginDisplay;
