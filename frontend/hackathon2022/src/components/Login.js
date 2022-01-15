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
    console.log(state);
  };
  return (
    <div>
      <form action="">
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
          required
        />
        <Button variant="contained">Login</Button>
        <Button variant="contained">Sign up</Button>
      </form>
    </div>
  );
}

export default Login;
