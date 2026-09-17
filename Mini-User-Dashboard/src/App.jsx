import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import UsmanGhani from "./Pages/UsmanGhani";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/usmanghani" element={<UsmanGhani />} />
      </Routes>
    </div>
  );
};

export default App;
