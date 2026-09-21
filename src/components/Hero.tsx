"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowDown, 
  Linkedin, 
  Github, 
  Mail, 
  FileText, 
  Sparkles,
  ExternalLink 
} from "lucide-react";

interface HeroProps {
  name: string;
  persona: string;
  tagline: string;
  heroImage: string;
  links: {
    email: string;
    linkedin: string;
    github: string;
    notion?: string;
    resumeFolder: string;
    previousPortfolio?: string;
  };
}

export default function Hero({
  name,
  persona,
  tagline,
  heroImage,
  links,
}: HeroProps) {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-subtle-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-botanical-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-slate-100/80 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">
          
          {/* Left Column: Clean, Punchy Executive Tagline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 xl:space-y-9">
            
            {/* Persona Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-botanical-50 border border-botanical-200 shadow-xs">
              <Sparkles className="w-4 h-4 text-botanical-600" />
              <span className="text-xs sm:text-sm font-mono font-medium text-botanical-800 tracking-wide">
                {persona}
              </span>
            </div>

            {/* Main Punchy Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-charcoal-primary font-display leading-[1.12]">
              {tagline}
            </h1>

            {/* CTAs and Verified Social Row (LinkedIn & Mail Only) */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#rapido-preview"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-botanical-600 hover:bg-botanical-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore Rapido Bikepool</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={links.resumeFolder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-charcoal-primary border border-slate-200 font-medium text-sm sm:text-base transition-all duration-200 shadow-2xs hover:border-slate-300"
              >
                <FileText className="w-4 h-4 text-botanical-600" />
                <span>Resume Folder</span>
                <ExternalLink className="w-3.5 h-3.5 text-charcoal-muted" />
              </a>

              {/* Social Channels: LinkedIn & Mail Only */}
              <div className="flex items-center gap-3 sm:pl-2">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 rounded-full bg-white hover:bg-slate-100 text-charcoal-body hover:text-botanical-700 border border-slate-200 transition-colors shadow-2xs"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                </a>
                <a
                  href={`mailto:${links.email}`}
                  aria-label="Email Directly"
                  className="p-3.5 rounded-full bg-white hover:bg-slate-100 text-charcoal-body hover:text-botanical-700 border border-slate-200 transition-colors shadow-2xs"
                >
                  <Mail className="w-4 h-4 text-botanical-600" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Architectural Portrait - Scaled for Wide Screen (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[4/5] rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-100 group">
              <Image
                src={heroImage}
                alt={name}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
