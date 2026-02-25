"use client";

export default function TopLoader({ loading = true }) {
  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-50 bg-gray-200 overflow-hidden">
      <div className="loader-bar h-full w-1/3 bg-emerald-500 rounded-full" />
    </div>
  );
}