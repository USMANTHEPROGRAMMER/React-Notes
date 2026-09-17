import React, { useState } from "react";

// Frontend-only "auth". Checks the entered email/password against whatever
// was saved in localStorage during Signup. No real backend — that's fine
// for an assignment, but worth saying out loud in a demo.
export default function Login({ onLogin, setPage }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const saved = JSON.parse(localStorage.getItem("marketplace_users") || "[]");
    const match = saved.find((u) => u.email === form.email && u.password === form.password);

    if (!match) {
      setError("No account matches that email and password.");
      return;
    }

    onLogin({ name: match.name, email: match.email });
    setPage("home");
  };

  return (
    <div className="max-w-sm mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl text-stone-900 mb-1">Welcome back</h1>
      <p className="text-stone-500 text-sm mb-8">Log in to your account.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30"
            placeholder="••••••••"
          />
        </div>

        {error && <p className="text-red-600 text-xs">{error}</p>}

        <button
          type="submit"
          className="w-full bg-stone-900 text-white py-3 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors"
        >
          Log in
        </button>
      </form>

      <p className="text-xs text-stone-500 text-center mt-6">
        No account yet?{" "}
        <button onClick={() => setPage("signup")} className="text-emerald-800 hover:underline">
          Sign up
        </button>
      </p>
    </div>
  );
}