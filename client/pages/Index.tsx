import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Antigravity from "../components/Antigravity";
import GhostCursor from "../components/GhostCursor";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Creative Branding",
    description: "Crafting unforgettable identities and visual systems that turn heads.",
    image: "/creative_branding.png",
    num: "01"
  },
  {
    title: "UI/UX Design",
    description: "Designing sleek, intuitive interfaces that users love to use.",
    image: "/ui_ux.png",
    num: "02"
  },
  {
    title: "Logo Design",
    description: "Creating iconic symbols that capture your brand's essence.",
    image: "/logo_design.png",
    num: "03"
  },
  {
    title: "Poster Design",
    description: "Eye-catching visuals that demand attention and inspire action.",
    image: "/poster_design.png",
    num: "04"
  },
  {
    title: "Web & App Development",
    description: "Building digital experiences that work seamlessly across all devices.",
    image: "/webdev.png",
    num: "05"
  },
  {
    title: "Creative Strategy",
    description: "Strategic thinking that transforms ideas into impactful solutions.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
    num: "06"
  }
];

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "The Bureau impressive expertise and strategy advisory were crucial to achieving our goals. The experience was great in all dimensions.",
      author: "Xavier Kim",
      role: "CEO at Pixsellz",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/82ce49c2783b824aa186b57ae60ef88608001fe9?width=128"
    },
    {
      quote: "Working with The Bureau was an amazing experience. We have built an amazing brand together and look forward to working on more exciting projects with you all.",
      author: "Ava Chung",
      role: "Co-Founder at InBeats",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/903a67ba01b2ea49aaa1db97472348ed24c60c3e?width=128"
    },
    {
      quote: "Genuinely, your great design has helped us in 100 places. Was one of the best investments we made.",
      author: "Naomi Carter",
      role: "CTO at BrickBox",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/d603ada6b47265dfd8b884091bbf8117f0536957?width=128"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-10 relative overflow-hidden min-h-[95vh] flex items-center">
        {/* Antigravity Particle Background */}
        <div className="absolute inset-0 z-0">
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
        </div>

        <div className="w-full max-w-[1100px] mx-auto relative z-10">
          <div className="mb-7">
            {/* Dynamic Typography - Responsive version */}
            <div className="mb-8 pb-8 text-left">
              <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-4 md:mb-6">
                <span className="font-grotesk font-bold text-4xl md:text-6xl lg:text-8xl leading-none tracking-tight text-gray-900">We</span>
                <span className="font-lora italic font-normal text-4xl md:text-6xl lg:text-8xl leading-none tracking-tight text-gray-900">are a</span>
                <span className="font-grotesk font-bold text-4xl md:text-6xl lg:text-8xl leading-none tracking-tight text-gray-900">Creative</span>
              </div>
              <div className="flex flex-wrap justify-start items-baseline gap-2 md:gap-4">
                <span className="font-grotesk font-bold text-4xl md:text-6xl lg:text-8xl leading-relaxed tracking-tight gradient-text pb-4">Tech & Design Studio</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mb-7">
            <p className="font-grotesk text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-8 text-gray-600">
              We build bold brands, immersive digital products, and future-forward experiences.{" "}
              <span className="font-bold text-gray-900">Smart. Disruptive. Krazy.</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          </div>
        </div>
      </section>



      {/* Services Section — Minimalist Typography List */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-10 bg-white">
        <div className="max-w-[1100px] mx-auto w-full">
          {/* Header */}
          <div className="border-t-2 border-gray-200 pt-8 mb-16">
            <p className="font-lora italic text-xl md:text-2xl text-gray-500 mb-2 tracking-tight">Services</p>
            <h2 className="font-grotesk font-bold text-3xl md:text-5xl lg:text-6xl leading-none tracking-tight gradient-text w-fit">What we do</h2>
          </div>

          {/* Minimalist Typographic List */}
          <div className="flex flex-col gap-6 md:gap-10 pl-4 md:pl-8 lg:pl-16">
            {services.map((service, i) => (
              <div key={i} className="group cursor-pointer w-full relative py-2">
                
                {/* Left Side: Typography */}
                <div className="w-fit z-10 relative">
                  <div className="flex items-center transform origin-left transition-transform duration-300 group-hover:scale-[1.03]">
                    <h3 className="font-grotesk font-bold text-xl md:text-3xl lg:text-4xl text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00b2ff] group-hover:via-[#d946ef] group-hover:to-[#f97316] transition-all duration-300 tracking-tight">
                      {service.title}
                    </h3>
                    <span className="font-grotesk font-bold text-xl md:text-3xl lg:text-4xl text-gray-900 ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </div>
                  {/* Expandable Details */}
                  <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-0 group-hover:mt-3">
                    <p className="font-grotesk text-lg md:text-xl text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Right Side: Floating Image */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0 group-hover:-rotate-3 z-0">
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-700 ease-out scale-95 group-hover:scale-100">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="border-t-2 border-gray-200 pt-8 mb-12">
            <div>
              <p className="font-lora italic text-2xl text-gray-500 mb-2 tracking-tight">Projects</p>
              <h2 className="font-grotesk font-bold text-3xl md:text-5xl lg:text-6xl leading-none tracking-tight mb-3 gradient-text w-fit">Selected works</h2>
              <p className="font-grotesk text-2xl leading-8 text-gray-600 max-w-4xl">
                Years of experience to create unique design in agile and fast manner
              </p>
            </div>
          </div>

          {/* Projects Wrapper (Narrower) */}
          <div className="max-w-[950px] mx-auto">
            {/* Featured Project */}
            <div className="mb-16">
              <Link to="/project/safer" className="block relative group cursor-pointer">
                <img
                  src="/safer.png.png"
                  alt="SAFER – Women Safety Mobile App (UI/UX Case Study) - Featured Project"
                  className="w-full h-96 md:h-[450px] lg:h-[500px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-gray-950 rounded-full flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="mt-4">
                <h3 className="font-grotesk font-bold text-2xl md:text-3xl text-gray-900 mb-2 group-hover:text-[#5227FF] transition-colors">SAFER – Women Safety Mobile App (UI/UX Case Study)</h3>
              </div>
              </Link>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <Link to="/project/techsonix" className="block relative group cursor-pointer">
              <img
                src="/techsonix.png"
                alt="TECHSONIX SOLUTIONS Project"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-gray-950 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-grotesk font-bold text-xl md:text-2xl text-gray-900 mb-2 group-hover:text-[#5227FF] transition-colors">TECHSONIX SOLUTIONS</h3>
              </div>
            </Link>

            <Link to="/project/skyminent" className="block relative group cursor-pointer">
              <div className="w-full h-80 rounded-xl overflow-hidden">
                <img
                  src="/skyminent.png"
                  alt="SKYEMINENT CONSTRUCTIONS Project"
                  className="w-full h-full object-cover scale-[1.35] origin-center transition-transform duration-700 group-hover:scale-[1.45]"
                />
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-gray-950 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-grotesk font-bold text-xl md:text-2xl text-gray-900 mb-2 group-hover:text-[#5227FF] transition-colors">SKYEMINENT CONSTRUCTIONS</h3>
              </div>
            </Link>
          </div>
          </div>
        </div>
      </section>




      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto border-t-2 border-gray-200 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            
            {/* Left Col: Header and Text */}
            <div className="flex-1 max-w-2xl">
              <p className="font-lora italic text-xl md:text-2xl text-gray-500 mb-4 tracking-tight">Contacts</p>
              <h2 className="font-grotesk font-bold text-3xl md:text-5xl lg:text-6xl leading-none tracking-tight mb-6 gradient-text w-fit">
                Work with us
              </h2>
              <p className="font-grotesk text-xl md:text-2xl leading-relaxed text-gray-600 mb-10">
                We are eager to learn about your organization and to help you achieve a well-defined out-of-the-box visual strategy.
              </p>
              
              <a 
                href="mailto:contact@krazystudios.in" 
                className="group inline-flex items-center justify-center px-10 py-4 font-grotesk font-bold text-lg text-white rounded-full bg-gray-900 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 active:scale-95"
              >
                <span className="group-hover:bg-gradient-to-r group-hover:from-[#00b2ff] group-hover:via-[#d946ef] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  contact@krazystudios.in
                </span>
              </a>
            </div>

            {/* Right Col: Based In & Logo */}
            <div className="flex flex-col gap-10 md:pt-10">
              <div>
                <h3 className="font-lora italic text-xl text-gray-500 mb-3 tracking-tight">Based in</h3>
                <p className="font-grotesk font-bold text-2xl text-gray-900 mb-1">
                  ★ Pune, Maharastra
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3f38f14560d81eee4eb03b2b64866400a760ada5?width=58"
                  alt="KrazyStudios Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="font-grotesk font-bold text-2xl text-gray-900">KrazyStudios</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer with GhostCursor */}
      <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-950" style={{ minHeight: '500px' }}>
        {/* GhostCursor Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
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
        </div>

        {/* Footer Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full" style={{ minHeight: '300px' }}>
          {/* Giant KRAZYSTUDIOS Wordmark */}
          <div className="flex items-center justify-center flex-1 w-full px-4 pt-16">
            <h2
              className="font-grotesk font-bold text-center select-none gradient-text"
              style={{
                fontSize: 'clamp(3rem, 10vw, 10rem)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                filter: 'drop-shadow(0 0 60px rgba(217, 70, 239, 0.3))',
              }}
            >
              KRAZYSTUDIOS
            </h2>
          </div>

          {/* Bottom Bar */}
          <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 pb-8 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">
              <p className="font-grotesk text-sm text-white/50">
                © 2024 — 2025 KrazyStudios. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <a href="#" className="font-grotesk text-sm text-white/50 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="font-grotesk text-sm text-white/50 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="font-grotesk text-sm text-white/50 hover:text-white transition-colors">
                  Instagram ↗
                </a>
                <a href="#" className="font-grotesk text-sm text-white/50 hover:text-white transition-colors">
                  Twitter ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
