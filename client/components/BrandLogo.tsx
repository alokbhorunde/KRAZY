import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src="/logo_krazy.png"
      alt={`${siteConfig.brandName} logo`}
      className={cn("h-auto w-full object-contain", className)}
      loading="eager"
      decoding="async"
    />
  );
}
