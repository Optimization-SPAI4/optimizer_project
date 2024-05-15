"use client"
import Image from "next/image";
import ArrowIndicator from "./components/upload"
import { useState } from 'react';
import Login from './components/Login'

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <ArrowIndicator /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default HomePage;