import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

// App.jsx is the single source of truth: it holds every piece of shared
// state (products, cart, current page, logged-in user) and passes it down
// as props. Page switching is plain useState — no react-router, no
// useContext — to keep this to exactly useState + useEffect.
export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  // Cart starts from whatever was saved in localStorage, if anything.
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("marketplace_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Logged-in user also starts from localStorage (persists across refresh).
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("marketplace_current_user");
    return saved ? JSON.parse(saved) : null;
  });

  // Fetch the full product catalog once, on mount.
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setProducts(data);
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
  }, []);

  // Scroll to top whenever the page changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // Persist cart to localStorage every time it changes.
  useEffect(() => {
    localStorage.setItem("marketplace_cart", JSON.stringify(cart));
  }, [cart]);

  // Persist current user to localStorage every time it changes.
  useEffect(() => {
    if (user) {
      localStorage.setItem("marketplace_current_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("marketplace_current_user");
    }
  }, [user]);

  const goToDetails = (id) => {
    setSelectedProductId(id);
    setPage("details");
  };

  const goToProductsWithCategory = (cat) => {
    setCategoryFilter(cat);
    setPage("products");
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: product.id, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
      return;
    }
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const isInCart = (id) => cart.some((i) => i.id === id);

  const handleLogin = (userObj) => setUser(userObj);
  const handleLogout = () => setUser(null);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.reduce((sum, i) => {
    const p = products.find((pr) => pr.id === i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col">
      <Navbar
        page={page}
        setPage={setPage}
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        onCartClick={() => setPage("cart")}
        user={user}
        onLogout={handleLogout}
      />

      <main className="flex-1">
        {page === "home" && (
          <Home
            products={products}
            loading={loading}
            onAdd={addToCart}
            onView={goToDetails}
            isInCart={isInCart}
            setPage={setPage}
            setCategoryFilter={goToProductsWithCategory}
          />
        )}

        {page === "products" && (
          <Products
            products={products}
            loading={loading}
            error={error}
            search={search}
            onAdd={addToCart}
            onView={goToDetails}
            isInCart={isInCart}
            initialCategory={categoryFilter}
          />
        )}

        {page === "details" && (
          <ProductDetails
            productId={selectedProductId}
            products={products}
            onAdd={addToCart}
            isInCart={isInCart}
            setPage={setPage}
            onView={goToDetails}
          />
        )}

        {page === "cart" && (
          <Cart
            cart={cart}
            products={products}
            updateQty={updateQty}
            removeItem={removeItem}
            total={cartTotal}
            setPage={setPage}
          />
        )}

        {page === "contact" && <Contact />}

        {page === "login" && <Login onLogin={handleLogin} setPage={setPage} />}

        {page === "signup" && <Signup onLogin={handleLogin} setPage={setPage} />}
      </main>

      <Footer />
    </div>
  );
}