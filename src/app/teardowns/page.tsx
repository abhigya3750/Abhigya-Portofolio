import React from "react";
import portfolioData from "@/data/portfolio-data.json";
import { PortfolioData } from "@/types/portfolio";
import Header from "@/components/Header";
import RapidoFlagship from "@/components/RapidoFlagship";
import ProductTeardownLab from "@/components/ProductTeardownLab";
import CredentialsFooter from "@/components/CredentialsFooter";

const data = portfolioData as unknown as PortfolioData;

export const metadata = {
  title: "Product Teardowns & Architecture — Abhigya Kanungo",
  description: "First-principles product deconstructions across Rapido Bikepool Flagship, GenAI execution loops, RBI AutoPay mandate controls, and WhatsApp async scheduling.",
};

export default function TeardownsPage() {
  return (
    <main className="relative min-h-screen bg-white pt-16">
      <Header
        statusBadge={data.profile.statusBadge}
        signatureLogo={data.profile.signatureEmerald}
        resumeUrl={data.profile.verifiedLinks.resumeFolder}
      />

      {/* Rapido Bikepool Flagship Case Study */}
      <RapidoFlagship project={data.flagship} />

      {/* Strategic Product Deconstruction Lab */}
      <ProductTeardownLab teardowns={data.teardowns} />

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
