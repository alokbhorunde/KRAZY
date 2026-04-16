import Navigation from "../components/Navigation";
import { useEffect } from "react";

export default function Contact() {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col pt-32 pb-20 px-4 sm:px-6 lg:px-10 max-w-[1100px] mx-auto w-full relative">
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <p className="font-grotesk text-sm font-bold text-gray-400 tracking-widest uppercase mb-6 block">KRAZY STUDIOS</p>
          
          <h1 className="font-grotesk font-bold text-3xl md:text-5xl lg:text-6xl leading-none tracking-tight mb-8 text-gray-900">
            Designing Bold <br className="hidden md:block"/>
            <span className="gradient-text">Digital Experiences</span>
          </h1>
          
          <p className="font-grotesk text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl mb-16">
            Have a project in mind, an idea to explore, or just want to collaborate? We’d love to hear from you.
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
            <div>
              <h2 className="font-lora italic text-xl md:text-2xl text-gray-500 mb-4 tracking-tight">Let’s Connect</h2>
              <p className="font-grotesk font-bold text-2xl text-gray-900 mb-6">Email</p>
              <a 
                href="mailto:contact@krazystudios.in"
                className="group inline-flex items-center"
              >
                <div className="font-grotesk text-lg md:text-xl font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#00b2ff] group-hover:via-[#d946ef] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 border-b-2 border-gray-900 group-hover:border-transparent pb-1">
                  contact@krazystudios.in
                </div>
              </a>
            </div>

            <div>
               <h2 className="font-lora italic text-xl md:text-2xl text-gray-500 mb-4 tracking-tight">Let’s have a Call</h2>
               <p className="font-grotesk font-bold text-2xl text-gray-900 mb-6">Book a Call</p>
               <a 
                href="https://calendly.com/krazystudios" 
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden group inline-flex items-center justify-center px-8 py-3 font-grotesk font-bold text-lg text-white rounded-full bg-gray-900 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 active:scale-95"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00b2ff] via-[#d946ef] to-[#f97316] opacity-0 group-hover:opacity-100 group-active:opacity-90 transition-opacity duration-300"></div>
                <span className="relative z-10">Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="py-12 px-4 sm:px-6 lg:px-10 max-w-[1100px] mx-auto w-full border-t border-gray-100">
         <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 font-grotesk text-base space-y-4 md:space-y-0">
           <p className="font-bold">© {new Date().getFullYear()} KrazyStudios. All rights reserved.</p>
           <p className="italic font-lora">Based in India. Available Worldwide.</p>
         </div>
      </footer>
    </div>
  );
}
