import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abhigyakanungo.me"),
  title: "Abhigya Kanungo — AI-Native Product Builder & Operations Strategist",
  description:
    "Personal portfolio and product operating hub of Abhigya Kanungo. Ex-Business Analyst Trainee @ AdAstraa Technologies, Former Operations Associate @ Fingpay, Campus PR Leader @ EDC Acropolis.",
  keywords: [
    "Abhigya Kanungo",
    "Product Manager",
    "AI-Native Builder",
    "Fintech Operations",
    "Rapido Bikepool",
    "AdAstraa Technologies",
    "Fingpay",
    "EDC Acropolis",
    "Vibe Coding",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Abhigya Kanungo", url: "https://github.com/abhigya3750" }],
  creator: "Abhigya Kanungo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhigyakanungo.me",
    title: "Abhigya Kanungo — AI-Native Product Builder & Operations Strategist",
    description:
      "Curious about how things work. Passionate about building how they should. Explore interactive prototypes, fintech reconciliation ops, and AI teardowns.",
    siteName: "Abhigya Kanungo Portfolio",
    images: [
      {
        url: "/assets/images/abhigya-hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Abhigya Kanungo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhigya Kanungo — AI-Native Product Builder & Operations Strategist",
    description:
      "Curious about how things work. Passionate about building how they should.",
    images: ["/assets/images/abhigya-hero-main.jpg"],
  },
  icons: {
    icon: "/assets/images/signature-emerald.png",
    apple: "/assets/images/signature-emerald.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-charcoal-primary antialiased selection:bg-emerald-100 selection:text-emerald-900 font-sans">
        {children}
      </body>
    </html>
  );
}
