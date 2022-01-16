import React from 'react';
import logo from './logo.svg';
import './App.css';
import  UserForm from './UserForm';
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
