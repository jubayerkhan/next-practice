"use client";
import { useState } from "react";

export default function Toggle() {
  const [isShown, setIsShown] = useState(true);
  return (
    <div className="mt-5 flex gap-5 items-center">
      <button onClick={() => setIsShown(!isShown)} className="button_style">
        Toggle Say hi
      </button>
      {isShown && <p className="font-medium text-gray-700">Hello World!</p>}
    </div>
  );
}
