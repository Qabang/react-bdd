import React from 'react';

import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import Startview from './components/Startview'
import './App.css';
import Login from './components/Login';

function App() {
  // const appTitle = 'Our Awsome shop!'
  // const linkItems = [{ to: '/login', name: 'Login' }, { to: '/cart', name: 'Cart' }]

  return (
    <div className="App">
      <Router>

        <header className="App-header">
          <nav>
            <NavLink to="/"> Start</NavLink>
            <NavLink to="/login"> Login</NavLink>
          </nav>
        </header>
        <section className="main-content">
          <Routes>
            <Route path="/" element={<Startview />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
