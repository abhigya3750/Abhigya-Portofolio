"use client";

import React from "react";
import { User, MapPin, Zap, Brain, Shield } from "lucide-react";

interface AboutProps {
  intro: string;
  superpower: string;
  locations: string[];
}

export default function AboutSuperpower({
  intro,
  superpower,
  locations,
}: AboutProps) {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-xs font-mono font-medium text-botanical-800">
            <User className="w-3.5 h-3.5 text-botanical-600" />
            <span>Core Operating Identity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-primary font-display mt-3">
            Bridging Product, Operations & AI Execution
          </h2>
        </div>

        {/* 2-Column Editorial Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: The Personal Story & Locations (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-canvas-slate border border-border-subtle flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal-primary font-display">
                Building practical solutions for messy problems.
              </h3>
              <p className="text-base sm:text-lg text-charcoal-body leading-relaxed font-sans">
                {intro}
              </p>
            </div>

            {/* Operating Badges & Location */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-charcoal-body font-medium bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-botanical-600" />
                <span>{locations.join(" • ")}</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-charcoal-muted">
                <span className="flex items-center gap-1">
                  <Brain className="w-3.5 h-3.5 text-botanical-600" />
                  Human Intel
                </span>
                <span>×</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-botanical-600" />
                  AI Execution
                </span>
              </div>
            </div>
          </div>

          {/* Right: The Superpower Statement (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-botanical-50/70 via-white to-emerald-50/30 border-2 border-botanical-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-botanical-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-botanical-300 text-xs font-mono font-semibold text-botanical-800 shadow-2xs">
                <Shield className="w-3.5 h-3.5 text-botanical-600" />
                <span>The Superpower Mandate</span>
              </div>

              <blockquote className="text-base sm:text-lg text-charcoal-primary leading-relaxed font-sans italic pt-1">
                &ldquo;{superpower}&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between text-xs font-mono text-botanical-800 font-medium">
              <span>First-Principles • High Velocity • Calm Under Pressure</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
