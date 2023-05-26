import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './Components/Routers/MainRoutes';
import { Navbar } from './Components/Routers/Navbar';
import { useState } from 'react';

function App() {
  const [change,setChange]=useState(false)
  const handleChnage=()=>{
    setChange(!change)
  }
  return (
    <div className="App">
      <Navbar handleChnage={handleChnage}/>
      <MainRoutes/>
    </div>
  );
}

export default App;
