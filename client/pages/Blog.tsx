import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import SEO from "../components/SEO";

export default function Blog() {
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
            <div className="flex flex-wrap items-center justify-center gap-3">
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
