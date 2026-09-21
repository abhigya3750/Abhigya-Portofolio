"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Greeting {
  text: string;
  language: string;
}

const GREETINGS: Greeting[] = [
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "खम्मा घणी", language: "Rajasthani" },
  { text: "ನಮಸ್ಕಾರ", language: "Kannada" },
  { text: "નમસ્તે", language: "Gujarati" },
  { text: "سلام", language: "Kashmiri" },
  { text: "নমস্কার", language: "Bengali" },
  { text: "नमस्कार", language: "Marathi" },
];

export default function MultilingualLoader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("abhigya_has_seen_loader");
    if (hasSeen === "true") {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    // 420ms per greeting gives a snappy, brisk flash animation sequence
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < GREETINGS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            sessionStorage.setItem("abhigya_has_seen_loader", "true");
            onComplete?.();
          }, 350);
          return prev;
        }
      });
    }, 420);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinished(true);
    sessionStorage.setItem("abhigya_has_seen_loader", "true");
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="multilingual-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white/98 backdrop-blur-2xl select-none"
          onClick={handleSkip}
        >
          {/* Subtle botanical ambient glow */}
          <div className="absolute w-80 h-80 rounded-full bg-botanical-500/15 blur-3xl pointer-events-none -z-10 animate-pulse" />

          {/* Central greeting display */}
          <div className="relative flex flex-col items-center justify-center min-h-[140px] px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.04 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-center"
              >
                <div className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal-primary font-display">
                  {GREETINGS[index].text}
                </div>
                <div className="mt-3 text-xs sm:text-sm uppercase tracking-widest text-botanical-600 font-mono font-semibold">
                  {GREETINGS[index].language}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots indicator */}
          <div className="mt-10 flex items-center gap-2">
            {GREETINGS.map((g, i) => (
              <div
                key={g.language}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-botanical-600"
                    : i < index
                    ? "w-2 bg-botanical-500/50"
                    : "w-2 bg-slate-200"
                }`}
              />
            ))}
          </div>

          {/* Bottom anchored enter button */}
          <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex justify-center px-4 pointer-events-auto">
            <button
              onClick={handleSkip}
              className="px-5 py-2.5 rounded-full bg-slate-100/90 hover:bg-slate-200/90 text-xs font-mono font-medium text-charcoal-body hover:text-botanical-800 transition-all border border-slate-200 shadow-2xs hover:shadow-xs cursor-pointer flex items-center gap-2"
            >
              <span>Click anywhere or press to enter</span>
              <span className="text-botanical-600">→</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
