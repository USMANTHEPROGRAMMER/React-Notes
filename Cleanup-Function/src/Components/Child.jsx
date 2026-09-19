import React from "react";

const App = () => {
  React.useEffect(() => {
    let n = 1;
    const timer = setInterval(() => {
      console.log(`Timer ${n}`);
      n++;
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);
  return <div>App</div>;
};

export default App;
