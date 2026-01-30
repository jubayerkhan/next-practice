"use client";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`p-4 rounded-lg transition-all duration-200 ${dark ? "text-white bg-black":" text-black bg-white"}`}
    >
      <button className={`p-2 border rounded-lg transition-all duration-200 ${dark ? "border-white": "border-black"}`} onClick={() => setDark(!dark)}>Change Theme</button>
    </div>
  );
}
