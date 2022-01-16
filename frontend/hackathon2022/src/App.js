import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar'
import Sidebar from './components/Sidebar';
import  UserForm from './userForm';
import CustomizedDialogs from './CustomizedDialogs'; 
import React from 'react'; 

function App() {
  return (
    <div className='container'>
      <Sidebar/>
      <CustomizedDialogs>
            <UserForm/>
      </CustomizedDialogs>
      <div className="calendar">
        <Calendar/>
      </div>
    </div>
    
  );
}

export default App;
