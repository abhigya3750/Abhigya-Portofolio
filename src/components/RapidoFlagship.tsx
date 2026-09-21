"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Bike, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  Milestone, 
  Check, 
  Scale, 
  Navigation, 
  Fuel, 
  Users, 
  Leaf,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { FlagshipProject } from "@/types/portfolio";

interface RapidoFlagshipProps {
  project: FlagshipProject;
}

export default function RapidoFlagship({ project }: RapidoFlagshipProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const totalSlides = project.slideGallery.length;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
  };

  const getInnovationIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-5 h-5 text-botanical-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-pink-600" />;
      case "Milestone":
        return <Milestone className="w-5 h-5 text-accent-cyan" />;
      default:
        return <Clock className="w-5 h-5 text-botanical-600" />;
    }
  };

  return (
    <section id="rapido" className="py-20 md:py-32 bg-white bg-subtle-grid relative overflow-hidden scroll-mt-24">
      {/* Background soft gradients */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-botanical-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* 2-Column Split: Product Spec & Hook (Left) + Interactive Slide Deck Viewer (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left Column: Core Positioning, Hook & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
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
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-charcoal-primary font-display leading-[1.12]">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-charcoal-body font-sans leading-relaxed">
              {project.tagline}
            </p>

            {/* LinkedIn Hook Quote Box */}
            <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/90 text-sm text-charcoal-body italic leading-relaxed shadow-2xs">
              &ldquo;{project.linkedinHook}&rdquo;
            </div>

            {/* CTAs & Simulator Actions — Pure Rapido Yellow & Charcoal */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFD600] hover:bg-[#F5CC00] text-slate-950 font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
                >
                  <span>Launch Live Simulator</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <Link
                href="/rapido"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-charcoal-primary font-medium text-sm sm:text-base transition-colors shadow-2xs"
              >
                <span>Full Case Study Architecture</span>
                <ChevronRight className="w-4 h-4 text-charcoal-muted" />
              </Link>
            </div>

            {/* Core Impact Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2 w-full max-w-xl">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-mono text-charcoal-muted">Passenger Walk</div>
                <div className="text-sm sm:text-base font-bold font-mono text-charcoal-primary mt-0.5">80m – 120m</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-mono text-charcoal-muted">Fuel Split</div>
                <div className="text-sm sm:text-base font-bold font-mono text-amber-700 mt-0.5">₹35 – ₹52</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-mono text-charcoal-muted">Highway Savings</div>
                <div className="text-sm sm:text-base font-bold font-mono text-charcoal-primary mt-0.5">Up to 85%</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 5-Slide Deck Viewer with Exact 2:3 Aspect Ratio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm sm:max-w-md">
              {/* Header Badge over Deck */}
              <div className="flex items-center justify-between gap-2 mb-3 px-1 text-xs font-mono text-charcoal-muted">
                <span className="font-semibold text-charcoal-primary">5-Slide Case Study Deck</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 font-semibold text-amber-800 shadow-2xs">
                  Slide {activeSlide + 1} of {totalSlides}
                </span>
              </div>

              {/* Deck Viewer Box — Aspect Ratio matches portrait 1024x1536 slides cleanly */}
              <div 
                className="relative aspect-[2/3] w-full rounded-3xl overflow-hidden border-2 border-slate-200 shadow-card bg-slate-900 group select-none"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Slide Image */}
                <Image
                  src={project.slideGallery[activeSlide].url}
                  alt={project.slideGallery[activeSlide].title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                />

                {/* Floating Prev Button */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-charcoal-primary shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20 focus:outline-none"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Floating Next Button */}
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-charcoal-primary shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20 focus:outline-none"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Caption Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-white flex flex-col gap-2 z-10">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold font-display line-clamp-1">
                      {project.slideGallery[activeSlide].title}
                    </p>
                    <p className="text-[11px] text-slate-300 line-clamp-1">
                      {project.slideGallery[activeSlide].caption}
                    </p>
                  </div>

                  {/* Slide Dots Indicator */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                      {project.slideGallery.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setActiveSlide(dotIdx)}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            dotIdx === activeSlide
                              ? "w-5 bg-botanical-400"
                              : "w-1.5 bg-white/40 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-slate-300">Swipe or click</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Social Motivations Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {project.socialMotivations.map((mot, idx) => (
            <div
              key={mot.title}
              className="p-6 rounded-2xl bg-canvas-slate border border-border-subtle hover:border-botanical-300 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                {idx === 0 && <Fuel className="w-5 h-5 text-amber-600" />}
                {idx === 1 && <Users className="w-5 h-5 text-botanical-600" />}
                {idx === 2 && <Leaf className="w-5 h-5 text-emerald-600" />}
              </div>
              <h4 className="text-base font-bold text-charcoal-primary font-display mb-1.5">
                {mot.title}
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {mot.description}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Core Product Innovations Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-botanical-700 font-semibold">
              Engineered Product Mechanisms
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-primary font-display mt-1">
              3 Core Product Innovations Built for RidePool
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {project.coreInnovations.map((inn) => (
              <div
                key={inn.id}
                className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                    {getInnovationIcon(inn.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-charcoal-primary font-display">
                    {inn.title}
                  </h4>
                  <p className="text-xs font-mono text-botanical-700 font-medium mt-1 mb-4">
                    {inn.tagline}
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-body">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-botanical-600 mt-0.5 shrink-0" />
                      <span>{inn.bullet1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-botanical-600 mt-0.5 shrink-0" />
                      <span>{inn.bullet2}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-charcoal-muted">
                    Live Corridor Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zero-Detour SLA & Regulatory Compliance Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Zero Detour Mechanism (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900 text-white shadow-card flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-400 mb-4">
                <Navigation className="w-3.5 h-3.5" />
                <span>Zero-Detour Mechanism & SLA</span>
              </div>
              <h4 className="text-2xl font-bold font-display tracking-tight text-white mb-3">
                &ldquo;{project.zeroDetourMechanism.rule}&rdquo;
              </h4>
              
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                {project.zeroDetourMechanism.details.map((det) => (
                  <li key={det} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{det}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SLA Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
              {project.zeroDetourMechanism.slaMetrics.map((sla) => (
                <div key={sla.label} className="p-3 rounded-xl bg-white/5">
                  <div className="text-xs font-mono text-slate-400">
                    {sla.label}
                  </div>
                  <div className="text-base font-bold font-mono text-emerald-400 mt-1">
                    {sla.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Compliance (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-canvas-slate border border-border-subtle flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-botanical-50 border border-botanical-200 flex items-center justify-center mb-5">
                <Scale className="w-5 h-5 text-botanical-700" />
              </div>
              <h4 className="text-xl font-bold text-charcoal-primary font-display mb-3">
                {project.regulatoryFeasibility.status}
              </h4>
              <p className="text-sm text-charcoal-body leading-relaxed">
                {project.regulatoryFeasibility.details}
              </p>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 text-xs font-mono text-emerald-900 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Zero Yellow-Plate commercial requirement for peer cost sharing</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
