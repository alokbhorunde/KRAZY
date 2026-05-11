import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  image?: string;
  url?: string;
  schema?: Record<string, unknown>;
}

export default function SEO({
  title = "Krazy Studios — Creative UI/UX & Digital Design Studio",
  description = "Krazy Studios is a creative digital design studio specializing in UI/UX design, branding, web experiences, and modern digital products.",
  type = "website",
  name = "Krazy Studios",
  image = "https://krazystudios.in/logo_krazy.ico", // Ideally a high-res image
  url = "https://krazystudios.in",
  schema,
}: SEOProps) {
  
  // Default Organization & Website Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        "name": "Krazy Studios",
        "url": url,
        "logo": {
          "@type": "ImageObject",
          "url": image,
        },
        "sameAs": [
          // Add actual social links if known, or placeholders
          "https://www.linkedin.com/company/krazy-studios",
          "https://www.instagram.com/krazystudios"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        "url": url,
        "name": "Krazy Studios",
        "publisher": {
          "@id": `${url}/#organization`
        }
      }
    ]
  };

  const jsonLd = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
