import React from "react";
import portfolioData from "@/data/portfolio-data.json";
import { PortfolioData } from "@/types/portfolio";
import Header from "@/components/Header";
import RapidoFlagship from "@/components/RapidoFlagship";
import CredentialsFooter from "@/components/CredentialsFooter";

const data = portfolioData as unknown as PortfolioData;

export const metadata = {
  title: "Rapido Bikepool & Highway RideShare — Case Study by Abhigya Kanungo",
  description: "Product architecture, 5-minute hosting radar, Pink Pool community, highway engine, and zero-detour SLA by Abhigya Kanungo.",
};

export default function RapidoPage() {
  return (
    <main className="relative min-h-screen bg-white pt-16">
      <Header
        statusBadge={data.profile.statusBadge}
        signatureLogo={data.profile.signatureEmerald}
        resumeUrl={data.profile.verifiedLinks.resumeFolder}
      />

      <div className="pt-8">
        <RapidoFlagship project={data.flagship} />
      </div>

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
