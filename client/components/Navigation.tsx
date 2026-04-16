import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  const pillBaseClasses = `bg-white border-2 border-gray-900 rounded-full flex items-center justify-between transition-all duration-300 w-full ${
    hasScrolled ? "shadow-[0_4px_12px_rgba(0,0,0,0.05)]" : ""
  }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-5">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Desktop: Single unified pill */}
        <div className={`hidden lg:flex h-[60px] pl-2 pr-2 ${pillBaseClasses}`}>
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2.5 pl-4 pr-6 h-full hover:opacity-70 transition-opacity">
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3f38f14560d81eee4eb03b2b64866400a760ada5?width=58"
                alt="KrazyStudios Logo"
                className="w-full h-auto"
              />
            </div>
            <span className="font-grotesk font-bold text-lg text-gray-900 tracking-wider uppercase">
              KRAZYSTUDIOS
            </span>
          </Link>

          {/* Nav Links Center */}
          <div className="flex items-center gap-8 xl:gap-12 h-full absolute left-1/2 -translate-x-1/2">
            {[
              { label: "About", to: "/about" },
              { label: "Services", to: "/#services" },
              { label: "Projects", to: "/#projects" }
            ].map((item) => {
              const isHash = item.to.includes("#");
              const linkClasses = "group font-grotesk font-semibold text-lg";
              const spanClasses = "bg-gradient-to-r from-[#00b2ff] via-[#d946ef] to-[#f97316] bg-clip-text text-gray-900 group-hover:text-transparent transition-colors duration-300";
              
              if (isHash) {
                return (
                  <a key={item.label} href={item.to} className={linkClasses}>
                    <span className={spanClasses}>{item.label}</span>
                  </a>
                );
              }
              return (
                <Link key={item.label} to={item.to} className={linkClasses}>
                  <span className={spanClasses}>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Contact CTA Right */}
          <Link
            to="/contact"
            className="flex items-center justify-center px-6 py-2.5 mr-1 font-grotesk font-bold text-lg rounded-full hover:bg-gray-200 transition-colors"
          >
            <span className="bg-gradient-to-r from-[#00b2ff] via-[#d946ef] to-[#f97316] bg-clip-text text-transparent">
              Contact Us
            </span>
          </Link>
          
        </div>

        {/* Mobile: Single pill with hamburger */}
        <div className="lg:hidden">
          <div className={`${pillBaseClasses} h-[56px] px-4`}>
            {/* Mobile Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-6 h-6 flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3f38f14560d81eee4eb03b2b64866400a760ada5?width=58"
                  alt="KrazyStudios Logo"
                  className="w-full h-auto"
                />
              </div>
              <span className="font-grotesk font-bold text-lg text-gray-900 tracking-wider uppercase">
                KRAZYSTUDIOS
              </span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-900 bg-white hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu (Secondary Pill Shape) */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out origin-top ${isMenuOpen ? "max-h-[400px] opacity-100 scale-y-100 mt-2" : "max-h-0 opacity-0 scale-y-95 mt-0"}`}
          >
            <div className="bg-white border-2 border-gray-900 rounded-3xl p-4 shadow-lg flex flex-col gap-2">
              {[
                { label: "About", to: "/about" },
                { label: "Services", to: "/#services" },
                { label: "Projects", to: "/#projects" }
              ].map((item) => {
                const isHash = item.to.includes("#");
                const linkClasses = "group font-grotesk font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 px-5 py-3 rounded-2xl text-center block";
                const spanClasses = "bg-gradient-to-r from-[#00b2ff] via-[#d946ef] to-[#f97316] bg-clip-text text-gray-900 group-hover:text-transparent transition-colors duration-300";

                if (isHash) {
                  return (
                    <a
                      key={item.label}
                      href={item.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={linkClasses}
                    >
                      <span className={spanClasses}>{item.label}</span>
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={linkClasses}
                  >
                    <span className={spanClasses}>{item.label}</span>
                  </Link>
                );
              })}
              <div className="px-2 pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center h-[48px] w-full font-grotesk font-bold text-lg border-2 border-gray-900 bg-white rounded-full hover:bg-gray-50 transition-colors"
                >
                  <span className="bg-gradient-to-r from-[#00b2ff] via-[#d946ef] to-[#f97316] bg-clip-text text-transparent">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navigation;
