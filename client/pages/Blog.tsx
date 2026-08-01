import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import SEO from "../components/SEO";
import { useBookingModal } from "../hooks/use-booking-modal";
import { siteConfig } from "@/lib/site-config";

export default function Blog() {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Blog — Coming Soon | Krazy Studios"
        description="Our blog is coming soon. Behind-the-scenes process, design opinions, and studio notes from Krazy Studios."
      />
      <Navigation />

      <main className="pt-24 pb-8 sm:pt-32 sm:pb-12">
        {/* Coming Soon Section */}
        <section className="px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1100px] mx-auto flex flex-col items-center justify-center py-12 md:py-40 text-center">
            {/* Coming Soon Badge */}
            <div className="inline-block mb-8 px-5 py-2 border-2 border-black bg-[#5227FF] text-white font-grotesk font-extrabold text-sm uppercase tracking-[0.2em] shadow-[3px_3px_0px_0px_#000000]">
              Coming Soon
            </div>

            {/* Headline */}
            <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-12">
              We're cooking up<br />
              <span className="gradient-text">something great.</span>
            </h1>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              <span className="inline-flex items-center px-4 py-2 border-2 border-black bg-gray-50 font-grotesk font-bold text-sm text-gray-700 shadow-[2px_2px_0px_0px_#000000]">
                Process Deep-dives
              </span>
              <span className="inline-flex items-center px-4 py-2 border-2 border-black bg-gray-50 font-grotesk font-bold text-sm text-gray-700 shadow-[2px_2px_0px_0px_#000000]">
                Case Studies
              </span>
              <span className="inline-flex items-center px-4 py-2 border-2 border-black bg-gray-50 font-grotesk font-bold text-sm text-gray-700 shadow-[2px_2px_0px_0px_#000000]">
                Studio Notes
              </span>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center gap-4">
              <p className="font-grotesk text-lg font-bold text-gray-900 md:text-xl">
                Can't wait? Let's talk about your project now.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center rounded-full bg-[#5227FF] text-white border-2 border-black px-8 py-3.5 font-grotesk text-base font-bold shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000000] transition-all"
                >
                  Book a Free Call &rarr;
                </button>
                <a
                  href={siteConfig.contactEmailHref}
                  className="font-grotesk text-sm font-bold text-gray-500 underline hover:text-gray-900 transition-colors"
                >
                  Or email us at {siteConfig.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
