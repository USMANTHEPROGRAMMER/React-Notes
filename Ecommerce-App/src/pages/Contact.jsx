import React, { useState } from "react";

// Simple contact form. All fields are controlled with useState;
// "submitted" is also plain useState so we can show a confirmation message.
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl text-stone-900 mb-2">Get in touch</h1>
      <p className="text-stone-500 text-sm mb-8">
        Questions about an order, a product, or anything else — send it over.
      </p>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-sm">
          Thanks, {form.name || "friend"} — your message has been noted. We'll get back to you soon.
        </div>
      ) : (
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
            <label className="text-xs font-medium text-stone-600 block mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800/30"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors"
          >
            Send message
          </button>
        </form>
      )}
    </div>
  );
}
