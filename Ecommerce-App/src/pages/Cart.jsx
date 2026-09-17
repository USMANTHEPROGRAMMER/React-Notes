import React from "react";

const fmt = (n) => `$${n.toFixed(2)}`;

// Dedicated cart page (as opposed to a drawer) — all state (cart array,
// products) is lifted up in App.jsx and passed down as props.
export default function Cart({ cart, products, updateQty, removeItem, total, setPage }) {
  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-serif text-2xl text-stone-900 mb-3">Your cart is empty</h1>
        <p className="text-stone-500 text-sm mb-6">Go find something good.</p>
        <button
          onClick={() => setPage("products")}
          className="bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-800"
        >
          Browse products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-serif text-2xl text-stone-900 mb-6">Your cart</h1>

      <div className="space-y-4">
        {cart.map((item) => {
          const p = products.find((pr) => pr.id === item.id);
          if (!p) return null;
          return (
            <div key={item.id} className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-4">
              <div className="w-20 h-20 bg-stone-50 rounded-xl flex items-center justify-center shrink-0">
                <img src={p.image} alt={p.title} className="max-h-16 max-w-16 object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-stone-800 line-clamp-1">{p.title}</p>
                <p className="text-xs text-stone-500 mt-1">{fmt(p.price)} each</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-7 h-7 rounded-full border border-stone-300 text-stone-600 hover:bg-stone-100"
                  >
                    −
                  </button>
                  <span className="text-sm w-5 text-center">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-7 h-7 rounded-full border border-stone-300 text-stone-600 hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between shrink-0">
                <span className="text-sm font-semibold text-stone-900">{fmt(p.price * item.qty)}</span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-stone-400 hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-stone-200 rounded-2xl p-5 mt-6 flex items-center justify-between">
        <span className="text-stone-600 text-sm">Subtotal</span>
        <span className="text-xl font-semibold text-stone-900">{fmt(total)}</span>
      </div>

      <button className="w-full bg-emerald-800 text-white py-3 rounded-full text-sm font-medium hover:bg-emerald-900 transition-colors mt-4">
        Checkout
      </button>
    </div>
  );
}
