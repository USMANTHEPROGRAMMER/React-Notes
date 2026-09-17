import React from "react";

export default function Navbar({ page, setPage, search, setSearch, cartCount, onCartClick, user, onLogout }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-100/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4 flex-wrap">
        <button
          onClick={() => setPage("home")}
          className="font-serif text-2xl text-stone-900 shrink-0"
        >
          Marketplace
        </button>

        <nav className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => setPage(l.id)}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                page === l.id
                  ? "bg-stone-900 text-white"
                  : "text-stone-600 hover:bg-stone-200"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {page === "products" && (
          <div className="flex-1 min-w-[160px] relative hidden sm:block">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products…"
              className="w-full bg-white border border-stone-200 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30"
            />
          </div>
        )}

        <div className="flex items-center gap-2 ml-auto sm:ml-0">
          {user ? (
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-sm text-stone-700">
                Hi, {user.name.split(" ")[0]}
              </span>
              <button
                onClick={onLogout}
                className="text-xs px-3 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-200"
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              onClick={() => setPage("login")}
              className="text-xs px-3 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-200"
            >
              Log in
            </button>
          )}

          <button
            onClick={onCartClick}
            className="relative bg-stone-900 text-white rounded-full p-2.5 hover:bg-emerald-800 transition-colors shrink-0"
            aria-label="Open cart"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-900 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}