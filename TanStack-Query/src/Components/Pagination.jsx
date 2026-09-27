import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";

const Pagination = () => {
  return (
    <Routes>
      <Route path="/" element={<h1 className="text-6xl">Hello World</h1>} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="*" element={<h1 className="text-6xl">Error 404</h1>} />
    </Routes>
  );
};

export default Pagination;
