import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import CardSkeleton from "../components/CardSkeleton.jsx";

// Full catalog page: category filter + sort, computed with plain useState +
// useEffect (recomputes "visible" list whenever products/filters change) —
// no useMemo, as requested.
export default function Products({ products, loading, error, search, onAdd, onView, isInCart, initialCategory }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || "all");

  // If the user clicked a category card on Home, sync it in here.
  useEffect(() => {
    if (initialCategory) setActiveCategory(initialCategory);
  }, [initialCategory]);
  const [sortBy, setSortBy] = useState("default");
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState([]);

  // Derive category list whenever the product list changes.
  useEffect(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)));
    setCategories(cats);
  }, [products]);

  // Recompute the filtered + sorted list whenever any input changes.
  useEffect(() => {
    let list = [...products];

    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));

    setVisible(list);
  }, [products, activeCategory, search, sortBy]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <h1 className="font-serif text-3xl text-stone-900 mb-5">All products</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 justify-between mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              activeCategory === "all"
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-full border capitalize transition-colors ${
                activeCategory === cat
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs bg-white border border-stone-200 rounded-full px-3 py-1.5 focus:outline-none"
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-4 mb-4">
          Couldn't load products: {error}
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : visible.length === 0 ? (
        <p className="text-center text-stone-500 py-16 text-sm">
          No products match your filters. Try something else.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {visible.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={onAdd}
              onView={onView}
              inCart={isInCart(p.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}