"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  Trophy, 
  MapPin, 
  Brain, 
  Zap, 
  Sparkles, 
  Terminal, 
  ArrowUpRight
} from "lucide-react";

interface PhilosophyProps {
  sportsResilience: {
    title: string;
    quote: string;
    achievement: string;
    photo: string;
  };
  intro: string;
  superpower: string;
  locations: string[];
}

// 15 Curated Tools with authentic brand vector SVGs and categorized architecture
const TOOLS = [
  {
    name: "Google Workspace",
    category: "Product & Strategy",
    color: "#EA4335",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
        <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.8C6.5 7.1 9 5 12 5z"/>
        <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
        <path fill="#FBBC05" d="M5.6 14.9c-.2-.7-.4-1.5-.4-2.9 0-1.4.2-2.2.4-2.9L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.8z"/>
        <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.1-6.4-5.1L1.9 16c1.8 3.7 5.6 7 10.1 7z"/>
      </svg>
    )
  },
  {
    name: "Jira",
    category: "Product & Strategy",
    color: "#0052CC",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="#0052CC">
        <path d="M11.5 2C6.25 2 2 6.25 2 11.5c0 3.84 2.27 7.15 5.53 8.64-.17-.84-.28-1.89-.28-2.97 0-3.69 1.48-5.32 4.25-5.32h.02V2.02c-.01-.01-.02-.02-.02-.02zm.5 9.85c-2.77 0-4.25 1.63-4.25 5.32 0 1.08.11 2.13.28 2.97 1.25.57 2.65.86 4.12.86 5.35 0 9.7-4.25 9.7-9.5 0-3.84-2.27-7.15-5.53-8.64.17.84.28 1.89.28 2.97 0 3.69-1.48 5.32-4.25 5.32h-.02v7.98c.01.01.02.02.02.02z"/>
      </svg>
    )
  },
  {
    name: "Notion",
    category: "Product & Strategy",
    color: "#111827",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.455-.746c.327 0 .047-.327-.093-.42L16.278 2.15c-.466-.373-.84-.513-1.633-.466L3.992 2.617c-.373 0-.466.28-.28.513l.747 1.078zm-.84 4.572v12.27c0 .653.373.98.98.933l13.904-.84c.653-.047.84-.466.84-.98V8.033c0-.606-.327-.886-.887-.84l-13.95.84c-.607.047-.887.327-.887.747zm11.758 1.353c.187 0 .327.093.327.327v9.425c0 .28-.187.42-.42.42-.187 0-.327-.093-.42-.327l-4.76-7.371v6.998c0 .28-.187.42-.42.42h-.887c-.233 0-.373-.14-.373-.373v-9.425c0-.28.187-.42.42-.42.233 0 .373.093.466.327l4.76 7.371V10.46c0-.28.187-.42.42-.42h.887z"/>
      </svg>
    )
  },
  {
    name: "Figma",
    category: "Product & Strategy",
    color: "#F24E1E",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
        <path fill="#F24E1E" d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z"/>
        <path fill="#FF7262" d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z"/>
        <path fill="#A259FF" d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z"/>
        <path fill="#1ABCFE" d="M12 7h4a2.5 2.5 0 0 1 0 5h-4V7z"/>
        <path fill="#0ACF83" d="M8 12h4v2.5a2.5 2.5 0 1 1-5 0V12h1z"/>
      </svg>
    )
  },
  {
    name: "Canva",
    category: "Product & Strategy",
    color: "#00C4CC",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="#00C4CC">
        <circle cx="12" cy="12" r="10"/>
        <path fill="#FFFFFF" d="M14.5 14.5c-.8.8-2 1.2-3.3 1.2-2.5 0-4.2-1.7-4.2-4.2 0-2.6 1.8-4.3 4.4-4.3 1.2 0 2.2.4 2.8 1l-1 1.2c-.4-.4-1-.7-1.8-.7-1.5 0-2.7 1.1-2.7 2.8s1.1 2.7 2.5 2.7c.8 0 1.5-.3 2-1l1.3 1.3z"/>
      </svg>
    )
  },
  {
    name: "Python",
    category: "Data & Systems",
    color: "#3776AB",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
        <path fill="#3776AB" d="M11.9 2c-5.1 0-4.8 2.2-4.8 2.2l.02 2.3h4.9v.7H5.2S2 7 2 12.1c0 5.2 2.8 5 2.8 5h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7.1 2.7-2.6V4.6S17 2 11.9 2zm-2.7 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"/>
        <path fill="#FFD43B" d="M12.1 22c5.1 0 4.8-2.2 4.8-2.2l-.02-2.3h-4.9v-.7h6.8s3.2.2 3.2-4.9c0-5.2-2.8-5-2.8-5h-1.7v2.4s.1 2.8-2.8 2.8H9.9s-2.7-.1-2.7 2.6v4.7s-.2 2.6 4.9 2.6zm2.7-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"/>
      </svg>
    )
  },
  {
    name: "SQL",
    category: "Data & Systems",
    color: "#00758F",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="#00758F">
        <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 6C7.58 8 4 6.66 4 6.5S7.58 5 12 5s8 1.16 8 1.5S16.42 8 12 8zm8 3.5c0 .16-3.58 1.5-8 1.5s-8-1.34-8-1.5V10c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-1.5zm0 5c0 .16-3.58 1.5-8 1.5s-8-1.34-8-1.5V15c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-1.5z"/>
      </svg>
    )
  },
  {
    name: "ElevenLabs",
    category: "AI & Autonomous Agents",
    color: "#111827",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 4h3v16H7V4zm7 0h3v16h-3V4z"/>
      </svg>
    )
  },
  {
    name: "Antigravity",
    category: "AI & Autonomous Agents",
    color: "#10B981",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="#10B981">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    )
  },
  {
    name: "Claude",
    category: "AI & Autonomous Agents",
    color: "#D97706",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="#D97706">
        <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"/>
        <circle cx="12" cy="10" r="1.5" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    name: "Cursor",
    category: "AI & Autonomous Agents",
    color: "#111827",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 19.5l9-3.5 9 3.5L12 2zm0 4.2l5.5 9.6-5.5-2.1-5.5 2.1L12 6.2z"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    category: "Cloud & Engineering",
    color: "#181717",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    )
  },
  {
    name: "Vercel",
    category: "Cloud & Engineering",
    color: "#000000",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L24 22H0L12 2Z"/>
      </svg>
    )
  },
  {
    name: "Gemini",
    category: "AI & Autonomous Agents",
    color: "#4E75FF",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
        <path fill="url(#gemini-grad-tool)" d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z"/>
        <defs>
          <linearGradient id="gemini-grad-tool" x1="2" y1="2" x2="22" y2="22">
            <stop offset="0%" stopColor="#4E75FF"/>
            <stop offset="50%" stopColor="#9B72CB"/>
            <stop offset="100%" stopColor="#D96570"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: "VS Code",
    category: "Cloud & Engineering",
    color: "#007ACC",
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="#007ACC">
        <path d="M17.8 2.1L12.5 7 8 3.5 2 7.7v8.6l6 4.2 4.5-3.5 5.3 4.9L22 20.3V3.7l-4.2-1.6zm-1.8 13.9l-4-3.5 4-3.5v7z"/>
      </svg>
    )
  }
];

// Scroll-triggered animation hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Marquee Tool Card Component
function ToolCard({ tool, isHovered, onHover, onLeave }: {
  tool: typeof TOOLS[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`flex-shrink-0 w-[180px] sm:w-[200px] p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[120px] relative overflow-hidden group cursor-pointer mx-2 ${
        isHovered
          ? "bg-white shadow-card -translate-y-2 scale-[1.05] z-10"
          : "bg-white/80 hover:bg-white border-slate-200/80 shadow-2xs"
      }`}
      style={{
        borderColor: isHovered ? tool.color : "rgba(226, 232, 240, 0.8)",
        boxShadow: isHovered ? `0 12px 35px -5px ${tool.color}30` : undefined
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="p-2 rounded-xl bg-white shadow-2xs border border-slate-100 group-hover:scale-110 transition-transform duration-300">
          {tool.icon}
        </div>
        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 text-charcoal-muted group-hover:bg-botanical-50 group-hover:text-botanical-800 transition-colors">
          {tool.category.split(" ")[0]}
        </span>
      </div>

      <div className="mt-3">
        <h4 className="text-sm font-bold text-charcoal-primary font-display flex items-center justify-between">
          <span>{tool.name}</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-botanical-600" />
        </h4>
        <p className="text-[10px] font-mono text-charcoal-muted truncate mt-0.5">
          {tool.category}
        </p>
      </div>

      {/* Dynamic brand accent strip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: tool.color }}
      />
    </div>
  );
}

export default function HowIThinkAndBuild({
  sportsResilience,
  intro,
  superpower,
  locations,
}: PhilosophyProps) {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  // Scroll animation refs
  const headerAnim = useScrollAnimation();
  const mindsetAnim = useScrollAnimation();
  const sportsAnim = useScrollAnimation();
  const toolkitAnim = useScrollAnimation();

  // Split all 15 tools into two rows for continuous dual-direction marquee
  const midPoint = Math.ceil(TOOLS.length / 2);
  const row1 = TOOLS.slice(0, midPoint);
  const row2 = TOOLS.slice(midPoint);

  // Duplicate arrays for seamless infinite looping
  const row1Loop = [...row1, ...row1, ...row1, ...row1];
  const row2Loop = [...row2, ...row2, ...row2, ...row2];

  return (
    <>
      {/* 1. How I Think, Learn & Execute — Clean White Canvas (NO GRID) */}
      <section id="philosophy" className="py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-slate-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Section Header */}
          <div
            ref={headerAnim.ref}
            className={`flex flex-col items-start max-w-3xl mb-8 lg:mb-10 transition-all duration-700 ${
              headerAnim.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-charcoal-primary shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-botanical-600" />
              <span>Operating DNA & Core Identity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-primary font-display mt-3">
              How I Think, Learn & Execute
            </h2>
            <p className="mt-3 text-base sm:text-lg text-charcoal-body leading-relaxed">
              Bridging Product Strategy, Operations & AI Execution — the resourceful mindset, competitive sports resilience, and modern technology stack driving high-velocity outcomes.
            </p>
          </div>

          {/* 2-Column Bento: Mindset & Narrative (Left) + Sports Resilience (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Card 1: Core Operating Mindset & Superpower (7 cols) — Scroll Animated */}
            <div
              ref={mindsetAnim.ref}
              className={`lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 flex flex-col justify-between border border-border-card shadow-xs relative overflow-hidden transition-all duration-700 hover:border-botanical-300 hover:shadow-card ${
                mindsetAnim.isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-botanical-700 font-semibold">
                    The Resourceful Problem-Solver
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-charcoal-body font-medium bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 text-botanical-600" />
                    <span>{locations.join(" • ")}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-primary font-display">
                  Building clean, practical solutions for messy and unstructured problems.
                </h3>

                <p className="text-base sm:text-lg text-charcoal-body leading-relaxed font-sans">
                  {intro}
                </p>

                {/* Superpower Callout Box */}
                <div className="p-5 rounded-2xl bg-white border-l-4 border-l-botanical-500 border border-botanical-200/80 shadow-2xs space-y-2 relative">
                  <div className="flex items-center gap-2 text-xs font-mono text-botanical-800 font-semibold uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-botanical-600 animate-pulse" />
                    <span>The Grounded Truth</span>
                  </div>
                  <p className="text-sm sm:text-base text-charcoal-primary leading-relaxed italic font-sans font-medium">
                    &ldquo;{superpower}&rdquo;
                  </p>
                </div>
              </div>

              {/* Operating Pillar Tokens */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs font-mono text-charcoal-body font-medium">
                  <span className="flex items-center gap-1 text-botanical-700 hover:scale-105 transition-transform cursor-default">
                    <Brain className="w-4 h-4 text-botanical-600" />
                    Human Intelligence
                  </span>
                  <span className="text-slate-300 font-bold">×</span>
                  <span className="flex items-center gap-1 text-charcoal-primary hover:scale-105 transition-transform cursor-default">
                    <Zap className="w-4 h-4 text-botanical-600" />
                    AI Execution
                  </span>
                </div>

                <div className="text-xs font-mono text-botanical-700 font-medium">
                  • First-Principles Breakdown • High Ownership
                </div>
              </div>
            </div>

            {/* Card 2: Athletic Resilience — Scroll Animated + Correct Aspect Ratio */}
            <div
              ref={sportsAnim.ref}
              className={`lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-border-card shadow-xs relative overflow-hidden group transition-all duration-700 hover:border-amber-300 hover:shadow-card ${
                sportsAnim.isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shadow-2xs">
                    <Trophy className="w-6 h-6 text-accent-amber" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-xs font-mono font-semibold text-amber-800 border border-amber-200">
                    {sportsResilience.achievement}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-charcoal-primary font-display">
                    {sportsResilience.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-charcoal-body leading-relaxed">
                  {sportsResilience.quote}
                </p>
              </div>

              {/* Framed Un-Cropped Portrait: aspect-[2/3] matches actual 682×1024 image ratio */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-card border-2 border-white bg-slate-100">
                  <Image
                    src={sportsResilience.photo}
                    alt="Table Tennis Championship Trophies"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 450px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-4 right-4 text-xs font-mono text-white font-medium drop-shadow-md flex items-center justify-between">
                    <span>ARDOR Table Tennis (TT) Champion</span>
                    <span>Reflexes & Composure</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Dynamic Operating Toolkit — Bold Architectural Blueprint Grid Section (HAS GRID) */}
      <section id="toolkit" className="py-12 md:py-16 bg-white bg-subtle-grid border-t border-border-subtle relative overflow-hidden">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div
            ref={toolkitAnim.ref}
            className={`rounded-3xl glass-card bg-white/95 backdrop-blur-md border border-border-card shadow-sm p-6 sm:p-10 relative overflow-hidden transition-all duration-700 ${
              toolkitAnim.isVisible ? "animate-fade-in-scale" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
          
          {/* Top Console Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-mono font-semibold text-charcoal-body">
                <Terminal className="w-3.5 h-3.5 text-botanical-600" />
                <span>Modern Operating Stack • 15 Verified Platforms</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-primary font-display mt-2.5">
                The Product & AI-Native Operating Toolkit
              </h3>
              <p className="text-sm sm:text-base text-charcoal-body mt-1">
                Hands-on execution across product roadmapping, data queries, modern LLMs, and high-velocity workflow automation.
              </p>
            </div>

            {/* Live Stack Status Indicator (Replaces category filter pills) */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-2xs shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-medium text-charcoal-body">
                Combined Operating Stack • All 15 Tools Active
              </span>
            </div>
          </div>

          {/* Continuous Marquee Ticker — Two Rows, Opposite Directions */}
          <div className="pt-8 space-y-5 marquee-container">
            
            {/* Row 1: Left scroll */}
            <div className="overflow-hidden relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee" style={{ width: "max-content" }}>
                {row1Loop.map((tool, i) => (
                  <ToolCard
                    key={`r1-${tool.name}-${i}`}
                    tool={tool}
                    isHovered={hoveredTool === tool.name}
                    onHover={() => setHoveredTool(tool.name)}
                    onLeave={() => setHoveredTool(null)}
                  />
                ))}
              </div>
            </div>

            {/* Row 2: Right scroll (reverse) */}
            <div className="overflow-hidden relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee-reverse" style={{ width: "max-content" }}>
                {row2Loop.map((tool, i) => (
                  <ToolCard
                    key={`r2-${tool.name}-${i}`}
                    tool={tool}
                    isHovered={hoveredTool === tool.name}
                    onHover={() => setHoveredTool(tool.name)}
                    onLeave={() => setHoveredTool(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
}
