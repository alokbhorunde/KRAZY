import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GlassSurface from "./GlassSurface";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const glassProps = {
    borderRadius: 50,
    borderWidth: 0.07,
    brightness: 50,
    opacity: 1,
    blur: 2,
    displace: 3.2,
    backgroundOpacity: 0.1,
    saturation: 1,
    distortionScale: 100,
    redOffset: 0,
    greenOffset: 10,
    blueOffset: 20,
    mixBlendMode: "screen" as const,
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-5">
      <div className="max-w-[1100px] mx-auto">
        {/* Desktop: 3 separate pills */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Pill 1 — Logo (left) */}
          <GlassSurface
            width="auto"
            height={66}
            {...glassProps}
            className={`transition-all duration-300 shrink-0 ${hasScrolled ? "shadow-lg" : ""}`}
            style={{ border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <Link to="/" className="flex items-center gap-2.5 px-5 py-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3f38f14560d81eee4eb03b2b64866400a760ada5?width=58"
                  alt="KrazyStudios Logo"
                  className="w-full h-auto"
                />
              </div>
              <span className="font-grotesk font-bold text-base text-gray-900 tracking-wider uppercase">
                KRAZYSTUDIOS
              </span>
            </Link>
          </GlassSurface>

          {/* Right group: Nav Links pill + Contact pill */}
          <div className="flex items-center gap-3">
            {/* Pill 2 — Nav Links */}
            <GlassSurface
              width="auto"
              height={66}
              {...glassProps}
              className={`transition-all duration-300 ${hasScrolled ? "shadow-lg" : ""}`}
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center gap-8 xl:gap-10 px-7 py-3">
                {["About", "Services", "Projects", "Blog"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="font-grotesk font-medium text-lg text-gray-900 hover:text-black transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5227FF] to-[#00b2ff] group-hover:w-full transition-all duration-300 ease-out" />
                  </Link>
                ))}
              </div>
            </GlassSurface>

            {/* Pill 3 — Contact CTA (glass) */}
            <GlassSurface
              width="auto"
              height={66}
              {...glassProps}
              className={`transition-all duration-300 shrink-0 ${hasScrolled ? "shadow-lg" : ""}`}
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 font-grotesk font-semibold text-[15px]"
              >
                <span className="bg-gradient-to-r from-[#a855f7] via-[#5227FF] to-[#00b2ff] bg-clip-text text-transparent">
                  Contact Us
                </span>
              </Link>
            </GlassSurface>
          </div>
        </div>

        {/* Mobile: Single pill with hamburger */}
        <div className="lg:hidden">
          <GlassSurface
            width="100%"
            height="auto"
            {...glassProps}
            className={`transition-all duration-300 ${hasScrolled ? "shadow-lg" : ""}`}
            style={{ border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <div className="flex justify-between items-center w-full h-[56px] px-4">
              <Link to="/" className="flex items-center gap-2 shrink-0">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/3f38f14560d81eee4eb03b2b64866400a760ada5?width=58"
                    alt="KrazyStudios Logo"
                    className="w-full h-auto"
                  />
                </div>
                <span className="font-grotesk font-bold text-[15px] text-gray-900 tracking-wider uppercase">
                  KRAZYSTUDIOS
                </span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#5227FF] to-[#00b2ff] p-[1.5px]"
                aria-label="Toggle navigation menu"
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </div>
              </button>
            </div>
          </GlassSurface>

          {/* Mobile Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${isMenuOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}
          >
            <GlassSurface
              width="100%"
              height="auto"
              {...glassProps}
              borderRadius={24}
              brightness={92}
              opacity={0.97}
              blur={16}
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="flex flex-col gap-1 w-full px-5 py-4">
                {["About", "Services", "Projects", "Blog"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-grotesk font-medium text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 px-4 py-2.5 rounded-xl"
                  >
                    {item}
                  </Link>
                ))}
                <div className="px-4 pt-2 pb-1">
                  <div className="relative p-[1.5px] rounded-full bg-gradient-to-r from-[#5227FF] via-[#a855f7] to-[#00b2ff] w-fit">
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-flex items-center justify-center px-5 py-2 font-grotesk font-semibold text-sm bg-white rounded-full"
                    >
                      <span className="bg-gradient-to-r from-[#a855f7] via-[#5227FF] to-[#00b2ff] bg-clip-text text-transparent">
                        Contact Us
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </GlassSurface>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
