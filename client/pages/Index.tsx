import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BrandLogo from "../components/BrandLogo";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import SEO from "../components/SEO";
import { siteConfig } from "@/lib/site-config";
import { useBookingModal } from "../hooks/use-booking-modal";

const SplashCursor = lazy(() => import("../components/SplashCursor"));

const services = [
  {
    title: "Creative Branding",
    description: "Crafting unforgettable identities and visual systems that turn heads.",
    image: "/creative_branding.webp",
  },
  {
    title: "UI/UX Design",
    description: "Designing sleek, intuitive interfaces that users love to use.",
    image: "/ui_ux.webp",
  },
  {
    title: "Logo Design",
    description: "Creating iconic symbols that capture your brand's essence.",
    image: "/logo_design.webp",
  },
  {
    title: "Poster Design",
    description: "Eye-catching visuals that demand attention and inspire action.",
    image: "/poster_design.webp",
  },
  {
    title: "Web & App Development",
    description: "Building digital experiences that work seamlessly across all devices.",
    image: "/webdev.webp",
  },
  {
    title: "Creative Strategy",
    description: "Strategic thinking that transforms ideas into impactful solutions.",
    image: "/krazystudiosabout.webp",
  },
] as const;

const projects = [
  {
    id: "safer",
    title: "SAFER Women Safety",
    image: "/safer.png.webp",
    alt: "SAFER women safety mobile app case study",
    tags: ["UI/UX Design", "Mobile App", "2024"],
  },
  {
    id: "techsonix",
    title: "TECHSONIX SOLUTIONS",
    image: "/techsonix.webp",
    alt: "Techsonix Solutions project",
    tags: ["Brand Identity", "Tech Solutions", "2024"],
  },
  {
    id: "skyminent",
    title: "SKYEMINENT CONSTRUCTIONS",
    image: "/skyminent.png",
    alt: "Skyeminent Constructions project",
    tags: ["Brand Identity", "Construction", "2024"],
  },
] as const;

export default function Index() {
  const { isOpen, openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Krazy Studios — Creative UI/UX & Digital Design Studio in Pune, India"
        description="Krazy Studios is a creative digital design agency in Pune, India, specializing in UI/UX design, branding, web design, and immersive digital experiences."
      />
      
      <Suspense fallback={null}>
        {!isOpen && (
          <SplashCursor
            position="fixed"
            zIndex={0}
            SIM_RESOLUTION={64}
            DYE_RESOLUTION={512}
            PRESSURE_ITERATIONS={10}
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2.5}
            PRESSURE={0.05}
            CURL={4}
            SPLAT_RADIUS={0.08}
            SPLAT_FORCE={4000}
            COLOR_UPDATE_SPEED={10}
            SHADING={false}
            RAINBOW_MODE
            COLOR="#A855F7"
          />
        )}
      </Suspense>

      <Navigation />

      <section className="relative flex min-h-[80vh] items-center overflow-hidden px-4 pb-8 pt-20 sm:pb-12 sm:pt-28 md:pb-16 md:pt-32 sm:min-h-[95vh] sm:px-6 lg:px-10">


        <div className="relative z-10 mx-auto w-full max-w-[1100px] pt-14 sm:pt-0">
          <div className="mb-5 sm:mb-7">
            <h1 className="mb-4 text-left sm:mb-8 sm:pb-8">
              <div className="mb-2 md:mb-6">
                <span className="font-grotesk text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-6xl lg:text-8xl">
                  We
                </span>{" "}
                <span className="font-lora text-5xl font-normal italic leading-[1.1] tracking-tight text-gray-900 md:text-6xl lg:text-8xl">
                  are a
                </span>
                <br className="sm:hidden" />
                <span className="mt-1 block font-grotesk text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:mt-0 sm:inline md:text-6xl lg:text-8xl">
                  {" "}Creative
                </span>
              </div>
              <div>
                <span className="gradient-text pb-2 font-grotesk text-5xl font-bold leading-[1.15] tracking-tight sm:pb-4 md:text-6xl lg:text-8xl">
                  Tech & Design Studio
                </span>
              </div>
            </h1>
          </div>

          <div className="mb-5 max-w-4xl sm:mb-7">
            <p className="font-grotesk text-lg leading-relaxed text-gray-600 md:text-xl md:leading-8 lg:text-2xl">
              We build bold brands, immersive digital experiences, and future-forward web designs from Pune, India.{" "}
              <span className="font-bold text-gray-900">Smart. Disruptive. Krazy.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-12 sm:py-24 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mb-16 border-t-2 border-gray-200 pt-8">
            <p className="mb-2 font-lora text-xl italic tracking-tight text-gray-500 md:text-2xl">
              Services
            </p>
            <h2 className="gradient-text w-fit font-grotesk text-3xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
              What we do
            </h2>
          </div>

          <div className="flex flex-col gap-6 pl-4 md:gap-10 md:pl-8 lg:pl-16">
            {services.map((service) => (
              <div key={service.title} className="group relative w-full cursor-pointer py-2">
                <div className="relative z-10 w-fit">
                  <div className="flex origin-left items-center transition-transform duration-300 group-hover:scale-[1.03]">
                    <h3 className="font-grotesk text-xl font-bold tracking-tight text-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#00b2ff] group-hover:via-[#d946ef] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent md:text-3xl lg:text-4xl">
                      {service.title}
                    </h3>
                    <span className="ml-3 -translate-x-4 font-grotesk text-xl font-bold text-gray-900 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:text-3xl lg:text-4xl">
                      -
                    </span>
                  </div>
                  <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100">
                    <p className="font-grotesk text-lg text-gray-600 md:text-xl">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none absolute right-0 top-1/2 z-0 hidden h-64 w-64 -translate-y-1/2 translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:-rotate-3 group-hover:opacity-100 lg:block">
                  <div className="h-full w-full scale-95 overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-transform duration-700 ease-out group-hover:scale-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      width="256"
                      height="256"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-10 sm:py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 border-t-2 border-gray-200 pt-8">
            <p className="mb-2 font-lora text-2xl italic tracking-tight text-gray-500">Projects</p>
            <h2 className="gradient-text mb-3 w-fit font-grotesk text-3xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
              Selected works
            </h2>
            <p className="max-w-4xl font-grotesk text-2xl leading-8 text-gray-600">
              Years of experience to create unique design in agile and fast manner
            </p>
          </div>

          <div className="mx-auto w-full max-w-[1100px]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className="group flex flex-col justify-between h-full cursor-pointer border-2 border-black bg-white p-4 rounded-2xl shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000000] transition-all duration-200"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Image Container with Zoom effect */}
                      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl border-2 border-black bg-gray-50">
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* Bottom Info Row */}
                      <div className="mt-4 flex items-start justify-between gap-4">
                        <div className="space-y-2.5">
                          <h3 className="font-grotesk text-xl font-bold text-gray-900 transition-colors group-hover:text-[#5227FF] leading-snug">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-white border border-black px-2.5 py-0.5 text-xs font-bold text-black"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white transition-all duration-300 group-hover:bg-[#5227FF] group-hover:text-white shadow-[2px_2px_0px_0px_#000000] group-hover:shadow-[3px_3px_0px_0px_#000000] group-hover:-translate-x-[1px] group-hover:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000000]">
                          <ArrowUpRight className="h-5 w-5 text-gray-900 transition-colors group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] border-t-2 border-gray-200 pt-10 sm:pt-16">
          <div className="flex flex-col items-start justify-between gap-16 md:flex-row">
            <div className="max-w-2xl flex-1">
              <p className="mb-4 font-lora text-xl italic tracking-tight text-gray-500 md:text-2xl">
                Contacts
              </p>
              <h2 className="gradient-text mb-6 w-fit font-grotesk text-3xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
                Work with us
              </h2>
              <p className="mb-10 font-grotesk text-xl leading-relaxed text-gray-600 md:text-2xl">
                We are eager to learn about your organization and to help you achieve a
                well-defined out-of-the-box visual strategy.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.contactEmailHref}
                  className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 border-2 border-black px-10 py-4 font-grotesk text-lg font-bold shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000000] transition-all"
                >
                  <span>Email Us</span>
                </a>
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center rounded-full bg-[#5227FF] text-white border-2 border-black px-10 py-4 font-grotesk text-lg font-bold shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000000] transition-all"
                >
                  <span>Book a Free Call &rarr;</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-10 self-stretch md:pt-14">
              <div>
                <h3 className="mb-3 font-lora text-xl italic tracking-tight text-gray-500">
                  Based in
                </h3>
                <p className="font-grotesk text-2xl font-bold text-gray-900">
                  {siteConfig.locationLabel}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <BrandLogo className="w-10" />
                </div>
                <span className="font-grotesk text-2xl font-bold text-gray-900">
                  {siteConfig.brandName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
