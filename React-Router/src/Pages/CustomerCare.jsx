import React from "react";
import {Link, Outlet} from "react-router-dom"

const CustomerCare = () => {
  return (
    <div>
      <div>CustomerCare</div>
      <Link to="/contact" className="border-2 text-xl">Go to Contact Page</Link>
    </div>
  );
};

export default CustomerCare;
