import { TextField, Button, Paper, Grid, Link } from "@mui/material";
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
    alert(state.email);
  };
  const paperStyles = {
    padding: "30px 20px",
    width: 400,
    margin: "20px auto",
    borderRadius: "10px",
  };
  return (
    <Paper elevation={20} style={paperStyles}>
      <Grid align="center">
        <h1>Welcome Back!</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            id="email"
            variant="filled"
            label="Email"
            className="inputBox"
            fullWidth
            required
          />
          <TextField
            onChange={handleChange}
            id="password"
            variant="filled"
            type="password"
            label="Password"
            className="inputBox"
            fullWidth
            required
          />
          <div className="button-spacing">
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </div>
          <Grid>
            <Link href="/signup">Need to sign up?</Link>
          </Grid>
        </form>
      </Grid>
    </Paper>
  );
}

export default Login;
