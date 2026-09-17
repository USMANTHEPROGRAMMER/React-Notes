import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./Context/UserContext";
import { ThemeProvider } from "./Context/ThemeContext";
import "./index.css";
import NewContextProvider from "./Context/NewContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NewContextProvider>
    <App />
  </NewContextProvider>,
);
