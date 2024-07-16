import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import BestSeller from './components/BestSeller';
import UploadContent from './components/UploadContent';
import TopVloggers from './components/TopVloggers';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/uploadcontent" element={<UploadContent />} />
          <Route path="/vloggers" element={<TopVloggers />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;