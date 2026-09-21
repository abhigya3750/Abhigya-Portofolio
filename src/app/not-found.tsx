import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      {/* Background ambient lighting */}
      <div className="absolute w-80 h-80 bg-botanical-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-xs font-mono font-medium text-botanical-800 mb-6">
        <Sparkles className="w-3.5 h-3.5 text-botanical-600" />
        <span>Page Not Found</span>
      </div>

      <h1 className="text-6xl sm:text-7xl font-extrabold text-charcoal-primary font-display tracking-tight">
        404
      </h1>

      <h2 className="text-xl sm:text-2xl font-bold text-charcoal-primary font-display mt-3">
        Looking for a corridor that doesn&apos;t exist?
      </h2>

      <p className="mt-3 text-sm sm:text-base text-charcoal-body max-w-md leading-relaxed">
        The route you are looking for might have moved or been renamed. Let&apos;s get you back to the operating hub.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-botanical-600 hover:bg-botanical-700 text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
