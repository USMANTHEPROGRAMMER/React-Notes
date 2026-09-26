import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const { items, totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(items);

  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(totalItems > 0);
  }, [totalItems]);

  let [count, setCount] = useState({
    Laptop: 0,
    Mouse: 0,
    Keyboard: 0,
  });

  //   console.log(count);

  return (
    <div className="bg-linear-to-br from-indigo-600 to-blue-500 min-h-screen flex flex-col items-center text-white p-5 py-12">
      <div className="flex flex-col gap-10 w-full max-w-md">
        <div className="flex flex-col gap-4">
          <div className="flex px-5 py-3 bg-white text-slate-800 rounded-2xl gap-4 items-center justify-between shadow-lg shadow-black/20">
            <div className="flex flex-col gap-2">
              <p className="font-medium">🖥️ Laptop — $1000</p>
            </div>
            <button
              onClick={() => {
                dispatch({
                  type: "cart/addtoCart",
                  payload: {
                    name: "Laptop",
                    price: 1000,
                    quantity: 1,
                  },
                });
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-colors"
            >
              Add to Cart
            </button>
          </div>
          <div className="flex px-5 py-3 bg-white text-slate-800 rounded-2xl gap-4 items-center justify-between shadow-lg shadow-black/20">
            <p className="font-medium">🖱️ Mouse — $50</p>
            <button
              onClick={() => {
                dispatch({
                  type: "cart/addtoCart",
                  payload: {
                    name: "Mouse",
                    price: 50,
                    quantity: 1,
                  },
                });
                setCount({ ...count, Mouse: count.Mouse + 1 });
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-colors"
            >
              Add to Cart
            </button>
          </div>
          <div className="flex px-5 py-3 bg-white text-slate-800 rounded-2xl gap-4 items-center justify-between shadow-lg shadow-black/20">
            <p className="font-medium">⌨️ Keyboard — $100</p>
            <button
              onClick={() => {
                dispatch({
                  type: "cart/addtoCart",
                  payload: {
                    name: "Keyboard",
                    price: 100,
                    quantity: 1,
                  },
                });
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold flex items-center justify-center drop-shadow-sm">
            Cart: {totalItems}
          </h1>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex px-5 py-3 bg-white/95 text-slate-800 rounded-2xl gap-4 items-center justify-between shadow-md"
            >
              <div className="flex flex-col gap-2">
                <p className="font-medium">{item.name}</p>
                <p className="font-medium">Quantity: {item.quantity}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    dispatch({
                      type: "cart/removeFromCart",
                      payload: {
                        name: item.name,
                        quantity: item.quantity,
                      },
                    });
                  }}
                  className="border-2 border-red-400 text-red-500 hover:bg-red-50 text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-colors"
                >
                  Remove
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "cart/clearInidividualCart",
                      payload: {
                        name: item.name,
                        quantity: item.quantity,
                      },
                    });
                  }}
                  className="border-2 border-red-400 text-red-500 hover:bg-red-50 text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-colors"
                >
                  Remove All
                </button>
              </div>
            </div>
          ))}

          {visible && (
            <button
            onClick={() => {
              dispatch({
                type: "cart/clearCart",
              });
            }}
            className="border-2 border-red-400 bg-red-500 text-white text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-colors"
          >
            Remove All
          </button> )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
