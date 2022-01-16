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
    
    <div class='container'>
      <Paper elevation={0}>
      <form onSubmit={handleSubmit} class='form'>
        <TextField
          onChange={handleChange}
          id="email"
          variant="filled"
          label="Email"
          className='input'
          required
        />
        <TextField
          onChange={handleChange}
          id="password"
          variant="filled"
          type="password"
          label="Password"
          className='input'
          required
        />
        <Button type="submit" variant="contained" class='login'>Login</Button>
      </form>
      </Paper>
      
    </div>
  );
}

export default Signup;
