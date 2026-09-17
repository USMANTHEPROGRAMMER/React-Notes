import React from "react";

// Simple star-rating display, purely presentational.
export default function Stars({ rate = 0, count = 0 }) {
  const full = Math.round(rate);
  return (
    <div className="flex items-center gap-1 text-xs text-stone-500">
      <span className="text-amber-500 tracking-tighter">
        {"★".repeat(full)}
        {"☆".repeat(5 - full)}
      </span>
      <span>({count})</span>
    </div>
  );
}
