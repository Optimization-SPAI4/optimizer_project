// components/Login.js
"use client"
import { useState } from 'react';
import styles from './css/Login.module.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('grant_type', 'password');
      formData.append('client_id', 'brainwave');

  
      const response = await fetch('http://192.168.180.224:8000/realms/experimental/protocol/openid-connect/token?=', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'insomnia/9.0.0',
        },
        body: formData,
      });
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        const { access_token } = data;
        onLogin(access_token); // Pass the access token to the onLogin function
        console.log(access_token)
        setError('');
      } else {
        const { error } = await response.json();
        setError(error);
      }
    } catch (error) {
      setError('An error occurred during login');
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