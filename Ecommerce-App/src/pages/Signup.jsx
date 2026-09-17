import React, { useState } from "react";

// Saves a new "account" into localStorage. Purely client-side — good enough
// for a demo, not for real security (never store plain-text passwords in a
// real app; worth mentioning if your instructor asks).
export default function Signup({ onLogin, setPage }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const saved = JSON.parse(localStorage.getItem("marketplace_users") || "[]");

    if (saved.some((u) => u.email === form.email)) {
      setError("An account with that email already exists.");
      return;
    }

    const updated = [...saved, form];
    localStorage.setItem("marketplace_users", JSON.stringify(updated));

    onLogin({ name: form.name, email: form.email });
    setPage("home");
  };

  return (
    <div className="max-w-sm mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl text-stone-900 mb-1">Create account</h1>
      <p className="text-stone-500 text-sm mb-8">Join to save your cart and track orders.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-medium text-stone-600 block mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-stone-600 block mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-stone-600 block mb-1">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={4}
            className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30"
            placeholder="••••••••"
          />
        </div>

        {error && <p className="text-red-600 text-xs">{error}</p>}

        <button
          type="submit"
          className="w-full bg-stone-900 text-white py-3 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors"
        >
          Sign up
        </button>
      </form>

      <p className="text-xs text-stone-500 text-center mt-6">
        Already have an account?{" "}
        <button onClick={() => setPage("login")} className="text-emerald-800 hover:underline">
          Log in
        </button>
      </p>
    </div>
  );
}