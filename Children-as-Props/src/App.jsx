import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Card>
        <p className="text-sm text-gray-500">Modern Web Application Development</p>
        <h3 className="text-base font-semibold text-gray-800">Muhammad Usman Ghani</h3>
        <img
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
          alt=""
        />
      </Card>

      <Card>
        <p className="text-sm text-gray-500">Graphic Designing with AI Integration (Job Ready)</p> 
        <h3 className="text-base font-semibold text-gray-800">Abdul Raheem Khan</h3>
        <img
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211469.png"
          alt=""
        />
      </Card>
    </div>
  );
};

export default App;
