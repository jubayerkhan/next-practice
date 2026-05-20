"use client";

export default function Glass() {
  return (
    <>
      <div className="bg-[#111] flex items-center justify-center p-10">
        <div className="w-55 h-45 rounded-xl bg-white/8 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.08)] p-5 text-white">
          <h2 className="text-xl font-semibold mb-2">Glass Card</h2>

          <p className="text-sm text-white/70">
            Modern glassmorphism UI in Next.js and Tailwind.
          </p>
        </div>
      </div>
    </>
  );
}
