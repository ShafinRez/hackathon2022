import React from 'react';
import logo from './logo.svg';
import './App.css';
import  UserForm from './userForm';
import CustomizedDialogs from './CustomizedDialogs'; 


function App() {
      return (
        <div className="App">
        <CustomizedDialogs>
            <UserForm/>
        </CustomizedDialogs>
        </div>
    
      );
    }

export default App;
