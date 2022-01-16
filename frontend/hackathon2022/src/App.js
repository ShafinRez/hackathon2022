import React from "react";
import { Button } from "@mui/material";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import bubble from "./assets/bubble.png";

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="navbar">
          <img src={logo} alt="Panda Logo" className="logo" />
          <div>
            <Button
              type="button"
              href="/login"
              variant="outlined"
              className="button"
            >
              Login
            </Button>
            <div className="divider" />
            <Button
              type="button"
              href="/signup"
              variant="outlined"
              className="button"
            >
              Signup
            </Button>
          </div>
        </div>
        <div className="content">
          <h2>Welcome to our</h2>
          <h1>Hackathon Project!</h1>
        </div>
      <div className="bubbles">
        <img src={bubble} alt="bubble"/>
        <img src={bubble} alt="bubble"/>
        <img src={bubble} alt="bubble"/>
        <img src={bubble} alt="bubble"/>
        <img src={bubble} alt="bubble"/>
        <img src={bubble} alt="bubble"/>
        <img src={bubble} alt="bubble"/>
      </div>
      </div>

      <nav>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup </Link>
      </nav>
    </div>
  );
}

export default App;
