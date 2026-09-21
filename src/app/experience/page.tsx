import React from "react";
import portfolioData from "@/data/portfolio-data.json";
import { PortfolioData } from "@/types/portfolio";
import Header from "@/components/Header";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CredentialsFooter from "@/components/CredentialsFooter";

const data = portfolioData as unknown as PortfolioData;

export const metadata = {
  title: "Experience & Track Record — Abhigya Kanungo",
  description: "Detailed industry experience, fintech payment operations, and startup leadership of Abhigya Kanungo.",
};

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen bg-white pt-16">
      <Header
        statusBadge={data.profile.statusBadge}
        signatureLogo={data.profile.signatureEmerald}
        resumeUrl={data.profile.verifiedLinks.resumeFolder}
      />

      <div className="pt-8">
        <ExperienceTimeline experience={data.experience} />
      </div>

      {/* Certifications Hub scoped to Experience page */}
      <CredentialsFooter
        certifications={data.certifications}
        showCertifications={true}
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
