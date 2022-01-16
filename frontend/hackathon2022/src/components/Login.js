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
    <div class="container">
      <form onSubmit={handleSubmit} class="login">
        <div class = 'input-elements'>
          <label>Email:</label>
          <TextField
            onChange={handleChange}
            id="email"
            variant="filled"
            label="Email"
            className='inputBox'
            fullWidth
            required
          />
          </div>
          <div class = 'input-elements'>
              <label>Password:</label>
              <TextField
                onChange={handleChange}
                id="password"
                variant="filled"
                type="password"
                label="Password"
                className = "inputBox"
                fullWidth
                required
              />
            </div>
        
        <Button type="submit" variant="contained">Login</Button>
      </form>

      
    </div>
  );
}

export default Login;
