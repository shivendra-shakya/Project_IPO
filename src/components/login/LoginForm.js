import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './LoginForm.css';
//tested file
const LoginForm = () => {

  //done OK
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'alok' && password === 'alok') {
      
      setAuthenticated(true); //  authentication status to true
    } else {

      //vd
      alert('Invalid credentials');
    }
  };

  if (authenticated) {
    return <Navigate to="/ipo" />;
  }
//ok
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder='alok'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder='alok'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
