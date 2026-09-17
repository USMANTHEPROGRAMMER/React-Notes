import React from "react";
import Card from "./Components/card";

function App() {
  return (
    <div className="Card-Container">
      <Card name="Usman" age={18} city="Karachi"/>
      <Card name="Ali" age={20} city="Lahore"/>
      <Card name="Ahmed" age={22} city="Islamabad"/>
    </div>
  );
}

export default App;
