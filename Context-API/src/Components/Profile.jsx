import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Profile() {
  // Storage Box se 'user' aur 'changeName' function dono nikale
  const { user, changeName } = useContext(UserContext);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Profile Screen</h3>
      <p>Current User: {user}</p>
      
      {/* Button click hone par Context ka function chalega */}
      <button onClick={() => changeName("Ali Khan")}>
        Change Name to Ali Khan
      </button>
    </div>
  );
}

export default Profile;