import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BrandLogo from "../components/BrandLogo";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import { siteConfig } from "@/lib/site-config";

const Antigravity = lazy(() => import("../components/Antigravity"));

const services = [
  {
    title: "Creative Branding",
    description: "Crafting unforgettable identities and visual systems that turn heads.",
    image: "/creative_branding.png",
  },
  {
    title: "UI/UX Design",
    description: "Designing sleek, intuitive interfaces that users love to use.",
    image: "/ui_ux.png",
  },
  {
    title: "Logo Design",
    description: "Creating iconic symbols that capture your brand's essence.",
    image: "/logo_design.png",
  },
  {
    title: "Poster Design",
    description: "Eye-catching visuals that demand attention and inspire action.",
    image: "/poster_design.png",
  },
  {
    title: "Web & App Development",
    description: "Building digital experiences that work seamlessly across all devices.",
    image: "/webdev.png",
  },
  {
    title: "Creative Strategy",
    description: "Strategic thinking that transforms ideas into impactful solutions.",
    image: "/krazystudiosabout.avif",
  },
] as const;

const projects = [
  {
    id: "safer",
    title: "SAFER - Women Safety Mobile App (UI/UX Case Study)",
    image: "/safer.png.png",
    alt: "SAFER women safety mobile app case study",
  },
  {
    id: "techsonix",
    title: "TECHSONIX SOLUTIONS",
    image: "/techsonix.png",
    alt: "Techsonix Solutions project",
  },
  {
    id: "skyminent",
    title: "SKYEMINENT CONSTRUCTIONS",
    image: "/skyminent.png",
    alt: "Skyeminent Constructions project",
  },
] as const;

export default function Index() {
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative flex min-h-[95vh] items-center overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-10">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <Antigravity
              count={250}
              magnetRadius={6}
              ringRadius={7}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1.5}
              lerpSpeed={0.1}
              color="#A600FF"
              autoAnimate
              particleVariance={1}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="capsule"
              fieldStrength={10}
            />
          </Suspense>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1100px]">
          <div className="mb-7">
            <div className="mb-8 pb-8 text-left">
              <div className="mb-4 flex flex-wrap items-baseline gap-2 md:mb-6 md:gap-4">
                <span className="font-grotesk text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-8xl">
                  We
                </span>
                <span className="font-lora text-4xl font-normal italic leading-none tracking-tight text-gray-900 md:text-6xl lg:text-8xl">
                  are a
                </span>
                <span className="font-grotesk text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-8xl">
                  Creative
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-start gap-2 md:gap-4">
                <span className="gradient-text pb-4 font-grotesk text-4xl font-bold leading-relaxed tracking-tight md:text-6xl lg:text-8xl">
                  Tech & Design Studio
                </span>
              </div>
            </div>
          </div>

          <div className="mb-7 max-w-4xl">
            <p className="font-grotesk text-lg leading-relaxed text-gray-600 md:text-xl md:leading-8 lg:text-2xl">
              We build bold brands, immersive digital products, and future-forward experiences.{" "}
              <span className="font-bold text-gray-900">Smart. Disruptive. Krazy.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-24 sm:px-6 lg:px-10">
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

      <section id="projects" className="px-4 py-16 sm:px-6 lg:px-10">
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

          <div className="mx-auto max-w-[950px]">
            <div className="mb-16">
              <Link to={`/project/${featuredProject.id}`} className="group relative block cursor-pointer">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.alt}
                  className="h-96 w-full rounded-xl object-cover md:h-[450px] lg:h-[500px]"
                  decoding="async"
                />
                <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-950 shadow-lg">
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-grotesk text-2xl font-bold text-gray-900 transition-colors group-hover:text-[#5227FF] md:text-3xl">
                    {featuredProject.title}
                  </h3>
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className="group relative block cursor-pointer"
                >
                  <div className="h-80 w-full overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className={`h-full w-full object-cover transition-transform duration-700 ${
                        project.id === "skyminent"
                          ? "scale-[1.35] origin-center group-hover:scale-[1.45]"
                          : ""
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-950 shadow-lg">
                      <ArrowUpRight className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-grotesk text-xl font-bold text-gray-900 transition-colors group-hover:text-[#5227FF] md:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] border-t-2 border-gray-200 pt-16">
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

              <a
                href={siteConfig.contactEmailHref}
                className="group inline-flex items-center justify-center rounded-full bg-gray-900 px-10 py-4 font-grotesk text-lg font-bold text-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:scale-95"
              >
                <span className="transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#00b2ff] group-hover:via-[#d946ef] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent">
                  {siteConfig.contactEmail}
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-10 md:pt-10">
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
