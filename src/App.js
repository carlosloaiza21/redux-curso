import React from 'react';
import logo from './logo.svg';
import Select from './components/select';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Select />
      </header>
    </div>
  );
}

export default App;
