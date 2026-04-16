import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />

      <main className="relative mx-auto flex w-full max-w-[1100px] flex-1 flex-col px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <div className="flex max-w-4xl flex-1 flex-col justify-center">
          <p className="mb-6 block font-grotesk text-sm font-bold uppercase tracking-widest text-gray-400">
            KRAZY STUDIOS
          </p>

          <h1 className="mb-8 font-grotesk text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Designing Bold <br className="hidden md:block" />
            <span className="gradient-text">Digital Experiences</span>
          </h1>

          <p className="mb-16 max-w-3xl font-grotesk text-xl leading-relaxed text-gray-600 md:text-2xl">
            Have a project in mind, an idea to explore, or just want to collaborate? We would love to hear from you.
          </p>

          <div className="grid grid-cols-1 gap-12 border-t border-gray-100 pt-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-lora text-xl italic tracking-tight text-gray-500 md:text-2xl">
                Let's Connect
              </h2>
              <p className="mb-6 font-grotesk text-2xl font-bold text-gray-900">Email</p>
              <a href={siteConfig.contactEmailHref} className="group inline-flex items-center">
                <div className="border-b-2 border-gray-900 pb-1 font-grotesk text-lg font-semibold text-gray-900 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#00b2ff] group-hover:via-[#d946ef] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent md:text-xl">
                  {siteConfig.contactEmail}
                </div>
              </a>
            </div>

            <div>
              <h2 className="mb-4 font-lora text-xl italic tracking-tight text-gray-500 md:text-2xl">
                Let's have a Call
              </h2>
              <p className="mb-6 font-grotesk text-2xl font-bold text-gray-900">Book a Call</p>
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-900 px-8 py-3 font-grotesk text-lg font-bold text-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:scale-95"
              >
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#00b2ff] via-[#d946ef] to-[#f97316] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-90" />
                <span className="relative z-10">Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter variant="minimal" />
    </div>
  );
}
