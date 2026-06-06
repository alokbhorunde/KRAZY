import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import SEO from "../components/SEO";
import { siteConfig } from "@/lib/site-config";
import { useBookingModal } from "../hooks/use-booking-modal";

export default function Contact() {
  const { openModal } = useBookingModal();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SEO 
        title="Contact Krazy Studios — Let's Build Something Krazy"
        description="Get in touch with Krazy Studios. We are a digital design agency ready to collaborate on your next UI/UX, branding, or web design project."
      />
      <Navigation />

      <main className="relative mx-auto flex w-full max-w-[1100px] flex-1 flex-col px-4 pb-10 pt-24 sm:pb-20 sm:pt-32 lg:px-10">
        <div className="flex max-w-4xl flex-1 flex-col justify-center">
          <p className="mb-6 block font-grotesk text-sm font-bold uppercase tracking-widest text-gray-400">
            LET'S WORK TOGETHER
          </p>

          <h1 className="mb-8 font-grotesk text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Got an idea? <br className="hidden md:block" />
            <span className="gradient-text">Let's build it.</span>
          </h1>

          <p className="mb-16 max-w-3xl font-grotesk text-xl leading-relaxed text-gray-600 md:text-2xl">
            Whether it's a brand, a website, or a full product — tell us what you're building and we'll tell you how we can make it extraordinary.
          </p>

          <div className="grid grid-cols-1 gap-12 border-t border-gray-100 pt-8 md:pt-12 md:grid-cols-3">
            <div>
              <h2 className="mb-4 font-lora text-xl italic tracking-tight text-gray-500 md:text-2xl">
                Let's Connect
              </h2>
              <p className="mb-6 font-grotesk text-2xl font-bold text-gray-900">Email Us</p>
              <a href={siteConfig.contactEmailHref} className="group inline-flex items-center">
                <div className="border-b-2 border-gray-900 pb-1 font-grotesk text-lg font-semibold text-gray-900 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#00b2ff] group-hover:via-[#d946ef] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent md:text-xl">
                  {siteConfig.contactEmail}
                </div>
              </a>
              <p className="mt-3 font-grotesk text-sm text-gray-500">Reply within 24hrs</p>
            </div>

            <div>
              <h2 className="mb-4 font-lora text-xl italic tracking-tight text-gray-500 md:text-2xl">
                Let's Chat
              </h2>
              <p className="mb-6 font-grotesk text-2xl font-bold text-gray-900">WhatsApp</p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 font-grotesk text-lg font-bold bg-[#25D366] text-white border-2 border-black rounded-full shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000000] transition-all duration-200"
              >
                <span>Chat Now</span>
              </a>
              <p className="mt-4 font-grotesk text-sm text-gray-500">Usually reply in 2hrs</p>
            </div>

            <div>
              <h2 className="mb-4 font-lora text-xl italic tracking-tight text-gray-500 md:text-2xl">
                Let's have a Call
              </h2>
              <p className="mb-6 font-grotesk text-2xl font-bold text-gray-900">Book a Call</p>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-8 py-3 font-grotesk text-lg font-bold bg-[#5227FF] text-white border-2 border-black rounded-full shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000000] transition-all duration-200"
              >
                <span>Book Now</span>
              </button>
              <p className="mt-4 font-grotesk text-sm text-gray-500">30 min free discovery call</p>
            </div>
          </div>

          <p className="mt-16 text-left font-grotesk text-sm text-gray-500">
            Based in Pune, India &middot; Working with clients worldwide
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
