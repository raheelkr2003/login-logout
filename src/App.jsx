import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Click the Button!!!');

  const handleLogin = () => {
    setMessage('Welcome, you are logged in');
  };

  const handleLogout = () => {
    setMessage('You are logged out');
  };

  return (
    <div>
      <h1>Checking login and logout Condition</h1>
      <h1>{message}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
