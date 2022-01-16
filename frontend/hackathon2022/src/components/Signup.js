import { TextField, Button, Grid, Paper, Avatar } from "@mui/material";
import { borderRadius } from "@mui/system";
import { React, useState } from "react";

function Signup() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
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
  const paperStyle = {padding:'30px 20px', width:400, margin:'20px auto', borderRadius:'10px'}
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <h2>Fill in the information below</h2>
        
          <form onSubmit={handleSubmit}>
          <TextField
              onChange={handleChange}
              id="firstName"
              variant="filled"
              label="First Name"
              fullWidth
              required
            />
                    <TextField
              onChange={handleChange}
              id="lastName"
              variant="filled"
              label="Last Name"
              fullWidth
              required
            />
            <TextField
              onChange={handleChange}
              id="email"
              variant="filled"
              label="Email"
              fullWidth
              required
            />
            <TextField
              onChange={handleChange}
              id="password"
              variant="filled"
              type="password"
              label="Password"
              fullWidth
              required
            />
            <TextField
              onChange={handleChange}
              id="password"
              variant="filled"
              type="password"
              label="Confirm Password"
              fullWidth
              required
            />
            <Button type="submit" variant="contained" fullWidth >Sign Up!</Button>
          </form>
          </Grid>
          <Grid align='center'> <h1>Already a user?</h1></Grid>
         
        
      </Paper>
    </Grid>
  );
}

export default Signup;
