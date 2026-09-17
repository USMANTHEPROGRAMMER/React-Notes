import React from "react";

const CustomHook = () => {
  function useToggle() {
    const [isToggle, setIsToggle] = React.useState(false);

    const toggle = () => {
      setIsToggle(!isToggle);
    };

    return [isToggle, toggle];  
  }

  const [isToggle, toggle] = useToggle()

  return (
    <div className="custom-hook flex flex-col gap-5 justify-center min-h-screen text-5xl items-center">
      <h1>{isToggle ? "ON" : "OFF"}</h1>
      <button
        className="bg-blue-500 rounded-2xl cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4"
        onClick={() => toggle()}
      >Click ME!!</button>
    </div>
  );
};

export default CustomHook;
