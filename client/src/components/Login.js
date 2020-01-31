import React, { useState } from "react";
import styles from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const StyledLogin = styles.div`
.login-form {
  margin-top:80px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
};

.username {
  // margin-right:20px;
  padding:10px;
  border:1px solid
  0 0 1px rgba(0, 0, 0, 0.3), 
  0 3px 7px rgba(0, 0, 0, 0.3), 
  inset 0 1px rgba(255,255,255,1),
  inset 0 -3px 2px rgba(0,0,0,0.25);
  border-radius: 2px;
  background: linear-gradient(#eeefef, #ffffff 10%);
}

.password {
  // margin-right:20px;
  padding:10px;
  
  border:1px solid
  0 0 1px rgba(0, 0, 0, 0.3), 
  0 3px 7px rgba(0, 0, 0, 0.3), 
  inset 0 1px rgba(255,255,255,1),
  inset 0 -3px 2px rgba(0,0,0,0.25);
  border-radius: 2px;
  background: linear-gradient(#eeefef, #ffffff 10%);
}

button {
  background-color:darkgreen;
  color:white;
  padding:5px;
  border-radius:5px;
  font-weight:bold;
}

`;

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, 
      [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("./protected");
      })
      .catch(err => console.log("login error", err.response));
  };

  return (
    <StyledLogin>
      <div className="login-form">
        <form data-testid="login-form" onSubmit={submitForm}>
          <input
            type="text"
            className="username"
            placeholder="Enter login name..."
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="text"
            className="password"
            placeholder="Enter password..."
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
