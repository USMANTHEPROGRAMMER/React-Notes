import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/`,
      );
      const data = await response.json()
      console.log(data);
    };

    fetchData()
  }, [name]);

  return (
    <button
      onClick={() => {
        setName((prev) => prev + 1);
      }}
    >
      Click Me for Free Cookie! {name}
    </button>
  );
};

export default App; // ya export default ApiTestComponent;
