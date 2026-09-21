"use client";

import React, { useState } from "react";
import Image from "next/image";
import portfolioData from "@/data/portfolio-data.json";
import { PortfolioData } from "@/types/portfolio";
import Header from "@/components/Header";
import CredentialsFooter from "@/components/CredentialsFooter";
import { 
  Camera, 
  MapPin, 
  Calendar, 
  X, 
  Maximize2
} from "lucide-react";

const data = portfolioData as unknown as PortfolioData;

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  date: string;
  url: string;
  caption: string;
  /** Native image dimensions for correct aspect ratio */
  nativeWidth: number;
  nativeHeight: number;
  badge: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "perfios-summit",
    title: "Global Fintech Fest 2026 — Mumbai",
    location: "Mumbai, MH",
    date: "2026",
    url: "/assets/images/abhigya-hero-main.jpg",
    caption: "Representing enterprise software requirements and engaging with fintech leaders at the Global Fintech Fest.",
    nativeWidth: 768,
    nativeHeight: 1024,
    badge: "Industry Summit"
  },
  {
    id: "tapits-office",
    title: "Tapits Technology #Fingpay headquarters",
    location: "Indore, MP",
    date: "2025",
    url: "/assets/images/abhigya-tapits-office.jpg",
    caption: "On the ground driving digital payment collections, merchant QR deployments, and enterprise reconciliation workflows.",
    nativeWidth: 768,
    nativeHeight: 1024,
    badge: "Fintech Ops"
  },
  {
    id: "fingpay-team",
    title: "Fingpay team",
    location: "Indore, MP",
    date: "2025",
    url: "/assets/images/fingpay-team-group.jpg",
    caption: "Collaborating with cross-functional operations and engineering teammates to automate partner ERP payment reconciliation.",
    nativeWidth: 1024,
    nativeHeight: 768,
    badge: "Core Operations Team"
  },
  {
    id: "edc-leadership",
    title: "E-Cell Leadership",
    location: "Indore, MP",
    date: "2024 – 2025",
    url: "/assets/images/edc-team-shirts.jpg",
    caption: "Leading the Entrepreneurship Cell cohort, incubating student-led startups and organizing campus venture summits.",
    nativeWidth: 1024,
    nativeHeight: 755,
    badge: "Student Incubation"
  },
  {
    id: "table-tennis-championship",
    title: "ARDOR 2024 Champion & 2025 Runner-Up",
    location: "Indore, MP",
    date: "2024 – 2025",
    url: "/assets/images/table-tennis-trophy.jpg",
    caption: "Competitive table tennis training: fast strategic reflexes, composure under high pressure, and relentless execution.",
    nativeWidth: 682,
    nativeHeight: 1024,
    badge: "Sports Resilience"
  }
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <main className="relative min-h-screen bg-white pt-16">
      <Header
        statusBadge={data.profile.statusBadge}
        signatureLogo={data.profile.signatureEmerald}
        resumeUrl={data.profile.verifiedLinks.resumeFolder}
      />

      <section className="py-20 md:py-28 bg-canvas-slate bg-subtle-grid border-b border-border-subtle relative overflow-hidden">
        {/* Background ambient gradient */}
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[400px] bg-botanical-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Gallery Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200/80">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-xs font-mono font-medium text-botanical-800">
                <Camera className="w-3.5 h-3.5 text-botanical-600" />
                <span>Visual Archive & Field Moments</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-primary font-display mt-3">
                Operating in the Field: Gallery
              </h1>
              <p className="mt-3 text-base sm:text-lg text-charcoal-body leading-relaxed">
                An authentic visual record of fintech operations, industry summits, team leadership, and competitive athletic championships.
              </p>
            </div>

            {/* Archive Count Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-2xs shrink-0 text-xs font-mono text-charcoal-body font-medium">
              <span className="w-2 h-2 rounded-full bg-botanical-600" />
              <span>{GALLERY_ITEMS.length} Verified Field Moments</span>
            </div>
          </div>

          {/* Masonry-Style Photo Grid — Native Aspect Ratios */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
            {GALLERY_ITEMS.map((item) => {
              const isPortrait = item.nativeHeight > item.nativeWidth;
              const aspectRatio = `${item.nativeWidth} / ${item.nativeHeight}`;
              
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group break-inside-avoid glass-card rounded-3xl overflow-hidden border border-border-card hover:border-botanical-400 shadow-xs hover:shadow-card transition-all duration-300 cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  {/* Media Image Frame — Native Aspect Ratio */}
                  <div 
                    className="relative w-full bg-slate-100 overflow-hidden"
                    style={{ aspectRatio }}
                  >
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className={`transition-transform duration-700 group-hover:scale-105 ${
                        isPortrait ? "object-cover object-top" : "object-cover object-center"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-semibold text-charcoal-primary border border-white/50 shadow-2xs">
                        {item.badge}
                      </span>
                    </div>

                    {/* Bottom Text Over Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <h3 className="text-lg font-bold font-display drop-shadow-sm">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-200 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-botanical-400" />
                          {item.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-botanical-400" />
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/80 backdrop-blur-md text-charcoal-primary shadow-xs">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Lightbox Modal — Pristine Full Image Viewer */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-200/80 shadow-md transition-all duration-200 hover:scale-105 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Frame — Clean light blueprint grid matching portfolio color coordination */}
            <div className="relative w-full bg-slate-50 bg-subtle-grid border-b border-slate-100 flex items-center justify-center p-4 overflow-hidden" style={{
              aspectRatio: `${selectedItem.nativeWidth} / ${selectedItem.nativeHeight}`,
              maxHeight: "72vh"
            }}>
              <Image
                src={selectedItem.url}
                alt={selectedItem.title}
                fill
                className="object-contain p-2 drop-shadow-md"
                priority
              />
            </div>

            {/* Modal Footer & Details */}
            <div className="p-6 sm:p-8 bg-white space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-botanical-50 text-xs font-mono font-semibold text-botanical-800 border border-botanical-200">
                  {selectedItem.badge}
                </span>
                <div className="flex items-center gap-4 text-xs font-mono text-charcoal-muted">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-botanical-600" />
                    {selectedItem.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-botanical-600" />
                    {selectedItem.date}
                  </span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-charcoal-primary font-display">
                {selectedItem.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* Footer Reach-out Hub */}
      <CredentialsFooter
        showCertifications={false}
        profile={{
          name: data.profile.name,
          signatureLogo: data.profile.signatureEmerald,
          locations: data.profile.locations,
          verifiedLinks: data.profile.verifiedLinks,
        }}
      />
    </main>
  );
}
