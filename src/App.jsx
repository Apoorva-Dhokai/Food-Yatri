// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import SignIn from "./Components/UserSignIn";
import VSignIn from "./Components/VloggerSignIn";
import TopVlogger from "./Components/TopVlogger";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/vsignin" element={<VSignIn />} />
          <Route path="/topvlogger" element={<TopVlogger />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;