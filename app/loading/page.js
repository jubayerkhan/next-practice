"use client";
import { useState } from "react";
import TopLoader from "@/app/components/TopLoader";

export default function Loading() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6">
        <span className="loader"></span>
    </div>
  );
}