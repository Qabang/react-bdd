import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';
import Login from './components/Login';

function App() {
  const appTitle = 'Our Awsome shop!'
  const linkItems = [{ to: '/login', name: 'Login' }, { to: '/cart', name: 'Cart' }]

  return (
    <div className="App">
      <Navbar appTitle={appTitle} linkItems={linkItems} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Login />
    </div>
  );
}

export default App;
