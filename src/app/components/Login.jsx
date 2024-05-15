// components/Login.js
"use client"
import { useState } from 'react';
import styles from './Login.module.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Example validation
    if (username === 'user' && password === 'password') {
      onLogin();
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2>Login</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
