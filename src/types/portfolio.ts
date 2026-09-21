export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  isPrimary?: boolean;
}

export interface MetricHighlight {
  label: string;
  value: string;
}

export interface WorkRole {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  logo: string;
  description: string;
  highlights: string[];
  photos?: {
    caption: string;
    url: string;
  }[];
  skills: string[];
}

export interface FlagshipProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  logo: string;
  liveUrl?: string;
  linkedinHook: string;
  problemBreakdown: string;
  socialMotivations: {
    title: string;
    description: string;
  }[];
  coreInnovations: {
    id: string;
    title: string;
    tagline: string;
    bullet1: string;
    bullet2: string;
    icon: string;
    slideImage: string;
  }[];
  zeroDetourMechanism: {
    rule: string;
    details: string[];
    slaMetrics: { label: string; value: string }[];
  };
  regulatoryFeasibility: {
    status: string;
    details: string;
  };
  slideGallery: {
    title: string;
    url: string;
    caption: string;
  }[];
}

export interface ProductTeardown {
  id: string;
  tag: string;
  title: string;
  category: string;
  hook: string;
  problemStatement: string;
  solutionArchitecture: string[];
  projectedImpact: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  credentialBadge: string;
}

export interface ToolkitPillar {
  title: string;
  tagline: string;
  tools: string[];
  capabilities: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    definingPersona: string;
    statusBadge: string;
    tagline: string;
    heroIntro: string;
    superpowerQuote: string;
    locations: string[];
    heroImage: string;
    signatureLogo: string;
    signatureWhite: string;
    signatureEmerald: string;
    verifiedLinks: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
      notion?: string;
      previousPortfolio?: string;
      resumeFolder: string;
      certificationsFolder: string;
      rapidoLiveApp: string;
    };
  };
  philosophy: {
    curiosity: {
      title: string;
      quote: string;
      tags: string[];
    };
    sportsResilience: {
      title: string;
      quote: string;
      achievement: string;
      photo: string;
    };
    toolkit: ToolkitPillar[];
  };
  experience: WorkRole[];
  flagship: FlagshipProject;
  teardowns: ProductTeardown[];
  certifications: Certification[];
}
