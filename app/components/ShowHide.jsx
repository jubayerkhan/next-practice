"use client";

import { useState } from "react";
import Image from "next/image";
// import available_bottom_fixed from "@/assets/available_bottom_fixed.png"; // Update your path

export default function YourComponent() {
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [showDiscardModal, setShowDiscardModal] = useState(false);

  const handleDiscard = () => {
    // Put your actual discard logic here (reset calendar, clear changes, etc.)
    console.log("Changes discarded");

    setShowDiscardModal(false);
    setShowBottomBar(false); // Hide bottom bar after discard
  };

  const handleSave = () => {
    // Your save logic here
    console.log("Changes saved");
    setShowBottomBar(false); // Hide bottom bar after save
  };

  return (
    <>
      {/* Bottom Fixed Bar - Show/Hide controlled */}
      {showBottomBar && (
        <div className="max-w-[500px] mx-auto border available_bottom_btns_fixed_div fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
          <div className="available_bottom_btns_fixed_div_main max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Left content */}
            <div className="flex items-center gap-2.5">
              {/* <Image 
                src={available_bottom_fixed} 
                alt="available_bottom_fixed" 
                width={24} 
                height={24}
              /> */}
              <p className="text-gray-700 font-medium">Unsaved changes</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2.5">
              <button
                onClick={() => setShowDiscardModal(true)}
                className="available_discard_btn px-6 py-2.5 rounded-md border border-gray-300 hover:bg-gray-50 transition"
              >
                Discard
              </button>
              <button
                onClick={handleSave}
                className="available_save_btn px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Modal (Pure Tailwind) */}
      {showDiscardModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-xl w-full max-w-md mx-4 overflow-hidden shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Discard unsaved changes?
              </h3>
              <p className="text-gray-600">
                Are you sure you want to discard all unsaved changes? This
                action cannot be undone.
              </p>
            </div>

            <div className="flex border-t">
              <button
                onClick={() => setShowDiscardModal(false)}
                className="flex-1 py-4 text-gray-700 font-medium hover:bg-gray-50 transition border-r"
              >
                Cancel
              </button>
              <button
                onClick={handleDiscard}
                className="flex-1 py-4 text-red-600 font-medium hover:bg-red-50 transition"
              >
                Yes, Discard
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
