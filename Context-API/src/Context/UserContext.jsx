import { createContext, useState } from "react";

// 1. Khali Storage Box banaya
export const UserContext = createContext();

// 2. Data Provider Component Banaya (Jo sabko data baantega)
export const UserProvider = ({ children }) => {
  // Wo Data jo hum poori app me baantna chahte hain
  const [user, setUser] = useState("Usman Ghani");

  // State badalne ka function
  const changeName = (newName) => {
    setUser(newName);
  };

  return (
    // 'value' ke andar wo saara samaan daalo jo baki components ko dena hai
    <UserContext.Provider value={{ user, changeName }}>
      {children}
    </UserContext.Provider>
  );
};