import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandLogo from "./BrandLogo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillBaseClasses = `bg-white border-2 border-black rounded-none flex items-center justify-between transition-all duration-300 w-full shadow-[5px_5px_0px_0px_#000000]`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-5">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Desktop: Neubrutalist container */}
        <div className={`hidden lg:flex h-[60px] pl-2 pr-2 ${pillBaseClasses}`}>
          
          {/* Logo Area */}
          <Link
            to="/"
            className="flex items-center gap-2.5 pl-4 pr-4 py-1.5 rounded-none border-2 border-transparent hover:border-black hover:bg-[#E5D4FF] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000000] transition-all duration-200"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <BrandLogo className="w-full" />
            </div>
            <span className="font-grotesk font-extrabold text-lg text-gray-900 tracking-wider uppercase">
              KRAZYSTUDIOS
            </span>
          </Link>

          {/* Nav Links Center */}
          <div className="flex items-center gap-4 xl:gap-6 h-full absolute left-1/2 -translate-x-1/2">
            {[
              { label: "About", to: "/about", color: "hover:bg-[#FFDE4D]" },
              { label: "Blog", to: "/blog", color: "hover:bg-[#C2FFD9]" },
              { label: "Services", to: "/#services", color: "hover:bg-[#FF8F8F]" },
              { label: "Projects", to: "/#projects", color: "hover:bg-[#A3D8FF]" }
            ].map((item) => {
              const isHash = item.to.includes("#");
              const isActive = location.pathname === item.to;
              const linkClasses = `px-4 py-1.5 rounded-none border-2 transition-all duration-200 font-grotesk font-bold text-lg text-black ${
                isActive 
                  ? `border-black shadow-[2px_2px_0px_0px_#000000] ${item.color.replace('hover:', '')}` 
                  : `border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_#000000] ${item.color} active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000000]`
              }`;
              
              if (isHash) {
                return (
                  <a key={item.label} href={item.to} className={linkClasses}>
                    {item.label}
                  </a>
                );
              }
              return (
                <Link key={item.label} to={item.to} className={linkClasses}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Contact CTA Right */}
          <Link
            to="/contact"
            className="flex items-center justify-center px-6 py-2 mr-1 font-grotesk font-bold text-lg border-2 border-black bg-[#5227FF] text-white rounded-none shadow-[3px_3px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000000] transition-all"
          >
            Contact Us
          </Link>
          
        </div>

        {/* Mobile: Neubrutalist header with hamburger */}
        <div className="lg:hidden">
          <div className={`${pillBaseClasses} h-[56px] px-4`}>
            {/* Mobile Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-6 h-6 flex items-center justify-center">
                <BrandLogo className="w-full" />
              </div>
              <span className="font-grotesk font-extrabold text-lg text-gray-900 tracking-wider uppercase">
                KRAZYSTUDIOS
              </span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-none border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000000] hover:bg-gray-100 hover:shadow-[3px_3px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000000] transition-all"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out origin-top ${isMenuOpen ? "max-h-[400px] opacity-100 scale-y-100 mt-2" : "max-h-0 opacity-0 scale-y-95 mt-0"}`}
          >
            <div className="bg-white border-2 border-black rounded-none p-4 shadow-[5px_5px_0px_0px_#000000] flex flex-col gap-3">
              {[
                { label: "About", to: "/about", color: "hover:bg-[#FFDE4D]" },
                { label: "Blog", to: "/blog", color: "hover:bg-[#C2FFD9]" },
                { label: "Services", to: "/#services", color: "hover:bg-[#FF8F8F]" },
                { label: "Projects", to: "/#projects", color: "hover:bg-[#A3D8FF]" }
              ].map((item) => {
                const isHash = item.to.includes("#");
                const isActive = location.pathname === item.to;
                const linkClasses = `font-grotesk font-bold text-lg text-black border-2 px-5 py-3 rounded-none text-center block transition-all ${
                  isActive
                    ? `border-black shadow-[3px_3px_0px_0px_#000000] ${item.color.replace('hover:', '')}`
                    : `border-transparent hover:border-black hover:shadow-[3px_3px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000000] ${item.color}`
                }`;

                if (isHash) {
                  return (
                    <a
                      key={item.label}
                      href={item.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={linkClasses}
                    >
                      {item.label}
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
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center h-[48px] w-full font-grotesk font-bold text-lg border-2 border-black bg-[#5227FF] text-white rounded-none shadow-[3px_3px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000000] transition-all"
                >
                  Contact Us
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
