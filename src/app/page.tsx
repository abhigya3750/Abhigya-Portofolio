import React from "react";
import portfolioData from "@/data/portfolio-data.json";
import { PortfolioData } from "@/types/portfolio";
import MultilingualLoader from "@/components/MultilingualLoader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowIThinkAndBuild from "@/components/HowIThinkAndBuild";
import FeaturedWorkPreviews from "@/components/FeaturedWorkPreviews";
import CredentialsFooter from "@/components/CredentialsFooter";

const data = portfolioData as unknown as PortfolioData;

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Pan-Indian Multilingual Welcome Loader */}
      <MultilingualLoader />

      {/* Luxury Brand Header */}
      <Header
        statusBadge={data.profile.statusBadge}
        signatureLogo={data.profile.signatureEmerald}
        resumeUrl={data.profile.verifiedLinks.resumeFolder}
      />

      {/* Clean Executive Hero (Tagline + CTAs + Enlarged Portrait) */}
      <Hero
        name={data.profile.name}
        persona={data.profile.definingPersona}
        tagline={data.profile.tagline}
        heroImage={data.profile.heroImage}
        links={{
          email: data.profile.verifiedLinks.email,
          linkedin: data.profile.verifiedLinks.linkedin,
          github: data.profile.verifiedLinks.github,
          resumeFolder: data.profile.verifiedLinks.resumeFolder,
          previousPortfolio: "",
        }}
      />

      {/* Operating DNA & Capabilities: Mindset, Athletic Resilience, Fit Roles & 15-Tool Interactive Matrix */}
      <HowIThinkAndBuild
        intro={data.profile.heroIntro}
        superpower={data.profile.superpowerQuote}
        locations={data.profile.locations}
        sportsResilience={data.philosophy.sportsResilience}
      />

      {/* Curated Previews & Teasers for Dedicated Sub-Pages */}
      <FeaturedWorkPreviews
        flagship={data.flagship}
        experience={data.experience}
        teardowns={data.teardowns}
      />

      {/* Start a Conversation & Operating Reach-out Hub */}
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
