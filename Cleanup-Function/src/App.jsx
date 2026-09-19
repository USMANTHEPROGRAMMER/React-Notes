import React from "react";
import Child from "./Components/Child.jsx";

const App = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Child />}
    </div>
  );
};

export default App;
