import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { data } from "react-router-dom";

const Settings = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { name, role } = userData;

  return (
    <div className="flex gap-3 flex-1 items-center justify-center text-4xl flex-col">
      <p>Settings</p>
      <button
        className="border-2 px-5 py-3 cursor-pointer rounded-full"
        onClick={() => {
          const changeName = prompt("Enter the Name You Want to Replace With?");
          if (changeName && changeName.trim() !== "") {
            setUserData((prevData) => ({
              ...prevData, // Pehle se mojood tamam values (role, email etc.) copy karein
              name: changeName, // Sirf 'name' ki value override/update karein
            }));
          }
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default Settings;
