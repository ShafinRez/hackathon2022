import React from 'react';
import './App.css';
import Login from './components/Signup';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/* <Login/> */}
        <h1>HOME SCREEN</h1>
      <nav>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup </Link>
      </nav>
    </div>
  );
}

export default App;
