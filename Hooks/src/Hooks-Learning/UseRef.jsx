import { useRef } from "react";

function App() {

  // 1️⃣ useRef ek "reference box" banata hai
  // Iske andar hum kisi DOM element ka reference rakh sakte hain
  const inputRef = useRef(null);


  // 2️⃣ Jab button click hoga ye function chalega
  function handleFocus() {

    // inputRef.current ke andar hamare <input> ka reference hai
    // .focus() input ko automatically focus kar dega
    inputRef.current.focus();
  }


  return (
    <div>

      {/* 
        3️⃣ ref={inputRef}

        Yahan hum React ko keh rahe hain:
        "Is input ka reference inputRef ke andar rakh do."

        Iske baad:
        inputRef.current === input element
      */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />


      {/* 4️⃣ Button click hoga → handleFocus() chalega */}
      <button onClick={handleFocus}>
        Focus Input
      </button>

    </div>
  );
}

export default App;