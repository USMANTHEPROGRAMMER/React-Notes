// import React, { useReducer } from "react";

// // =========================
// // COUNTER REDUCER
// // =========================

// function counterReducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;

//     case "DECREMENT":
//       return state - 1;

//     case "RESET":
//       return 0;

//     default:
//       return state;
//   }
// }

// // =========================
// // USER REDUCER
// // =========================

// function userReducer(state, action) {
//   switch (action.type) {
//     case "LOGIN":
//       return action.payload;

//     case "LOGOUT":
//       return null;

//     default:
//       return state;
//   }
// }

// // =========================
// // APP COMPONENT
// // =========================

// const App = () => {
//   // Counter ka apna reducer
//   const [count, countDispatch] = useReducer(counterReducer, 0);

//   // User ka apna reducer
//   const [user, userDispatch] = useReducer(userReducer, null);

//   return (
//     <div>
//       {/* ================= COUNTER ================= */}

//       <h1>Counter: {count}</h1>

//       <button onClick={() => countDispatch({ type: "INCREMENT" })}>+</button>

//       <button onClick={() => countDispatch({ type: "DECREMENT" })}>-</button>

//       <button onClick={() => countDispatch({ type: "RESET" })}>Reset</button>

//       {/* ================= USER ================= */}

//       <h1>User: {user ? user.name : "Not Logged In"}</h1>

//       <button
//         onClick={() =>
//           userDispatch({
//             type: "LOGIN",
//             payload: {
//               name: "Usman",
//             },
//           })
//         }
//       >
//         Login
//       </button>

//       <button
//         onClick={() =>
//           userDispatch({
//             type: "LOGOUT",
//           })
//         }
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default App;

import { useReducer} from "react";

const useReducerHook = () => { // Main Function 

  
  function countFun(count, action) {
    if (action.type === "Increment") {
      return count + 1
    } else if(action.type === "Decrement") {
      if (count > 0) {
        return count - 1
      } else {
        return count
      }
    }
  }

  const [count, countDispatch] = useReducer(countFun, 0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => {
        countDispatch({type: "Increment"})
      }}>Increment</button>
      <button onClick={() => {
        countDispatch({type: "Decrement"})
      }}>Decrement</button>
    </>
  );
};

export default useReducerHook;
