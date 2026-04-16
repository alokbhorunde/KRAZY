export interface SiteLink {
  href: string;
  label: string;
}

const defaultProjectLinks = {
  safer:
    "https://www.behance.net/gallery/234590253/SAFER-Women-Safety-Mobile-App-(UIUX-Case-Study)",
  techsonix:
    "https://www.behance.net/gallery/227717277/Techsonix-Solutions-Logo-Design-Brand-Identity",
  skyminent:
    "https://www.behance.net/gallery/231846785/Brand-Identity-Design-for-SKYEMINENT-CONSTRUCTION",
} as const;

function getEnvValue(value: string | undefined, fallback = "") {
  const normalized = value?.trim();
  return normalized ? normalized : fallback;
}

function getOptionalLink(label: string, value: string | undefined) {
  const href = getEnvValue(value);
  return href ? { href, label } : null;
}

const contactEmail = getEnvValue(
  import.meta.env.VITE_PUBLIC_CONTACT_EMAIL,
  "contact@krazystudios.in",
);

export const siteConfig = {
  brandName: "KrazyStudios",
  contactEmail,
  contactEmailHref: `mailto:${contactEmail}`,
  calendlyUrl: getEnvValue(
    import.meta.env.VITE_PUBLIC_CALENDLY_URL,
    "https://calendly.com/krazystudios",
  ),
  locationLabel: getEnvValue(
    import.meta.env.VITE_PUBLIC_LOCATION_LABEL,
    "Pune, Maharashtra",
  ),
  projectCaseStudies: {
    safer: getEnvValue(
      import.meta.env.VITE_PUBLIC_PROJECT_SAFER_URL,
      defaultProjectLinks.safer,
    ),
    techsonix: getEnvValue(
      import.meta.env.VITE_PUBLIC_PROJECT_TECHSONIX_URL,
      defaultProjectLinks.techsonix,
    ),
    skyminent: getEnvValue(
      import.meta.env.VITE_PUBLIC_PROJECT_SKYMINENT_URL,
      defaultProjectLinks.skyminent,
    ),
  },
  legalLinks: [
    getOptionalLink("Privacy Policy", import.meta.env.VITE_PUBLIC_PRIVACY_URL),
    getOptionalLink("Terms of Service", import.meta.env.VITE_PUBLIC_TERMS_URL),
  ].filter(Boolean) as SiteLink[],
  socialLinks: [
    getOptionalLink("Instagram", import.meta.env.VITE_PUBLIC_INSTAGRAM_URL),
    getOptionalLink("Twitter", import.meta.env.VITE_PUBLIC_TWITTER_URL),
  ].filter(Boolean) as SiteLink[],
} as const;

export type ProjectId = keyof typeof siteConfig.projectCaseStudies;

export function isExternalHttpUrl(href: string) {
  return /^https?:\/\//.test(href);
}
