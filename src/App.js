import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const studentName = 'Zain Karedia';
  const studentId = '101392515';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <p>React JS Programming Week09 Lab exercise</p>
        <p>Your Name: {studentName}</p>
        <p>Your Student ID: {studentId}</p>
        <p>George Brown College, Toronto</p>
      </header>
    </div>
  );
}

export default App;
