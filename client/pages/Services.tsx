import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import SEO from "../components/SEO";
import { useBookingModal } from "../hooks/use-booking-modal";
import { siteConfig } from "@/lib/site-config";
import { 
  Check, 
  Plus, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Palette, 
  Monitor, 
  Smartphone, 
  Megaphone, 
  Layers,
  Info
} from "lucide-react";

// Categories definition
const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "branding", label: "Brand Identity", icon: Palette },
  { id: "uiux", label: "UI/UX Design", icon: Smartphone },
  { id: "webdev", label: "Web Development", icon: Monitor },
  { id: "social", label: "Poster & Social Media", icon: Megaphone },
  { id: "strategy", label: "Creative Strategy", icon: Sparkles }
];

const serviceCategories = [
  {
    id: "branding",
    title: "Brand Identity Design",
    description: "Build a memorable, cohesive identity that sets your brand apart from the competition.",
    packages: [
      {
        name: "Starter Logo Package",
        tag: "Best for small businesses & creators",
        timeline: "3–4 days",
        description: "Includes 2 unique logo concepts and 2 rounds of revisions, along with a curated brand color palette, typography selection, final PNG and JPG files, high-quality exports, and a social profile logo design."
      },
      {
        name: "Brand Identity Package",
        tag: "Best for startups building a serious brand",
        timeline: "5–7 days",
        description: "Includes 4 custom logo concepts, a full brand identity system with colors and typography guidelines, a brand style guide, business card design, a social media profile kit, and professional mockups presentation."
      }
    ]
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Sleek, human-centered interfaces that look stunning and optimize user conversion.",
    packages: [
      {
        name: "Landing Page UI Design",
        tag: "Perfect for startups, SaaS, creators",
        timeline: "Custom Timeline",
        description: "Includes 1 modern landing page UI design featuring mobile-responsive layouts, interactive prototypes, user flow planning, and the final developer-ready Figma source file."
      },
      {
        name: "Website UI/UX Package",
        tag: "Perfect for a comprehensive web presence",
        timeline: "Custom Timeline",
        description: "Includes a complete 10-page website design with responsive layouts, UX structure, wireframes, custom design system, and developer-ready Figma files. Pages include Home, About, Services, Contact, and a Custom Page."
      },
      {
        name: "Mobile App UI/UX",
        tag: "Premium mobile experiences",
        timeline: "Custom Timeline",
        description: "Includes complete app flow planning, wireframes, high-fidelity UI screens (10–15 screens), interactive prototype, and a custom mobile design system. Extra screens can be added on request."
      }
    ]
  },
  {
    id: "webdev",
    title: "Website Development",
    description: "High-performance, clean development utilizing React, Framer, or standard HTML/CSS.",
    packages: [
      {
        name: "Static Website",
        tag: "Our strong entry web presence offer",
        timeline: "4–6 days",
        description: "Includes up to 5 custom-designed responsive pages built using React, Framer, or HTML/CSS. Features fast page loads, contact form, modern micro-animations, basic SEO setup, and full deployment.",
        notIncludedText: "Note: Does not include an admin panel, backend systems, user authentication, or a CMS."
      },
      {
        name: "Business Website",
        tag: "Perfect for businesses, startups, & agencies",
        timeline: "Custom Timeline",
        description: "Includes custom UI design integration, fully responsive frontend, backend integration, a CMS / Admin panel, database setup, and advanced SEO & performance optimization."
      },
      {
        name: "Startup/Product Website",
        tag: "Advanced web experience for digital products",
        timeline: "Custom Timeline",
        description: "Includes premium animations, SaaS/product style layouts, advanced frontend interactive UI, custom API integrations, dashboard screens, secure user authentication, and scalable backend architecture."
      }
    ]
  },
  {
    id: "social",
    title: "Poster & Social Media Design",
    description: "High-impact visual designs optimized for campaigns, social channels, and events.",
    packages: [
      {
        name: "Social Media Design Package",
        tag: "Monthly design retainer",
        timeline: "Monthly Retainer",
        description: "Includes 12 premium, brand-consistent post designs tailored for Instagram and Facebook, delivered in high-quality exports with correct layout dimensions."
      },
      {
        name: "Poster Design",
        tag: "Promotional graphics that stand out",
        timeline: "Custom Timeline",
        description: "Includes custom designs for event posters, product showcases, or promotional digital banners, with revisions included. Turnaround depends on project complexity."
      }
    ]
  },
  {
    id: "strategy",
    title: "Creative Strategy",
    description: "Strategic research and positioning to align your brand and digital product direction.",
    packages: [
      {
        name: "Brand Strategy Session",
        tag: "Ideal consultation package",
        timeline: "1-2 days",
        description: "Includes a focused brand strategy session covering brand positioning, visual direction, competitor analysis, content direction, and actionable growth ideas."
      }
    ]
  }
];





export default function Services() {
  const { openModal } = useBookingModal();
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const [activeTab, setActiveTab] = useState(categoryQuery || "all");

  useEffect(() => {
    if (categoryQuery) {
      setActiveTab(categoryQuery);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [categoryQuery]);

  const handleInquire = (packageName: string) => {
    const message = `Hi Krazy Studios, I am interested in inquiring about the ${packageName}!`;
    const url = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCustomInquire = () => {
    const message = `Hi Krazy Studios, I am interested in a custom project proposal!`;
    const url = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const filteredCategories = activeTab === "all" 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SEO
        title="Services — Krazy Studios | Premium Branding, UI/UX & Web Development"
        description="Explore Krazy Studios' services: Brand Identity, UI/UX Design, Website Development, Poster & Social Media, and Creative Strategy. Customized packages tailored to your startup."
      />
      <Navigation />

      {/* Hero */}
      <section className="relative mx-auto flex max-w-[1100px] flex-col justify-center px-6 pb-12 pt-28 sm:pb-16 sm:pt-40 lg:px-10">
        <p className="mb-6 font-lora text-xl italic tracking-tight text-gray-500 md:text-2xl">
          What we do
        </p>
        <h1 className="gradient-text mb-6 w-fit font-grotesk text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-7xl">
          Our Services & Packages
        </h1>
        <p className="max-w-3xl font-grotesk text-xl leading-relaxed text-gray-700 md:text-2xl">
          From brand strategy to pixel-perfect code — everything you need to
          launch, grow, and stand out. Clear scope, honest timelines, no
          surprises.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="mx-auto max-w-[1100px] px-6 mb-12 lg:px-10">
        <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-6">
          {CATEGORIES.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-full border-2 border-black px-4 py-2 font-grotesk text-base font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#FFE600] shadow-[3px_3px_0px_0px_#000000] -translate-x-[1px] -translate-y-[1px]"
                    : "bg-white hover:bg-gray-100 hover:shadow-[2px_2px_0px_0px_#000000]"
                }`}
              >
                {Icon && <Icon className="h-4 w-4 shrink-0" />}
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Packages Section */}
      <section className="mx-auto max-w-[1100px] px-6 pb-16 lg:px-10">
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <div className="border-l-4 border-[#5227FF] pl-4">
                <h2 className="font-grotesk text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                  {category.title}
                </h2>
                <p className="mt-2 max-w-2xl font-grotesk text-lg text-gray-600">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {category.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_#000000] transition-all duration-300 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0px_0px_#000000] sm:p-6"
                  >
                    <div>
                      {/* Badge / Tag */}
                      <span className="inline-block rounded-full border border-black bg-gray-50 px-2.5 py-0.5 font-grotesk text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                        {pkg.tag}
                      </span>
                      
                      <h3 className="font-grotesk text-xl font-bold text-gray-900 mb-1">
                        {pkg.name}
                      </h3>

                      <div className="flex items-center gap-1.5 text-gray-500 font-grotesk text-xs mb-4">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        <span>Delivery: {pkg.timeline}</span>
                      </div>

                      {/* Deliverables Paragraph */}
                      <div className="mb-4">
                        <h4 className="font-grotesk text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1.5">
                          What's Included
                        </h4>
                        <p className="font-grotesk text-sm text-gray-700 leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>

                      {/* "Not Included" section if exists */}
                      {pkg.notIncludedText && (
                        <div className="mt-4 border-t border-dashed border-gray-200 pt-3 mb-4">
                          <p className="font-grotesk text-xs text-red-500 font-bold leading-relaxed flex items-start gap-1.5">
                            <Info className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                            <span>{pkg.notIncludedText}</span>
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-100">
                      <button
                        onClick={() => handleInquire(pkg.name)}
                        className="inline-flex w-full items-center justify-center rounded-full border-2 border-black bg-[#5227FF] py-2.5 font-grotesk text-sm font-bold text-white shadow-[3px_3px_0px_0px_#000000] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000000]"
                      >
                        Inquire Package &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Services Section */}
      {/* Bottom Sections: Custom Services & Free Consultation Grid */}
      <section className="mx-auto max-w-[1100px] px-6 pb-20 pt-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Custom Services (1/3 Part) */}
          {(activeTab === "all" || activeTab === "strategy") && (
            <div className="flex flex-col justify-between rounded-3xl border-2 border-black bg-[#C2FFD9] p-6 shadow-[4px_4px_0px_0px_#000000] sm:p-8 h-full">
              <div>
                <h2 className="font-grotesk text-2xl font-bold text-gray-900 mb-3">
                  Custom Services
                </h2>
                <p className="font-grotesk text-sm text-gray-800 leading-relaxed mb-4">
                  Every brand is different. We create fully custom solutions tailored to your vision—including SaaS platforms, AI tools, portfolio websites, e-commerce, dashboards, design systems, and product redesigns.
                </p>
                <p className="font-grotesk text-xs font-bold text-gray-600 mb-6">
                  Pricing is based on scope, complexity, and timeline.
                </p>
              </div>
              <button
                onClick={handleCustomInquire}
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-black bg-white py-3 font-grotesk text-sm font-bold text-black shadow-[3px_3px_0px_0px_#000000] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000000]"
              >
                Request Custom Proposal &rarr;
              </button>
            </div>
          )}

          {/* Free Consultation (2/3 Part or Full Width) */}
          <div className={`flex flex-col justify-between rounded-3xl border-2 border-black bg-white p-6 text-center shadow-[4px_4px_0px_0px_#000000] sm:p-8 md:p-10 h-full ${
            (activeTab === "all" || activeTab === "strategy") ? "md:col-span-2" : "md:col-span-3"
          }`}>
            <div className="flex flex-col items-center">
              <h2 className="mb-3 font-grotesk text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                Ready to scale your digital presence?
              </h2>
              <p className="mb-6 max-w-xl font-grotesk text-sm text-gray-600 leading-relaxed">
                Book a free discovery call. We'll consult with you to recommend the perfect alignment, scope, and direction for your needs.
              </p>
            </div>
            <div className="flex justify-center w-full mt-auto">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center rounded-full border-2 border-black bg-[#5227FF] px-8 py-3.5 font-grotesk text-base font-bold text-white shadow-[3px_3px_0px_0px_#000000] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000000]"
              >
                Book a Free Consultation &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
