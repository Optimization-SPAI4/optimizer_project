"use client"
import Image from "next/image";
import ArrowIndicator from "./components/Arrow"
import { useState } from 'react';
import Login from './components/Login'
import Navbar from "./components/Navbar";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Navbar/>
      {isLoggedIn ? <ArrowIndicator /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default HomePage;