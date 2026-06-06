import { siteConfig, isExternalHttpUrl, type SiteLink } from "@/lib/site-config";
import { useIsMobile } from "@/hooks/use-mobile";

interface SiteFooterProps {
  variant?: "full" | "minimal";
}

function MinimalFooterLink({ href, label }: SiteLink) {
  const externalProps = isExternalHttpUrl(href)
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};

  return (
    <a
      href={href}
      className="font-grotesk text-sm text-gray-500 transition-colors hover:text-gray-900"
      {...externalProps}
    >
      {label}
    </a>
  );
}

function getCopyrightLabel() {
  const currentYear = new Date().getFullYear();
  return currentYear === 2024 ? "2024" : `2024 - ${currentYear}`;
}

/* ── Scattered floating pill links ── */
const contactPills = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/krazystudios",
    rotate: "-12deg",
    top: "12%",
    left: "6%",
    mobileTop: "10%",
    mobileLeft: "15%",
    hoverBg: "#0A66C2",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.contactEmail}`,
    rotate: "6deg",
    top: "38%",
    left: "18%",
    mobileTop: "10%",
    mobileLeft: "55%",
    hoverBg: "#EA4335",
  },
  {
    label: "#DesignByKrazy",
    href: "#",
    rotate: "-4deg",
    top: "8%",
    left: "34%",
    mobileTop: "62%",
    mobileLeft: "24%",
    hoverBg: "#5227FF",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/krazystudios.in",
    rotate: "14deg",
    top: "30%",
    left: "52%",
    mobileTop: "36%",
    mobileLeft: "50%",
    hoverBg: "#E1306C",
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsappUrl,
    rotate: "10deg",
    top: "12%",
    left: "72%",
    mobileTop: "36%",
    mobileLeft: "16%",
    hoverBg: "#25D366",
  },
];

export default function SiteFooter({ variant = "full" }: SiteFooterProps) {
  const footerLinks = [...siteConfig.legalLinks, ...siteConfig.socialLinks];
  const copyrightLabel = getCopyrightLabel();
  const isMobile = useIsMobile();

  if (variant === "minimal") {
    return (
      <footer className="mt-20 w-full border-t border-gray-100 py-12">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-4 text-center text-gray-500 sm:px-6 lg:flex-row lg:px-10">
          <p className="font-grotesk text-base font-bold">
            Copyright {copyrightLabel} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {footerLinks.map((link) => (
              <MinimalFooterLink key={`${link.label}-${link.href}`} {...link} />
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative overflow-hidden bg-transparent">
      {/* Top border line matching the rest of the site sections */}
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] border-t-2 border-gray-200" />
      </div>

      {/* ── Main "Get in touch" section ── */}
      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10 flex flex-col justify-end" style={{ minHeight: isMobile ? "140px" : "180px" }}>


        {/* Floating pill links */}
        <div
          className={
            isMobile
              ? "pointer-events-none w-full flex flex-wrap justify-center gap-2 p-4 pt-6"
              : "pointer-events-none absolute inset-0"
          }
        >
          {contactPills.map((pill) => {
            const externalProps = isExternalHttpUrl(pill.href)
              ? { target: "_blank" as const, rel: "noreferrer" as const }
              : {};

            return (
              <a
                key={pill.label}
                href={pill.href}
                className={`pointer-events-auto inline-flex items-center gap-2 rounded-full border-2 border-black bg-white font-grotesk font-bold text-gray-900 transition-colors duration-200 hover:bg-[var(--hover-bg)] hover:text-white hover:shadow-[4px_4px_0px_0px_#000000] ${
                  isMobile
                    ? "relative px-3 py-1.5 text-xs shadow-[2px_2px_0px_0px_#000000]"
                    : "absolute px-5 py-2 text-sm shadow-[3px_3px_0px_0px_#000000]"
                }`}
                style={
                  isMobile
                    ? {
                        transform: `rotate(${pill.rotate})`,
                        ['--hover-bg' as any]: pill.hoverBg,
                      }
                    : {
                        transform: `rotate(${pill.rotate})`,
                        top: pill.top,
                        left: pill.left,
                        ['--hover-bg' as any]: pill.hoverBg,
                      }
                }
                {...externalProps}
              >
                {pill.label}
              </a>
            );
          })}
        </div>

        {/* Giant "KRAZY STUDIOS" text */}
        <div className="flex items-end justify-center pb-1 pt-4 md:pb-4 md:pt-16">
          <h2
            className="select-none text-center font-grotesk font-black tracking-tighter text-gray-900"
            style={{
              fontSize: "clamp(2.5rem, 8.5vw, 7.8rem)",
              lineHeight: 0.9,
            }}
          >
            KRAZY STUDIOS
          </h2>
        </div>
      </div>

      {/* ── Brand gradient color bar ── */}
      <div className="h-3 w-full gradient-bg" />

      {/* ── Bottom copyright bar ── */}
      <div className="border-t-2 border-black bg-gray-950">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-10">
          <p className="font-grotesk text-sm text-white/50">
            Copyright {copyrightLabel} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                className="font-grotesk text-sm text-white/50 transition-colors hover:text-white"
                {...(isExternalHttpUrl(link.href)
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

