import React from "react";
import Stars from "./Stars.jsx";

const fmt = (n) => `$${n.toFixed(2)}`;

export default function ProductCard({ product, onAdd, onView, inCart }) {
  return (
    <div className="group flex flex-col bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <button
        onClick={() => onView(product.id)}
        className="relative bg-stone-50 h-48 flex items-center justify-center p-6 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-emerald-800 text-emerald-50 px-2 py-1 rounded-full">
          {product.category}
        </span>
      </button>
      <div className="flex flex-col flex-1 p-4">
        <button
          onClick={() => onView(product.id)}
          className="text-left font-serif text-[15px] leading-snug text-stone-800 line-clamp-2 mb-1 hover:text-emerald-800"
        >
          {product.title}
        </button>
        <Stars rate={product.rating?.rate} count={product.rating?.count} />
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-semibold text-stone-900">{fmt(product.price)}</span>
          <button
            onClick={() => onAdd(product)}
            className={`text-xs font-medium px-3 py-2 rounded-full transition-colors ${
              inCart
                ? "bg-emerald-100 text-emerald-800"
                : "bg-stone-900 text-white hover:bg-emerald-800"
            }`}
          >
            {inCart ? "Added ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
