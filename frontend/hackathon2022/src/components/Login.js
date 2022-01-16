import { TextField, Button } from "@mui/material";
import { React, useState } from "react";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    // console.log(state);
  };
  const handleSubmit = (e) => {
    alert(state.email)
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login">
        <TextField
          onChange={handleChange}
          id="email"
          variant="filled"
          label="Email"
          required
        />
        <TextField
          onChange={handleChange}
          id="password"
          variant="filled"
          type="password"
          label="Password"
          className = "inputBox"
          required
        />
        <Button type="submit" variant="contained">Login</Button>
      </form>
      
    </div>
  );
}

export default Login;
