import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header"; // Change the import path to match the file name
import Welcome from "./Welcome";

// import Home from "./components/Home/Home";
import Login from "./Login";
import Signup from "./Signup";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
      <Header /> 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Welcome" element={<Welcome/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;