import React from "react";
import { Link } from "react-router-dom";

const SOS = () => {
  return (
    <>
      <div>SOS</div>
      <Link to="/contact" className="border-2 text-xl">Go to Contact Page</Link>
    </>
  );
};

export default SOS;
