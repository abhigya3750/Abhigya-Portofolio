"use client";

import React from "react";
import Image from "next/image";
import { 
  Award, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  MapPin, 
  ArrowUp,
  Phone,
  FolderLock
} from "lucide-react";
import { Certification } from "@/types/portfolio";

interface FooterProps {
  certifications?: Certification[];
  showCertifications?: boolean;
  profile: {
    name: string;
    signatureLogo: string;
    locations: string[];
    verifiedLinks: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
      notion?: string;
      resumeFolder: string;
      certificationsFolder: string;
    };
  };
}

export default function CredentialsFooter({
  certifications = [],
  showCertifications = false,
  profile,
}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-white bg-subtle-grid border-t border-border-subtle pt-20 pb-14 relative">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Optional Certifications Section (Only on Experience page) */}
        {showCertifications && certifications.length > 0 && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-xs font-mono font-medium text-botanical-800">
                  <Award className="w-3.5 h-3.5 text-botanical-600" />
                  <span>Verified Credentials</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-primary font-display mt-2">
                  PMI® Registered & Product Certifications
                </h3>
              </div>

              <a
                href={profile.verifiedLinks.certificationsFolder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-botanical-400 text-xs font-mono font-medium text-charcoal-body hover:text-botanical-700 shadow-2xs transition-colors"
              >
                <FolderLock className="w-3.5 h-3.5 text-botanical-600" />
                <span>Open Google Drive Certifications Hub</span>
                <ExternalLink className="w-3 h-3 text-charcoal-muted" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-border-card hover:border-botanical-400 transition-all duration-200 shadow-2xs hover:shadow-card flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-md bg-botanical-50 text-[10px] font-mono font-semibold text-botanical-800 border border-botanical-200">
                        {cert.credentialBadge}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-charcoal-muted group-hover:text-botanical-600 transition-colors" />
                    </div>
                    <h4 className="text-sm font-bold text-charcoal-primary font-display group-hover:text-botanical-700 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-charcoal-muted mt-1.5">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-[11px] font-mono text-charcoal-muted">
                    <span>Issued</span>
                    <span className="font-medium text-charcoal-body">{cert.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Operating Reach-out Hub (Email & LinkedIn Only) */}
        <div className="p-8 sm:p-14 rounded-3xl glass-card bg-white/95 backdrop-blur-md border border-border-card shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-botanical-700 font-semibold">
                Start a Conversation
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-charcoal-primary font-display tracking-tight">
                Building Something Ambitious? Let&apos;s Talk.
              </h2>
              <p className="text-base sm:text-lg text-charcoal-body leading-relaxed max-w-2xl font-sans">
                Always open to meaningful conversations, collaboration, and opportunities to build, learn, and contribute together.
              </p>
            </div>

            {/* Right CTAs: Email & LinkedIn Only */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3.5 justify-end">
              <a
                href={`mailto:${profile.verifiedLinks.email}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-botanical-600 hover:bg-botanical-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow"
              >
                <Mail className="w-4 h-4" />
                <span>Email Abhigya Directly</span>
              </a>

              <a
                href={profile.verifiedLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-charcoal-primary font-medium text-sm sm:text-base transition-all duration-200 border border-slate-200"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

          </div>
        </div>

        {/* Footer Sub-Bar / Bottom Tab (Enlarged Signature, Clean Spacing & Contacts) */}
        <div className="pt-10 border-t-2 border-slate-300/90 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Prominent Authentic Hand-Drawn Signature & Location Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="relative h-16 sm:h-20 md:h-24 w-56 sm:w-68 md:w-84 shrink-0">
              <Image
                src={profile.signatureLogo}
                alt={profile.name}
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-mono text-charcoal-body font-medium shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-botanical-600 shrink-0" />
              <span>{profile.locations.join(" • ")}</span>
            </div>
          </div>

          {/* Right: Contact Information (Phone, Email, LinkedIn, GitHub - No Notion) */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-charcoal-body">
            <a
              href={`tel:${profile.verifiedLinks.phone}`}
              className="hover:text-botanical-700 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-4 h-4 text-botanical-600" />
              <span>{profile.verifiedLinks.phone}</span>
            </a>

            <a
              href={`mailto:${profile.verifiedLinks.email}`}
              className="hover:text-botanical-700 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Mail className="w-4 h-4 text-botanical-600" />
              <span>{profile.verifiedLinks.email}</span>
            </a>

            <a
              href={profile.verifiedLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-botanical-700 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.verifiedLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-botanical-700 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-charcoal-body hover:text-botanical-700 transition-colors shadow-2xs cursor-pointer ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 text-center sm:text-left text-xs font-mono text-charcoal-muted">
          <p>© 2026 Abhigya Kanungo. Built with Next.js, Tailwind CSS & Human Intelligence × AI Execution.</p>
        </div>

      </div>
    </footer>
  );
}
