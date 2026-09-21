"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, FileText } from "lucide-react";

interface HeaderProps {
  statusBadge: string;
  signatureLogo: string;
  resumeUrl: string;
}

export default function Header({ statusBadge, signatureLogo, resumeUrl }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  const handleBackdropClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Overview", href: "/", isHash: false },
    { label: "Experience", href: "/experience", isHash: false },
    { label: "Product Teardowns", href: "/teardowns", isHash: false },
    { label: "Gallery", href: "/gallery", isHash: false },
    { label: "Let's Connect", href: "#contact", isHash: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (isHash) {
      e.preventDefault();
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/#contact`;
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? "backdrop-visible" : ""}`}
        onClick={handleBackdropClick}
        style={{ top: headerRef.current?.offsetHeight || 0 }}
      />

      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2 sm:py-2.5"
            : "bg-white/80 backdrop-blur-xs py-3.5 sm:py-4"
        }`}
      >
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          
          {/* Left: Authentic Luxury Signature Mark - Prominent & Hand-Drawn */}
          <Link href="/" className="group flex items-center shrink-0">
            <div className="relative h-14 sm:h-18 md:h-22 w-52 sm:w-68 md:w-84 transition-transform duration-200 group-hover:scale-[1.03]">
              <Image
                src={signatureLogo}
                alt="Abhigya Kanungo Signature"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-charcoal-body">
            {navLinks.map((link) => {
              const isActive = !link.isHash && pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isHash)}
                  className={`transition-colors duration-150 relative py-1 hover:text-botanical-700 ${
                    isActive
                      ? "text-botanical-800 font-semibold after:w-full after:h-0.5 after:bg-botanical-600 after:absolute after:bottom-0 after:left-0"
                      : "hover:after:w-full after:w-0 after:h-0.5 after:bg-botanical-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Available Status Badge & Resume CTA */}
          <div className="hidden md:flex items-center gap-3.5">
            <div className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-xs font-mono font-medium text-botanical-800 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-emerald-pulse absolute inline-flex h-full w-full rounded-full bg-botanical-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-botanical-600"></span>
              </span>
              <span>{statusBadge}</span>
            </div>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-botanical-600 hover:bg-botanical-700 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile: Resume + Animated Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-botanical-600 text-white text-xs font-semibold"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>

            {/* Animated Hamburger → X Morph */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative p-2.5 flex flex-col items-center justify-center gap-[5px] focus:outline-none cursor-pointer ${
                mobileMenuOpen ? "hamburger-open" : ""
              }`}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
        </div>

        {/* Mobile Drawer — Smooth Slide Transition */}
        <div
          className={`mobile-drawer md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 ${
            mobileMenuOpen ? "drawer-open" : ""
          }`}
        >
          <div className="px-6 py-5 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href, link.isHash);
                    if (!link.isHash) setMobileMenuOpen(false);
                  }}
                  className={`drawer-link text-base font-medium py-2 px-1 rounded-lg transition-colors ${
                    !link.isHash && pathname === link.href
                      ? "text-botanical-700 font-semibold bg-botanical-50/50"
                      : "text-charcoal-primary hover:text-botanical-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-link w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-botanical-600 text-white text-sm font-medium hover:bg-botanical-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Open Resume Folder</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
