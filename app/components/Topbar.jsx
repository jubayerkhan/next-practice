"use client";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="ml-auto flex items-center gap-4">
        <button className="rounded-full bg-gray-100 px-3 py-1">
          Profile
        </button>
      </div>
    </header>
  );
}