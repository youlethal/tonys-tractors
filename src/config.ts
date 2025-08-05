export interface BrandingConfig {
  businessName: string;
  logoUrl?: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
}

export interface AIGeneratedContent {
  hero: {
    headline: string;
    subtitle: string;
    cta: string;
    stats: Array<{label: string, value: string}>;
  };
  about: {
    mission: string;
    vision: string;
    values: string[];
  };
  services: Array<{
    name: string;
    description: string;
    price?: string;
    features: string[];
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    rating: number;
  }>;
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
}

export interface TemplateConfig {
  branding: BrandingConfig;
  modules: string[];
  darkMode?: boolean;
  aiContent?: AIGeneratedContent;
}

// Default configuration - this will be overridden by client-specific settings
export const defaultConfig: TemplateConfig = {
  businessName: "Tonys Tractors",
  primaryColor: "#6366f1",
  accentColor: "#6366f1",
  fontFamily: "Inter, sans-serif",
  modules: ["booking","gallery","staff"],
  aiContent: null
};

// Function to update configuration with client-specific settings
export function updateConfig(newConfig: Partial<TemplateConfig>): TemplateConfig {
  return {
    ...defaultConfig,
    ...newConfig,
    branding: {
      ...defaultConfig.branding,
      ...newConfig.branding
    }
  };
}

// Function to apply branding to CSS variables
export function applyBranding(branding: BrandingConfig) {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', branding.primaryColor);
  root.style.setProperty('--accent-color', branding.accentColor);
  root.style.setProperty('--font-family', branding.fontFamily);
} 