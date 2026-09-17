import React from "react";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import { UserProvider } from "./Context/UserContext";
import { ThemeProvider } from "./Context/ThemeContext";
import {NewContext} from './Context/NewContextProvider'
import { useContext } from "react";

const App = () => {

  const {Usman, Bushra} = useContext(NewContext)

  console.log(Usman, Bushra)

  return (
    <div>

      {Bushra} Is Here!!!!
      {/* <Navbar />
      <Profile /> */}
    </div>
  );
};

export default App;
