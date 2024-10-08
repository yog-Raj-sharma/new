import React, { useState } from 'react';
import './App.css';
import './style.css';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); // State to store user data

  const handleLogin = (data, userType) => {
    setIsLoggedIn(true);
    setUserData(data); // Set user data upon login
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/welcome" element={<WelcomePage userData={userData} />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
