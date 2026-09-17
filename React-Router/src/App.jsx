import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Title from "./Pages/Title";
import Help from "./Pages/Help";
import ErrorPage from "./Pages/ErrorPage";
import SOS from "./Pages/SOS";
import CustomerCare from "./Pages/CustomerCare";
import Collection from "./Pages/Collection";
import Fragrance from "./Pages/Fragrance"
import Clothing from "./Pages/Clothing"
import Navbar from "./Components/Navbar";
import Janan from "./Components/Janan";

const App = () => {
  return (
    // 1. Min height full screen and vertical layout
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Page Content Wrapper (Takes remaining vertical space) */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="SOS" element={<SOS />} />
            <Route path="CustomerCare" element={<CustomerCare />} />
          </Route>
          <Route path="/title" element={<Title />} />
          <Route path="/help" element={<Help />} />
          <Route path="/collection" element={<Collection />}>
            <Route path="fragrance" element={<Fragrance />}/>
            <Route path="clothing" element={<Clothing />}/>
          </Route>
          <Route path="/collection/:id" element={< Fragrance/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
