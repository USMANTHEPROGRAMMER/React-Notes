import React from "react";
import { createContext } from "react";
import { useContext } from "react";

export const NewContext = createContext();

const NewContextProvider = ({ children }) => {
  return (
    <div className="text-4xl">
      <NewContext.Provider value={{Usman: "Usman is Greater", Bushra:"Bushra is Best, "}}>
        {children}
      </NewContext.Provider>
    </div>
  );
};

export default NewContextProvider;