import { TextField, Button } from "@mui/material";
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
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <TextField
          onChange={handleChange}
          id="firstName"
          variant="filled"
          label="First Name"
          required
        />
                <TextField
          onChange={handleChange}
          id="lastName"
          variant="filled"
          label="Last Name"
          required
        />
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
        <Button type="submit" variant="contained">Login</Button>
      </form>
      <h1>Already a user?</h1>
    </div>
  );
}

export default Signup;
