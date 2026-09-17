import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const Profile = () => {

  const { userData, setUserData } = useContext(UserContext);

  return (
    <div className="flex flex-col gap-5 flex-1 items-center justify-center text-4xl">
      <p>Profile Page</p>
      <p>Name: {userData ? userData.name : 'Not Logged In'}</p>
      <p>Role: {userData ? userData.role : 'Not Logged In'}</p>
      <button onClick={() => {
        setUserData(null)
      }} className="bg-black text-white px-5 py-3 rounded-full cursor-pointer">Logout</button>
    </div>
  );
};

export default Profile;
