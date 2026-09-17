import React from "react";

// Loading placeholder shown while products are being fetched (useEffect + fetch).
export default function CardSkeleton() {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-48 bg-stone-100" />
      <div className="p-4 space-y-2">
        <div className="h-3 bg-stone-100 rounded w-3/4" />
        <div className="h-3 bg-stone-100 rounded w-1/2" />
        <div className="h-6 bg-stone-100 rounded w-full mt-3" />
      </div>
    </div>
  );
}
