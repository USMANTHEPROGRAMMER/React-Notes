import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-sm">
      <Link to="/title" className="font-bold text-xl">
        Usman Ghani
      </Link>
      <div className="flex gap-6 font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link>
        <Link to="/collection">Collections</Link>
      </div>
    </nav>
  );
};

export default Navbar;
