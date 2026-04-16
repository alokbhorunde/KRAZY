import { Suspense, lazy } from "react";
import { isExternalHttpUrl, siteConfig, type SiteLink } from "@/lib/site-config";

const GhostCursor = lazy(() => import("./GhostCursor"));

interface SiteFooterProps {
  variant?: "full" | "minimal";
}

function FooterLink({ href, label }: SiteLink) {
  const externalProps = isExternalHttpUrl(href)
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};

  return (
    <a
      href={href}
      className="font-grotesk text-sm text-white/50 transition-colors hover:text-white"
      {...externalProps}
    >
      {label}
    </a>
  );
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
  return currentYear === 2024
    ? "2024"
    : `2024 - ${currentYear}`;
}

export default function SiteFooter({
  variant = "full",
}: SiteFooterProps) {
  const footerLinks = [...siteConfig.legalLinks, ...siteConfig.socialLinks];
  const copyrightLabel = getCopyrightLabel();

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
    <footer
      className="relative overflow-hidden border-t border-gray-200 bg-gray-950"
      style={{ minHeight: "500px" }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Suspense fallback={null}>
          <GhostCursor
            color="#5227FF"
            brightness={2}
            edgeIntensity={0}
            trailLength={50}
            inertia={0.5}
            grainIntensity={0.05}
            bloomStrength={0.1}
            bloomRadius={1}
            bloomThreshold={0.025}
            fadeDelayMs={1000}
            fadeDurationMs={1500}
          />
        </Suspense>
      </div>

      <div
        className="relative z-10 flex h-full flex-col items-center justify-center"
        style={{ minHeight: "300px" }}
      >
        <div className="flex w-full flex-1 items-center justify-center px-4 pt-16">
          <h2
            className="gradient-text select-none text-center font-grotesk font-bold"
            style={{
              fontSize: "clamp(3rem, 10vw, 10rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              filter: "drop-shadow(0 0 60px rgba(217, 70, 239, 0.3))",
            }}
          >
            {siteConfig.brandName.toUpperCase()}
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[1100px] px-4 pb-8 pt-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
            <p className="font-grotesk text-sm text-white/50">
              Copyright {copyrightLabel} {siteConfig.brandName}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <FooterLink key={`${link.label}-${link.href}`} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
