import { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Antigravity from "../components/Antigravity";
import GhostCursor from "../components/GhostCursor";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Creative Branding",
    description: "Crafting unforgettable identities and visual systems that turn heads.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    num: "01"
  },
  {
    title: "UI/UX Design",
    description: "Designing sleek, intuitive interfaces that users love to use.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
    num: "02"
  },
  {
    title: "Logo Design",
    description: "Creating iconic symbols that capture your brand's essence.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
    num: "03"
  },
  {
    title: "Poster Design",
    description: "Eye-catching visuals that demand attention and inspire action.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    num: "04"
  },
  {
    title: "Web & App Development",
    description: "Building digital experiences that work seamlessly across all devices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
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
  const [servicesProgress, setServicesProgress] = useState(0);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  // Scroll listener for services stacking — rAF-throttled for 60fps smoothness
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const section = servicesSectionRef.current;
        if (section) {
          const rect = section.getBoundingClientRect();
          const scrollableDistance = section.offsetHeight - window.innerHeight;
          const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
          setServicesProgress(progress);
        }
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
            {/* About Us CTA */}
            <div className="relative">
              <a
                href="#about"
                className="group inline-flex items-center justify-center px-6 py-3 font-grotesk font-bold text-xl bg-transparent rounded-full border-2 border-gray-900 hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                <span className="text-gray-900 group-hover:gradient-text transition-all duration-300 ease-in-out">
                  About us
                </span>
                <svg
                  className="ml-2 w-5 h-5 text-gray-900 transition-all duration-300 ease-in-out transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section — Sticky Stacking Cards */}
      <section
        ref={servicesSectionRef}
        className="relative bg-white"
        style={{ height: `${(services.length + 1) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="h-full flex flex-col px-4 sm:px-6 lg:px-10">
            <div className="max-w-[1100px] mx-auto w-full pt-24">
              {/* Frozen Header */}
              <div className="border-t-2 border-gray-200 pt-8 mb-8">
                <p className="font-lora italic text-xl md:text-2xl text-gray-500 mb-2 tracking-tight">Services</p>
                <h2 className="font-grotesk font-bold text-3xl md:text-5xl lg:text-6xl leading-none tracking-tight mb-3 gradient-text">What we do</h2>
              </div>

              {/* Stacking Cards Viewport */}
              <div className="relative" style={{ height: '22rem' }}>
                {services.map((service, i) => {
                  // cardProgress: 0 = not yet visible, 0→1 = sliding in, 1 = fully stacked
                  const cardProgress = Math.max(0, Math.min(1, servicesProgress * services.length - i));
                  
                  // Card slides up from below and lands at Y=0
                  const translateY = cardProgress >= 1 ? 0 : (1 - cardProgress) * 500;
                  
                  // Fully stacked cards: the TOP card in the stack = highest z-index
                  // Each new card that arrives gets a HIGHER z-index → lands on top
                  const zIndex = cardProgress > 0 ? i + 1 : 0;

                  return (
                    <div
                      key={i}
                      className="absolute inset-x-0 top-0 rounded-3xl border border-gray-100 bg-[#fafafa] p-8 md:p-10"
                      style={{
                        height: '20rem',
                        transform: `translateY(${translateY}px)`,
                        opacity: cardProgress > 0.01 ? 1 : 0,
                        zIndex,
                        boxShadow: cardProgress >= 1 ? '0 -4px 30px rgba(0,0,0,0.08)' : '0 4px 30px rgba(0,0,0,0.06)',
                        willChange: 'transform, opacity',
                        transformOrigin: 'top center',
                      }}
                    >
                      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center h-full">
                        <div className="flex-1">
                          <span className="font-grotesk text-sm font-bold text-gray-400 tracking-widest uppercase mb-3 block">{service.num}</span>
                          <h3 className="font-grotesk font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-3 gradient-text">
                            {service.title}
                          </h3>
                          <p className="font-grotesk text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                            {service.description}
                          </p>
                        </div>
                        <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 md:h-56 object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="border-t-2 border-gray-200 pt-8 mb-12">
            <div>
              <p className="font-lora italic text-2xl text-gray-500 mb-2 tracking-tight">Projects</p>
              <h2 className="font-grotesk font-bold text-6xl leading-none text-gray-900 tracking-tight mb-3">Selected works</h2>
              <p className="font-grotesk text-2xl leading-8 text-gray-600 max-w-4xl">
                Years of experience to create unique design in agile and fast manner
              </p>
            </div>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <div className="relative group cursor-pointer">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c58dd61e4cdf3f3e13645b2a5e25084f474b27f9?width=2272"
                alt="The Nature - Featured Project"
                className="w-full h-140 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                  <ChevronRight className="w-5 h-5 text-gray-900" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-grotesk font-bold text-3xl text-gray-900 mb-2">The Nature</h3>
                <p className="font-grotesk text-xl text-gray-600 mb-5">
                  Pushing creative boundaries and technologies, you've come to the right place
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((tag) => (
                    <div key={tag} className="w-12 h-8 border-2 border-gray-300 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <div className="relative group cursor-pointer">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/58a5051870cd99b37198a146e7951f57d69c4985?width=1120"
                alt="Bizantine Project"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                  <ChevronRight className="w-5 h-5 text-gray-900" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-grotesk font-bold text-3xl text-gray-900 mb-2">Bizantine</h3>
                <p className="font-grotesk text-xl text-gray-600 mb-5">
                  This way, we can cut out all the project management and focus just on the design processes
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((tag) => (
                    <div key={tag} className="w-12 h-8 border-2 border-gray-300 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e8a7738c6415ec4818f8a16d0c2e596bdddec929?width=1120"
                alt="Countertouch Project"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                  <ChevronRight className="w-5 h-5 text-gray-900" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-grotesk font-bold text-3xl text-gray-900 mb-2">Countertouch</h3>
                <p className="font-grotesk text-xl text-gray-600 mb-5">
                  Years of experience to create unique design in agile and fast manner
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3].map((tag) => (
                    <div key={tag} className="w-12 h-8 border-2 border-gray-300 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* See All Projects CTA */}
          <div className="text-center">
            <a href="#" className="inline-flex items-center justify-center px-8 md:px-32 lg:px-96 py-3 font-grotesk font-bold text-lg md:text-xl gradient-text bg-gray-50 rounded-full border-2 border-gray-200 hover:bg-gray-100 transition-colors">
              See all projects
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="border-t-2 border-gray-200 pt-8 mb-16">
            <div>
              <p className="font-lora italic text-2xl text-gray-500 mb-2 tracking-tight">Testimonials</p>
              <h2 className="font-grotesk font-bold text-6xl leading-none text-gray-900 tracking-tight">Clients about us</h2>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center min-h-80">
              <div className="text-center max-w-4xl">
                <blockquote className="font-grotesk font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-gray-900 mb-6 tracking-tight">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center md:text-left">
                    <div className="font-grotesk font-bold text-lg text-gray-900">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="font-grotesk text-base text-gray-500">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="border-t-2 border-gray-200 pt-8 mb-12">
            <div>
              <p className="font-lora italic text-2xl text-gray-500 mb-2 tracking-tight">Blog</p>
              <h2 className="font-grotesk font-bold text-6xl leading-none text-gray-900 tracking-tight">Latest articles</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/69d6c8a270b9464370876c31e59d6ad0b81ce70d?width=722",
                date: "May 20, 2023",
                title: "How to Solve Issues With Design Web",
                excerpt: "Used by these companies to maximize their online presence and reach their goals"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/59486e5760ffb7d981123d637c1b3b646acc1939?width=728",
                date: "May 10, 2023",
                title: "24 Hours to Improving Design Web",
                excerpt: "This article explores the potential of design startup web to revolutionize the way businesses create"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/bed74a3a17f75e8e97ad1b4b467af28dfc60357f?width=738",
                date: "Mar 16, 2023",
                title: "The Most Innovative Things Happening With Design Web",
                excerpt: "It provides an in-depth look at the tools and strategies"
              }
            ].map((article, index) => (
              <article key={index} className="group cursor-pointer">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 object-cover mb-4 rounded-xl"
                />
                <div className="space-y-2">
                  <time className="font-grotesk text-base text-gray-400 tracking-tight">
                    {article.date}
                  </time>
                  <h3 className="font-grotesk font-bold text-3xl leading-9 text-gray-900 tracking-tight">
                    {article.title}
                  </h3>
                  <p className="font-grotesk text-xl leading-7 text-gray-600">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center justify-center px-8 md:px-32 lg:px-96 py-3 font-grotesk font-bold text-lg md:text-xl gradient-text bg-gray-50 rounded-full border-2 border-gray-200 hover:bg-gray-100 transition-colors">
              See all articles
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="border-t-2 border-gray-200 pt-8 mb-20">
            <div>
              <p className="font-lora italic text-2xl text-gray-500 mb-2 tracking-tight">Contacts</p>
              <h2 className="font-grotesk font-bold text-6xl leading-none text-gray-900 tracking-tight mb-8">Work with us</h2>
              <p className="font-grotesk text-2xl leading-8 text-gray-600 max-w-4xl mb-8">
                We are eager to learn about your organization and to help you achieve a well-defined out-of-the-box visual strategy.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <p className="font-grotesk text-2xl text-gray-600 mb-2">You can contact us at:</p>
              <a href="mailto:info@krazy.io" className="font-grotesk font-bold text-5xl text-gray-900 hover:opacity-70 transition-opacity">
                info@krazy.io
              </a>
            </div>

            <div className="mb-20">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 font-grotesk font-bold text-xl text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors">
                Get in touch
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-grotesk text-2xl text-gray-500 mb-3">Based in</h3>
                <p className="font-grotesk font-bold text-3xl text-gray-900 mb-6">
                  ★ Pune, Maharastra
                </p>
                <p className="font-grotesk text-2xl text-gray-600">
                  (201) 555-0124
                </p>
              </div>

              <div>
                <h3 className="font-grotesk text-2xl text-gray-500 mb-3">Our socials</h3>
                <div className="space-y-2">
                  <a href="#" className="block font-grotesk font-bold text-3xl text-gray-900 hover:opacity-70 transition-opacity">
                    Instagram
                  </a>
                  <a href="#" className="block font-grotesk font-bold text-3xl text-gray-900 hover:opacity-70 transition-opacity">
                    Dribbble
                  </a>
                  <a href="#" className="block font-grotesk font-bold text-3xl text-gray-900 hover:opacity-70 transition-opacity">
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3f38f14560d81eee4eb03b2b64866400a760ada5?width=58"
                alt="KrazyStudios Logo"
                className="w-7 h-8"
              />
              <span className="font-grotesk font-bold text-2xl text-gray-900">KrazyStudios</span>
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full" style={{ minHeight: '500px' }}>
          {/* Giant KRAZYSTUDIOS Wordmark */}
          <div className="flex items-center justify-center flex-1 w-full px-4">
            <h2
              className="font-grotesk font-bold text-center select-none"
              style={{
                fontSize: 'clamp(3rem, 10vw, 10rem)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 40%, #5227FF 70%, #00b2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 60px rgba(82, 39, 255, 0.3))',
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
