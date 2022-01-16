import React from 'react';
import { Button } from '@mui/material';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className='background'>
          <div className='navbar'>
            <img src="assets\logo.png" alt="Panda Logo" className='logo'/>
            <div>
              <Button type='button' href="/login" variant='outlined' className='button'>Login</Button>
              <div className='divider'/>
              <Button type='button' href="/signup" variant='outlined' className='button'>Signup</Button>
            </div>
            
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
