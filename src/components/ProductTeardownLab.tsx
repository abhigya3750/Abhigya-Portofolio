"use client";

import React from "react";
import { 
  FlaskConical, 
  Bot, 
  CreditCard, 
  MessageSquare, 
  ArrowUpRight, 
  Sparkles,
  ShieldAlert,
  Clock 
} from "lucide-react";
import { ProductTeardown } from "@/types/portfolio";

interface TeardownLabProps {
  teardowns: ProductTeardown[];
}

export default function ProductTeardownLab({ teardowns }: TeardownLabProps) {
  const getTeardownIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-5 h-5 text-botanical-600" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5 text-accent-cyan" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-accent-amber" />;
      default:
        return <FlaskConical className="w-5 h-5 text-botanical-600" />;
    }
  };

  return (
    <section id="teardowns-list" className="py-20 md:py-28 bg-canvas-slate border-t border-border-subtle relative">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-xs font-mono font-medium text-botanical-800">
            <FlaskConical className="w-3.5 h-3.5 text-botanical-600" />
            <span>Product Teardown Lab</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-primary font-display mt-3">
            Strategic Product Deconstructions
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-charcoal-body leading-relaxed">
            Spotting broken friction points across modern software and architecting first-principles product solutions.
          </p>
        </div>

        {/* Teardowns 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teardowns.map((td) => (
            <div
              key={td.id}
              id={td.id}
              className="scroll-mt-32 glass-card glass-card-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {getTeardownIcon(td.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-mono text-charcoal-muted font-medium">
                    {td.tag}
                  </span>
                </div>

                {/* Title & Hook */}
                <h3 className="text-xl font-bold text-charcoal-primary font-display mb-3">
                  {td.title}
                </h3>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-5 text-xs text-charcoal-body italic leading-relaxed">
                  &ldquo;{td.hook}&rdquo;
                </div>

                {/* Problem */}
                <div className="mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-semibold block mb-1.5 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>The Broken Friction</span>
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal-body leading-relaxed">
                    {td.problemStatement}
                  </p>
                </div>

                {/* Solution Architecture */}
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-botanical-700 font-semibold block mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Product Architecture</span>
                  </span>
                  <ul className="space-y-2">
                    {td.solutionArchitecture.map((sol, i) => (
                      <li key={i} className="text-xs sm:text-sm text-charcoal-body flex items-start gap-2">
                        <span className="text-botanical-600 font-bold font-mono">0{i + 1}.</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Projected Impact Footer */}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <div className="p-3 rounded-xl bg-botanical-50/70 border border-botanical-200/70">
                  <span className="text-[11px] font-mono text-botanical-800 font-medium block">
                    Target Impact:
                  </span>
                  <span className="text-xs font-semibold text-botanical-900 font-display">
                    {td.projectedImpact}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
