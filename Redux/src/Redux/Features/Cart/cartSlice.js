import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
};

// console.log(initialState);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      console.log(current(state));

      const result = state.items.find(
        (item) => item.name === action.payload.name,
      );
      console.log(Boolean(result));
      if (result) {
        result.quantity += action.payload.quantity;
        state.totalItems += 1;
      }
      //   console.log(result);
      else {
        state.items.push(action.payload);
        state.totalItems += 1;
      }
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      const result = state.items.find(
        (item) => item.name === action.payload.name,
      );
      if (result) {
        if (result.quantity > 1) {
          result.quantity -= 1;
          state.totalItems -= 1;
        } else if (result.quantity === 1) {
          state.items = state.items.filter((item) => {
            return item.name !== action.payload.name;
          });
          state.totalItems -= 1;
        }
      }
      console.log(current(state));
    },
    clearInidividualCart: (state, action) => {
      const result = state.items.find((item) => item.name === action.payload.name);
      if (result) {
        state.items = state.items.filter((item) => {
          return item.name !== action.payload.name;
        })
        state.totalItems -= action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
    }
  },
});

export default cartSlice.reducer;