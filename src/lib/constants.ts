// Application constants
export const CONTACT_EMAIL = "mensahs@coreaxishq.tech";

// Color palette (hex values used throughout the app)
export const COLORS = {
  // Primary
  darkGreen: "#1a3a2a",
  mediumGreen: "#2d6a4f",
  lightGreen: "#f0f7f2",
  background: "#faf9f5",

  // Accent
  orange: "#F47316",
  orangeDark: "#d9651a",

  // Text
  textDark: "#1a3a2a",
  textMedium: "#4a6a55",
  textLight: "#5a8a6a",
  textLighter: "#7a9a85",
  textLightest: "#9ab0a0",

  // Border
  border: "#d8ead2",
  borderLight: "#e8f0ea",
  borderLightest: "#e8e4d8",

  // Success
  success: "#2d6a4f",
  successLight: "#e8f5ee",
  successLightest: "#c8ddd0",
} as const;

// Animation timing (in seconds)
export const ANIMATION_DURATION = {
  fast: 0.3,
  default: 0.5,
  slow: 0.6,
} as const;

// Navigation links
export const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "CLNCH Lens", href: "/#clnch-lens" },
  { label: "Opportunity Watch", href: "/#opportunity-watch" },
  { label: "Vision", href: "/#vision" },
  { label: "About", href: "/about" },
] as const;

// Contact form intents
export const CONTACT_INTENTS = [
  "I have a question",
  "Partnership",
  "Feedback",
  "Product idea",
  "Media / press",
  "Investment",
  "Something else",
] as const;
