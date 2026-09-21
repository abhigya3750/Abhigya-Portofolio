"use client";

import React from "react";
import Image from "next/image";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { WorkRole } from "@/types/portfolio";

interface ExperienceProps {
  experience: WorkRole[];
}

export default function ExperienceTimeline({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 md:py-32 bg-white bg-subtle-grid relative">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-xs font-mono font-medium text-botanical-800">
            <Briefcase className="w-3.5 h-3.5 text-botanical-600" />
            <span>Verified Track Record</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-primary font-display mt-3">
            Work Experience & Leadership
          </h1>
          <p className="mt-3 text-base sm:text-lg text-charcoal-body leading-relaxed">
            Hands-on operational outcomes across automated AI bidding tools, enterprise payment reconciliation, and university startup incubation.
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-12">
          {experience.map((role) => (
            <div
              key={role.id}
              className="glass-card rounded-3xl p-7 sm:p-10 border border-border-card shadow-xs transition-all duration-300 hover:border-botanical-400 hover:shadow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Role Info & Metadata (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 p-1.5 relative shadow-2xs overflow-hidden shrink-0 flex items-center justify-center">
                      <Image
                        src={role.logo}
                        alt={role.company}
                        width={48}
                        height={48}
                        className="object-contain rounded-xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-charcoal-primary font-display">
                        {role.company}
                      </h3>
                      <div className="text-sm font-semibold text-botanical-700">
                        {role.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-charcoal-muted pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-botanical-600" />
                      {role.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-botanical-600" />
                      {role.location}
                    </span>
                  </div>

                  <p className="text-sm text-charcoal-body leading-relaxed pt-1">
                    {role.description}
                  </p>

                  {/* Skills tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[11px] font-mono text-charcoal-body font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Key Deliverables & Authentic Photos (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Highlights Bullet List */}
                  <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <span className="text-xs font-mono uppercase tracking-wider text-charcoal-muted font-semibold block mb-3">
                      Key Highlights & Deliverables:
                    </span>
                    <ul className="space-y-3">
                      {role.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-sm text-charcoal-body leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-botanical-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Authentic Real Photos if available */}
                  {role.photos && role.photos.length > 0 && (
                    <div className="pt-2">
                      <span className="text-xs font-mono text-charcoal-muted block mb-3">
                        Authentic On-Site Moments:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {role.photos.map((photo, pIdx) => {
                          // Detect portrait images by URL pattern
                          const isPortrait = /tapits-photo|headshot|hero-main|tapits-office/i.test(photo.url);
                          return (
                            <div
                              key={pIdx}
                              className={`relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xs group ${
                                isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
                              }`}
                            >
                              <Image
                                src={photo.url}
                                alt={photo.caption}
                                fill
                                className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                                  isPortrait ? "object-top" : "object-center"
                                }`}
                                sizes="(max-width: 768px) 100vw, 350px"
                              />
                              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3 text-white">
                                <span className="text-xs font-medium font-sans">
                                  {photo.caption}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
