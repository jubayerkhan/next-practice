"use client";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 hidden lg:block">
      <div className="h-full px-4 py-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <nav className="space-y-2">
          <a className="block px-3 py-2 rounded-lg hover:bg-gray-100">
            Overview
          </a>
          <a className="block px-3 py-2 rounded-lg hover:bg-gray-100">
            Bookings
          </a>
          <a className="block px-3 py-2 rounded-lg hover:bg-gray-100">
            Settings
          </a>
        </nav>
      </div>
    </aside>
  );
}