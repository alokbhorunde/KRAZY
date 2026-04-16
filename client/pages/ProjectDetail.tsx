import { useParams, Navigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";
import { siteConfig } from "@/lib/site-config";

type ProjectData = {
  title: string;
  category: string;
  duration: string;
  behance: string;
  renderContent: () => React.ReactNode;
};

const projectsData: Record<string, ProjectData> = {
  safer: {
    title: "SAFER – Women’s Safety App",
    category: "App Design",
    duration: "2 weeks",
    behance: siteConfig.projectCaseStudies.safer,
    renderContent: () => (
      <>
        {/* Section: Overview */}
        <div className="mb-8 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Overview</h3>
          <p className="text-xl leading-8 text-gray-800">
            SAFER is a powerful emergency tool designed to give women real-time security at their fingertips. With features like one-tap SOS alerts, live location tracking, and trusted contacts integration, the app ensures instant response during unsafe situations.
          </p>
        </div>

        {/* Section: Design Approach */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Design Approach</h3>
          <p className="text-lg text-gray-700 mb-4">The design system of SAFER focuses on clarity, speed, and user-centered interactions:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1">
            <li>Bold SOS button for immediate emergency action.</li>
            <li>Clean, minimal UI with clear hierarchy and strong contrast.</li>
            <li>Bright, safe color palette (Red for urgency, Yellow for visibility).</li>
            <li>Simple onboarding for quick setup in critical moments.</li>
            <li>Responsive and intuitive flows that minimize friction under stress.</li>
          </ul>
        </div>

        {/* Section: Core Features */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Core Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1">
            <li>Instant SOS Activation with location sharing.</li>
            <li>Safety Timer to auto-alert if not deactivated.</li>
            <li>Trusted Circle with live tracking.</li>
            <li>Emergency Directory for quick police/helpline access.</li>
            <li>Activity Log to track alerts and routes.</li>
          </ul>
        </div>

        {/* Section: Typography & Colors */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Typography & Colors</h3>
          <p className="text-lg text-gray-800 mb-3"><span className="font-bold">Typeface:</span> Nunito Sans – approachable, modern, and highly legible.</p>
          <ul className="space-y-3 text-gray-800 text-lg">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-[#F14336] shadow-sm"></div>
              <span><strong>Red #F14336</strong> → urgency & alerts.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-[#FFD200] shadow-sm"></div>
              <span><strong>Yellow #FFD200</strong> → visibility & positivity.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-[#333333] shadow-sm"></div>
              <span><strong>Black/Grey neutrals</strong> for readability.</span>
            </li>
          </ul>
        </div>

        {/* Section: User Flow */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">User Flow</h3>
          <p className="text-lg font-bold text-[#5227FF] mb-3">Simple → Fast → Reliable</p>
          <p className="text-lg text-gray-800">
            From splash screen to SOS trigger, every step was designed to require minimal taps and maximum speed, ensuring safety under pressure.
          </p>
        </div>

        {/* Section: Conclusion */}
        <div className="font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Conclusion</h3>
          <p className="text-lg text-gray-800">
            SAFER is not just an app, but a companion in critical moments, built with empathy, clarity, and trust. Its design ensures women feel empowered, connected, and protected — anytime, anywhere.
          </p>
        </div>
      </>
    )
  },
  techsonix: {
    title: "Techsonix Solutions",
    category: "Brand Identity",
    duration: "2 weeks",
    behance: siteConfig.projectCaseStudies.techsonix,
    renderContent: () => (
      <>
        {/* Section: Introduction */}
        <div className="mb-8 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Introduction</h3>
          <p className="text-xl leading-8 text-gray-800">
            Techsonix Solutions blends modern creativity with strategic precision, delivering a strong and memorable brand identity for a forward-looking technology company. Built to reflect trust, innovation, and professionalism, this brand system ensures that Techsonix can communicate its values with impact across all platforms.
          </p>
        </div>

        {/* Section: My Approach */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">My Approach</h3>
          <p className="text-lg text-gray-800">
            The brand identity was designed with a clear focus on clarity, adaptability, and recognition. The approach was to create a logo and visual system that feels modern yet timeless, balancing bold aesthetics with functionality. By unifying colors, typography, and exclusion zones, Techsonix’s branding ensures consistency across digital, print, and professional applications.
          </p>
        </div>

        {/* Section: Vision & Innovation */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Vision & Innovation</h3>
          <p className="text-lg text-gray-700 mb-4">Techsonix’s identity embraces a forward-thinking vision, crafted to represent:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1 mb-4">
            <li>Innovation in technology solutions</li>
            <li>Trust & stability for clients and partners</li>
            <li>Energy & dynamism through bold gradient hues</li>
          </ul>
          <p className="text-lg text-gray-800">
            The use of dynamic gradients, clean typography, and minimalistic design rules creates a brand that is both engaging and reliable.
          </p>
        </div>

        {/* Section: Identifying Unique Challenges */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Identifying Unique Challenges</h3>
          <p className="text-lg text-gray-800 mb-4">
            In today’s competitive landscape, a technology brand must do more than showcase its services—it must stand out, tell a story, and inspire confidence. Challenges addressed included:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1 mb-4">
            <li>Creating a logo that feels modern yet versatile</li>
            <li>Designing a system that maintains readability across formats</li>
            <li>Establishing visual consistency across all brand assets</li>
          </ul>
          <p className="text-lg text-gray-800">
            Techsonix solves this by offering a professional, recognizable identity system that works across both digital and physical applications.
          </p>
        </div>

        {/* Section: Resolving Complex Problems */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Resolving Complex Problems</h3>
          <p className="text-lg text-gray-800 mb-4">Building a scalable visual identity requires careful planning:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1 mb-4">
            <li>Ensuring logo legibility at small and large scales</li>
            <li>Defining exclusion zones to maintain clarity</li>
            <li>Establishing color hierarchy for consistency</li>
            <li>Choosing fonts that match the brand personality</li>
          </ul>
          <p className="text-lg text-gray-800">
            This identity system provides clarity, flexibility, and consistency, making brand deployment effortless.
          </p>
        </div>

        {/* Section: User-Centric Design */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">User-Centric Design</h3>
          <p className="text-lg text-gray-800 mb-4">Every branding element was crafted with usability in mind:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1">
            <li>Logo variations (vertical & horizontal) for multiple applications</li>
            <li>Consistent typography (Miriam Libre) for brand communication</li>
            <li>Color palette designed to evoke trust, energy, and stability</li>
            <li>Mockups demonstrating real-world use (business cards, signage, etc.)</li>
          </ul>
        </div>

        {/* Section: Meeting User Needs */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Meeting User Needs</h3>
          <p className="text-lg text-gray-800 mb-4">
            Whether applied in corporate presentations, websites, business cards, or signage, Techsonix’s brand identity is scalable and versatile. It provides:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1">
            <li>Professional credibility</li>
            <li>Consistency across touchpoints</li>
            <li>Clear brand storytelling</li>
          </ul>
        </div>

        {/* Section: Detailed Identity System & Features */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Detailed Identity System & Features</h3>
          <ul className="space-y-4 text-gray-800 text-lg">
            <li><span className="font-bold">Logo Variations:</span> Vertical and horizontal formats for flexible use</li>
            <li>
              <span className="font-bold">Color Palette:</span>
              <ul className="mt-3 space-y-3 ml-2 border-l-2 border-gray-100 pl-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#302a2a] shadow-sm"></div>
                  <span><strong>Black #302a2a</strong> (strength & stability)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-r from-[#f63559] via-[#f24e62] to-[#ef2c70] shadow-sm"></div>
                  <span><strong>Gradient</strong> (#f63559, #f24e62, #f14a66, #ef2c70) (energy & innovation)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#e7e2e2] shadow-sm border border-gray-200"></div>
                  <span><strong>Light gray #e7e2e2</strong> (balance & neutrality)</span>
                </li>
              </ul>
            </li>
            <li className="pt-2"><span className="font-bold">Typography:</span> Miriam Libre – clean, modern, and professional</li>
            <li><span className="font-bold">Exclusion Zones:</span> Defined safe spacing to protect logo clarity</li>
            <li><span className="font-bold">Applications:</span> Business cards, signage, stationery, and digital platforms</li>
          </ul>
        </div>

        {/* Section: Accessibility & Optimization */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Accessibility & Optimization</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1">
            <li>Designed for legibility across devices and print sizes</li>
            <li>Strong contrast ratios for accessibility compliance</li>
            <li>Simple, scalable design for fast reproduction in all formats</li>
            <li>Flexible enough for digital-first and print-first applications</li>
          </ul>
        </div>

        {/* Section: Conclusion */}
        <div className="font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Conclusion</h3>
          <p className="text-lg text-gray-800">
            Techsonix Solutions’ brand identity is more than just a logo—it’s a strategic visual framework that communicates professionalism, innovation, and trust. By combining modern design, usability, and consistency, this system ensures the brand stands out while remaining adaptable across platforms.
          </p>
        </div>
      </>
    )
  },
  skyminent: {
    title: "Skyminent Construction",
    category: "Brand Identity",
    duration: "2 weeks",
    behance: siteConfig.projectCaseStudies.skyminent,
    renderContent: () => (
      <>
        {/* Section: Introduction */}
        <div className="mb-8 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Introduction</h3>
          <p className="text-xl leading-8 text-gray-800">
            Skyminent Construction represents strength, precision, and modern infrastructure. The brand identity was crafted to reflect a forward-thinking construction company that combines engineering excellence with contemporary design aesthetics. Our goal was to build a visual system that communicates reliability, scalability, and professionalism across all touchpoints.
          </p>
        </div>

        {/* Section: Our Approach */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Our Approach</h3>
          <p className="text-lg text-gray-800 mb-4">
            Our approach focused on creating a bold, structured, and memorable identity rooted in architectural thinking.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            We designed a logo that integrates the initials “SC” with structural elements, forming a visual that resembles a building framework. This allowed us to directly connect the brand with its core industry while maintaining a modern aesthetic.
          </p>
          <p className="text-lg text-gray-800 mb-4">We emphasized:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1 mb-4">
            <li>Clarity through clean geometric construction</li>
            <li>Scalability for real-world applications</li>
            <li>Consistency across all brand touchpoints</li>
          </ul>
          <p className="text-lg text-gray-800">
            By combining structured forms with vibrant gradients, we created a system that balances technical strength with visual impact.
          </p>
        </div>

        {/* Section: Vision & Brand Meaning */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Vision & Brand Meaning</h3>
          <p className="text-lg text-gray-800 mb-4">The identity was built around three core pillars:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1 mb-4">
            <li><span className="font-bold">Strength & Stability</span> – conveyed through bold, rigid forms</li>
            <li><span className="font-bold">Growth & Progress</span> – expressed via upward structural lines</li>
            <li><span className="font-bold">Modern Construction</span> – reflected through gradients and minimalism</li>
          </ul>
          <p className="text-lg text-gray-800">
            The logo acts as a symbolic representation of architecture, elevation, and engineered precision.
          </p>
        </div>

        {/* Section: Identifying Unique Challenges */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Identifying Unique Challenges</h3>
          <p className="text-lg text-gray-800 mb-4">While designing the identity, we addressed key challenges:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1">
            <li>Making the brand feel professional yet visually distinctive</li>
            <li>Ensuring the logo remains clear across different scales and surfaces</li>
            <li>Maintaining contrast and visibility in various environments</li>
            <li>Creating a system that works seamlessly across print and digital mediums</li>
          </ul>
        </div>

        {/* Section: Resolving Complex Problems */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Resolving Complex Problems</h3>
          <p className="text-lg text-gray-800 mb-4">To build a scalable and reliable identity system, we:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1 mb-4">
            <li>Designed the logo using precise vector geometry</li>
            <li>Defined exclusion zones to maintain clarity and spacing</li>
            <li>Created multiple logo variations for flexible usage</li>
            <li>Established a color hierarchy for consistency</li>
          </ul>
          <p className="text-lg text-gray-800">
            This ensured that the brand remains strong, adaptable, and recognizable in every application.
          </p>
        </div>

        {/* Section: User-Centric Design */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">User-Centric Design</h3>
          <p className="text-lg text-gray-800 mb-4">We focused on practicality and usability throughout the system:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1 mb-4">
            <li><span className="font-bold">Logo Variations</span> for different formats and placements</li>
            <li><span className="font-bold">Consistent Typography</span> for clear communication</li>
            <li><span className="font-bold">Balanced Color Palette</span> for trust and energy</li>
            <li><span className="font-bold">Real-world Mockups</span> to validate application across mediums</li>
          </ul>
          <p className="text-lg text-gray-800">
            Each element was crafted to perform effectively in real business scenarios.
          </p>
        </div>

        {/* Section: Meeting Business Needs */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Meeting Business Needs</h3>
          <p className="text-lg text-gray-800 mb-4">Our branding solution enables Skyminent Construction to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1">
            <li>Build strong professional credibility</li>
            <li>Maintain consistency across platforms</li>
            <li>Communicate a clear and confident brand identity</li>
            <li>Adapt seamlessly across marketing and operational use</li>
          </ul>
        </div>

        {/* Section: Detailed Identity System & Features */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Detailed Identity System & Features</h3>
          <ul className="space-y-4 text-gray-800 text-lg">
            <li>
              <span className="font-bold">Logo Variations:</span> Vertical, Horizontal, Icon
            </li>
            <li>
              <span className="font-bold">Color Palette:</span>
              <ul className="mt-3 space-y-3 ml-2 border-l-2 border-gray-100 pl-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#1E3A8A] shadow-sm"></div>
                  <span><strong>Deep Blue</strong> – stability and trust</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-r from-[#F97316] to-[#FB923C] shadow-sm"></div>
                  <span><strong>Orange Gradient</strong> – energy and growth</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#F3F4F6] shadow-sm border border-gray-200"></div>
                  <span><strong>Neutral tones</strong> – balance and clarity</span>
                </li>
              </ul>
            </li>
            <li className="pt-2"><span className="font-bold">Typography:</span> Modern sans-serif, Clean and highly readable</li>
            <li><span className="font-bold">Exclusion Zones:</span> Defined spacing system for logo clarity</li>
            <li><span className="font-bold">Applications:</span> Business cards, Signage and site branding, Digital platforms, Corporate materials</li>
          </ul>
        </div>

        {/* Section: Accessibility & Optimization */}
        <div className="mb-10 font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Accessibility & Optimization</h3>
          <p className="text-lg text-gray-800 mb-4">We ensured the identity is:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg ml-1">
            <li>Highly legible across sizes and devices</li>
            <li>Designed with strong contrast for visibility</li>
            <li>Scalable for both large-format and micro usage</li>
            <li>Flexible for print and digital environments</li>
          </ul>
        </div>

        {/* Section: Conclusion */}
        <div className="font-grotesk">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">Conclusion</h3>
          <p className="text-lg text-gray-800 mb-4">
            Skyminent Construction’s identity is more than just a logo—it’s a strategic visual framework built to represent strength, growth, and modern construction.
          </p>
          <p className="text-lg text-gray-800">
            Through a combination of architectural symbolism, bold color systems, and structured design principles, we created a brand that is professional, scalable, and built to last.
          </p>
        </div>
      </>
    )
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id || !projectsData[id]) {
    return <Navigate to="/404" replace />;
  }

  const project = projectsData[id];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content Area */}
      <main className="pt-32 pb-24">
        {/* Top Header Section */}
        <section className="px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1100px] mx-auto min-h-[40vh] flex flex-col justify-end pb-12 border-b border-gray-100 relative">
            
            {/* Subtle background vertical lines */}
            <div className="absolute inset-x-0 h-full w-full pointer-events-none flex justify-around">
              <div className="w-px h-full bg-gray-50/50"></div>
              <div className="w-px h-full bg-gray-50/50"></div>
              <div className="w-px h-full bg-gray-50/50 hidden md:block"></div>
            </div>

            <div className="relative z-10 w-full">
              {/* Breadcrumbs */}
              <div className="mb-6 font-grotesk text-base">
                <span className="text-gray-900 font-medium">Projects</span>
                <span className="text-gray-300 mx-2">/</span>
                <span className="text-gray-400">{project.title}</span>
              </div>

              {/* Huge Title */}
              <h1 className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[1.1] tracking-tight text-gray-900 mb-16">
                {project.title}
              </h1>

              {/* Tag Bubbles */}
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((tag) => (
                  <div key={tag} className="w-16 h-8 border-[1.5px] border-gray-900 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Info Grid */}
        <section className="px-4 sm:px-6 lg:px-10 mt-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative">
              
              {/* Vertical line separator on desktop */}
              <div className="hidden md:block absolute left-[58%] top-0 bottom-0 w-px bg-gray-100"></div>

              {/* Left Column (Rich Content & Link) */}
              <div className="md:col-span-7 pr-0 md:pr-12">
                
                {/* Dynamic Content Provided by Object */}
                {project.renderContent()}

                {/* Behance Link */}
                <div className="mt-12 mb-16">
                  <a 
                    href={project.behance} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-950 text-white rounded-full font-grotesk font-semibold hover:bg-gray-800 transition-colors"
                  >
                    <span className="bg-gradient-to-r from-[#a855f7] to-[#5227FF] bg-clip-text text-transparent">View Case Study ↗</span>
                  </a>
                </div>

              </div>

              {/* Right Column (Category, Duration) */}
              <div className="md:col-span-5 md:pl-10">
                <div className="flex flex-col gap-12 sticky top-32">
                  <div>
                    <h4 className="font-grotesk font-bold text-xl text-gray-900 mb-2">Category</h4>
                    <p className="font-grotesk text-lg text-gray-700">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="font-grotesk font-bold text-xl text-gray-900 mb-2">Duration</h4>
                    <p className="font-grotesk text-lg text-gray-700">{project.duration}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer from Index.tsx */}
      <SiteFooter />
    </div>
  );
}



