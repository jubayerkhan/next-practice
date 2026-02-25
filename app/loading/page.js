"use client";
import { useState } from "react";
import TopLoader from "@/app/components/TopLoader";

export default function Loading() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="">
        <span className="loader"></span>
    </div>
  );
}