import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './Components/Routers/MainRoutes';
import { Navbar } from './Components/Routers/Navbar';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
