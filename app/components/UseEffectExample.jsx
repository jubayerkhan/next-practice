"use client";
import { useEffect } from "react";

export default function UseEffectExample() {
    useEffect(() => {
        console.log("component mounted")
    }, []);
    return(
        <div>
            Hello!
        </div>
    )
}