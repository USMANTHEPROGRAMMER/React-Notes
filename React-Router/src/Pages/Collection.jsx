import React from "react";
import { Link, Outlet } from "react-router-dom";

const Collection = () => {
  return (
    <div>
      <div className="flex justify-around items-center border-b py-4 text-2xl">
        <Link to="clothing" className="">
          Clothing
        </Link>
        <Link to="/">Home</Link>
        <Link to="fragrance" className="">
          Fragrance
        </Link>
      </div>
      {/* Child Content Area  */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Collection;
