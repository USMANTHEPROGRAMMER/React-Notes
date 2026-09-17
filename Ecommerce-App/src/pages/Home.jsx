import React from "react";
import ProductCard from "../components/ProductCard.jsx";
import CardSkeleton from "../components/CardSkeleton.jsx";

const CATEGORY_META = {
  "men's clothing": { label: "Men's Clothing", emoji: "👔" },
  "women's clothing": { label: "Women's Clothing", emoji: "👗" },
  "jewelery": { label: "Jewelry", emoji: "💍" },
  "electronics": { label: "Electronics", emoji: "🎧" },
};

const PERKS = [
  { icon: "🚚", title: "Free shipping", desc: "On every order, no minimum spend." },
  { icon: "↩️", title: "Easy returns", desc: "30 days to change your mind." },
  { icon: "🔒", title: "Secure checkout", desc: "Your payment info stays protected." },
  { icon: "💬", title: "Real support", desc: "Reach a human when you need one." },
];

// Landing page: hero + category showcase + featured products + trust
// section + newsletter box. All state below is plain useState.
export default function Home({ products, loading, onAdd, onView, isInCart, setPage, setCategoryFilter }) {
  const featured = products.slice(0, 4);
  const categories = Array.from(new Set(products.map((p) => p.category)));

  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  const goToCategory = (cat) => {
    setCategoryFilter(cat);
    setPage("products");
  };

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10 grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-semibold">
            New season, same good prices
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-stone-900 mt-3">
            Everyday things, <br /> chosen well.
          </h1>
          <p className="text-stone-600 mt-4 text-sm sm:text-base max-w-md">
            Clothing, electronics, and jewelry picked for people who'd rather buy
            one good thing than five forgettable ones.
          </p>
          <button
            onClick={() => setPage("products")}
            className="mt-6 bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors"
          >
            Shop all products →
          </button>
        </div>
        <div className="bg-white border border-stone-200 rounded-3xl p-8 grid grid-cols-2 gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-28 bg-stone-100 rounded-xl animate-pulse" />
              ))
            : featured.map((p) => (
                <div
                  key={p.id}
                  className="h-28 bg-stone-50 rounded-xl flex items-center justify-center p-3"
                >
                  <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
        </div>
      </section>

      {/* Category showcase */}
      {!loading && categories.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
          <h2 className="font-serif text-2xl text-stone-900 mb-5">Shop by category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const meta = CATEGORY_META[cat] || { label: cat, emoji: "🛍️" };
              return (
                <button
                  key={cat}
                  onClick={() => goToCategory(cat)}
                  className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col items-center gap-2 hover:border-emerald-800 hover:shadow-md transition-all capitalize"
                >
                  <span className="text-3xl">{meta.emoji}</span>
                  <span className="text-sm font-medium text-stone-800 text-center">{meta.label}</span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Featured products */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-serif text-2xl text-stone-900">Featured picks</h2>
          <button
            onClick={() => setPage("products")}
            className="text-sm text-emerald-800 hover:underline"
          >
            View all →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
            : featured.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAdd={onAdd}
                  onView={onView}
                  inCart={isInCart(p.id)}
                />
              ))}
        </div>
      </section>

      {/* Trust / perks section */}
      <section className="bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {PERKS.map((p) => (
            <div key={p.title} className="text-center">
              <div className="text-2xl mb-2">{p.icon}</div>
              <h3 className="text-sm font-semibold text-stone-900">{p.title}</h3>
              <p className="text-xs text-stone-500 mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-stone-900 rounded-3xl px-8 py-10 text-center">
          <h2 className="font-serif text-2xl text-white mb-2">Get first look at new drops</h2>
          <p className="text-stone-300 text-sm mb-6">No spam. Unsubscribe whenever.</p>

          {subscribed ? (
            <p className="text-emerald-400 text-sm">You're on the list — thanks!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-full px-4 py-2.5 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}