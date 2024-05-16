"use client"
import Image from "next/image";
import Upload from "./upload/page";
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
      {isLoggedIn ? <Upload /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default HomePage;