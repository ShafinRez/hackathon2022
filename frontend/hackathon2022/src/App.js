import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className='container'>
      <Sidebar/>
      <div className="calendar">
        <Calendar/>
        
      </div>
    </div>
    
  );
}

export default App;
