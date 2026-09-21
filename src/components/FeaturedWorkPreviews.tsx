"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Bike, 
  Briefcase, 
  FlaskConical, 
  ArrowRight, 
  ExternalLink, 
  Bot, 
  CreditCard, 
  MessageSquare,
  Sparkles,
  Calendar
} from "lucide-react";
import { FlagshipProject, WorkRole, ProductTeardown } from "@/types/portfolio";

interface PreviewsProps {
  flagship: FlagshipProject;
  experience: WorkRole[];
  teardowns: ProductTeardown[];
}

export default function FeaturedWorkPreviews({
  flagship,
  experience,
  teardowns,
}: PreviewsProps) {
  return (
    <>
      {/* 1. Flagship Deep-Dive Preview (Rapido Bikepool) — Clean White Canvas (NO GRID) */}
      <section className="py-10 md:py-14 bg-white relative">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div id="rapido-preview" className="scroll-mt-28 glass-card bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 border border-border-card shadow-sm hover:border-[#FFD600]/80 transition-all duration-300 relative overflow-hidden">
            {/* Rapido brand yellow & environmental ambient glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFD600]/25 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-4xl space-y-5">
              {/* Rapido Logo & Badge Row */}
              <div className="flex flex-wrap items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD600] p-1.5 shadow-2xs border border-amber-300 flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src="/assets/images/rapido-official-logo.jpg"
                    alt="Rapido Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-xl"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD600]/20 border border-[#FFD600]/60 text-xs font-mono font-semibold text-slate-900">
                  <Bike className="w-3.5 h-3.5 text-amber-700" />
                  <span>Flagship Product Architecture & Mobility UX</span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-300/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  Interactive Telemetry Simulator Live
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-primary font-display leading-[1.15]">
                {flagship.title}
              </h2>

              <p className="text-base sm:text-lg text-charcoal-body leading-relaxed font-sans max-w-3xl">
                {flagship.tagline}
              </p>

              {/* Key Impact Metrics Grid with subtle amber accents */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 max-w-3xl">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-300 transition-colors">
                  <div className="text-xs font-mono text-charcoal-muted">Passenger Walking Radius</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-charcoal-primary mt-1">80m – 120m</div>
                  <div className="text-[11px] text-charcoal-muted mt-0.5">Zero-detour highway pickup</div>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-300 transition-colors">
                  <div className="text-xs font-mono text-charcoal-muted">Commuter Fuel Split</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-amber-700 mt-1">₹35 – ₹52</div>
                  <div className="text-[11px] text-charcoal-muted mt-0.5">Per-trip peer cost recovery</div>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-300 transition-colors">
                  <div className="text-xs font-mono text-charcoal-muted">Corridor Cab Savings</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-amber-800 mt-1">Up to 85%</div>
                  <div className="text-[11px] text-charcoal-muted mt-0.5">Compared to commercial cabs</div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/teardowns#rapido"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFD600] hover:bg-[#F5CC00] text-slate-950 font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>Explore Rapido Deck in Product Teardowns</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {flagship.liveUrl && (
                  <a
                    href={flagship.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-charcoal-primary font-medium text-sm sm:text-base transition-colors shadow-2xs"
                  >
                    <span>Launch Live Prototype</span>
                    <ExternalLink className="w-4 h-4 text-charcoal-muted" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Work Experience & Leadership Preview — Bold Architectural Blueprint Grid (HAS GRID) */}
      <section className="py-10 md:py-14 bg-white bg-subtle-grid border-t border-border-subtle relative">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="glass-card bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 border border-border-card shadow-sm hover:border-botanical-300 transition-all duration-300 relative">
            
            {/* Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-100">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-xs font-mono font-medium text-botanical-800">
                  <Briefcase className="w-3.5 h-3.5 text-botanical-600" />
                  <span>Verified Industry Track Record</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-primary font-display leading-tight">
                  Work Experience & Leadership
                </h2>

                <p className="text-base sm:text-lg text-charcoal-body leading-relaxed font-sans">
                  Proven operational impact across automated AI bidding tools, enterprise payment reconciliation, and university startup incubation.
                </p>
              </div>

              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-charcoal-primary hover:bg-botanical-700 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 shrink-0"
              >
                <span>View Full Experience & Photos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* De-congested 3-Column Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {experience.map((role) => (
                <Link
                  key={role.id}
                  href="/experience"
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-botanical-300 transition-all duration-200 flex flex-col justify-between group shadow-2xs hover:shadow-card cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 text-charcoal-body border border-slate-200 font-medium">
                        {role.period}
                      </span>
                      <span className="text-xs font-mono text-botanical-700 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                        Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-charcoal-primary font-display group-hover:text-botanical-700 transition-colors">
                        {role.company}
                      </h3>
                      <p className="text-sm font-semibold text-botanical-700 font-mono mt-0.5">
                        {role.title}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-body leading-relaxed font-sans line-clamp-3">
                      {role.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {role.skills.slice(0, 3).map((skill: string, i: number) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-50 text-charcoal-muted border border-slate-200/60">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Teardown Lab Preview — Clean White Canvas (NO GRID) */}
      <section className="py-10 md:py-14 bg-white border-t border-border-subtle relative">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="glass-card bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 border border-border-card shadow-sm hover:border-botanical-300 transition-all duration-300 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-xs font-mono font-medium text-botanical-800 mb-3">
                  <FlaskConical className="w-3.5 h-3.5 text-botanical-600" />
                  <span>Product Teardown Lab</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-primary font-display">
                  Strategic Product Deconstructions
                </h2>
                <p className="text-sm sm:text-base text-charcoal-body mt-1 max-w-2xl">
                  Spotting broken friction points across modern software and architecting first-principles product solutions.
                </p>
              </div>

              <Link
                href="/teardowns"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-botanical-600 hover:bg-botanical-700 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow shrink-0"
              >
                <span>Explore All 3 Teardowns</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {teardowns.map((td, i) => (
                <Link
                  key={td.id}
                  href={`/teardowns#${td.id}`}
                  className="p-6 rounded-2xl bg-canvas-slate border border-border-subtle hover:border-botanical-400 hover:bg-white transition-all duration-200 group flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-charcoal-muted">
                        {td.tag}
                      </span>
                      <span className="text-xs font-mono text-botanical-600 font-bold">0{i + 1}</span>
                    </div>
                    <h4 className="text-base font-bold text-charcoal-primary font-display group-hover:text-botanical-700 transition-colors mb-2">
                      {td.title}
                    </h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3">
                      {td.problemStatement}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-botanical-700 font-medium">
                    <span>View Solution Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
