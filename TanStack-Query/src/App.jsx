import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Product from "./Components/Product";
import Routes from "./Components/Pagination";

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center">
      <Routes />
    </div>
  );
};

export default App;
