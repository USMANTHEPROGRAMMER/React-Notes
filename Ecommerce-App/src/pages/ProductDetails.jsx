import React, { useState, useEffect } from "react";
import Stars from "../components/Stars.jsx";
import ProductCard from "../components/ProductCard.jsx";

const fmt = (n) => `$${n.toFixed(2)}`;

// Product detail page. Re-fetches the single product from the API by id
// whenever the selected id changes — a second, separate useEffect example.
export default function ProductDetails({ productId, products, onAdd, isInCart, setPage, onView }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setProduct(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [productId]);

  const related = products.filter((p) => p.category === product?.category && p.id !== productId).slice(0, 4);

  if (loading) {
    return <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center text-stone-500">Loading product…</div>;
  }

  if (error || !product) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-stone-500 mb-4">{error || "Product not found."}</p>
        <button onClick={() => setPage("products")} className="text-emerald-800 hover:underline text-sm">
          ← Back to products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <button onClick={() => setPage("products")} className="text-sm text-stone-500 hover:text-emerald-800 mb-6">
        ← Back to products
      </button>

      <div className="bg-white border border-stone-200 rounded-3xl grid sm:grid-cols-2 gap-0 overflow-hidden">
        <div className="bg-stone-50 flex items-center justify-center p-10">
          <img src={product.image} alt={product.title} className="max-h-72 object-contain" />
        </div>
        <div className="p-8 flex flex-col">
          <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-semibold mb-2">
            {product.category}
          </span>
          <h1 className="font-serif text-2xl text-stone-900 mb-2">{product.title}</h1>
          <Stars rate={product.rating?.rate} count={product.rating?.count} />
          <p className="text-sm text-stone-600 mt-4 leading-relaxed">{product.description}</p>
          <div className="mt-auto pt-6 flex items-center justify-between">
            <span className="text-3xl font-semibold text-stone-900">{fmt(product.price)}</span>
            <button
              onClick={() => onAdd(product)}
              className={`px-5 py-3 rounded-full text-sm font-medium ${
                isInCart(product.id)
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-stone-900 text-white hover:bg-emerald-800"
              }`}
            >
              {isInCart(product.id) ? "Added ✓" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="font-serif text-xl text-stone-900 mb-4">You might also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={onAdd} onView={onView} inCart={isInCart(p.id)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
