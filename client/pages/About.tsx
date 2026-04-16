import Navigation from "../components/Navigation";
import { useEffect } from "react";

export default function About() {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Design First",
      desc: "Design is not just aesthetics—it’s functionality, clarity, and experience. Every decision we make is driven by purpose, ensuring solutions are both beautiful and effective."
    },
    {
      title: "Growth Mindset",
      desc: "We constantly evolve—learning, experimenting, and refining our craft. This mindset allows us to stay ahead in a rapidly changing design and technology landscape."
    },
    {
      title: "Creative Excellence",
      desc: "We don’t create average work. Every project is approached with precision and intent, delivering designs that are refined, distinctive, and memorable."
    },
    {
      title: "Purpose-Driven Work",
      desc: "We design with intention. Beyond visuals, our focus is on solving real problems and creating meaningful impact through every experience we build."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-10 max-w-[1100px] mx-auto min-h-[65vh] flex flex-col justify-center relative">
        <p className="font-lora italic text-xl md:text-2xl text-gray-500 mb-6 tracking-tight">Based in India</p>
        <h1 className="font-grotesk font-bold text-3xl md:text-5xl lg:text-6xl leading-none tracking-tight mb-10 gradient-text w-fit">
          About Us
        </h1>
        
        <div className="space-y-8 max-w-4xl">
          <p className="font-grotesk text-xl md:text-2xl leading-relaxed text-gray-600">
            Krazy Studios is a creative design studio dedicated to crafting bold, impactful, and meaningful digital experiences. We specialise in UI/UX design, brand identity, and product thinking—transforming ideas into visually compelling and user-focused solutions.
          </p>
          <p className="font-grotesk text-xl md:text-2xl leading-relaxed text-gray-600">
            Built on the belief that great design is both strategic and intuitive, Krazy Studios operates as a flexible and evolving creative unit. We collaborate with startups, brands, and individuals, adapting to each project’s unique vision to deliver scalable, high-quality design systems that stand out.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-[1100px] mx-auto">
        <div className="border-t-2 border-gray-200 pt-16 mb-20 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl lg:text-6xl leading-none tracking-tight gradient-text">
            Our Values
          </h2>
          <p className="font-lora italic text-xl md:text-2xl text-gray-500 mt-4 md:mt-0 max-w-sm tracking-tight text-left md:text-right">
            The core principles guiding our work process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {values.map((val, idx) => (
            <div key={idx} className="group p-10 md:p-12 rounded-[2rem] border border-gray-100 bg-[#fafafa] hover:bg-white hover:border-gray-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
              <span className="font-grotesk text-lg font-bold text-gray-300 tracking-widest uppercase mb-5 block group-hover:text-gray-400 transition-colors">0{idx + 1}</span>
              <h3 className="font-grotesk font-bold text-3xl md:text-4xl leading-tight mb-5 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#00b2ff] group-hover:via-[#d946ef] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 w-fit">
                {val.title}
              </h3>
              <p className="font-grotesk text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="py-20 px-4 sm:px-6 lg:px-10 max-w-[1100px] mx-auto mt-20 border-t border-gray-100">
         <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 font-grotesk text-base space-y-6 md:space-y-0">
           <p className="font-bold">© {new Date().getFullYear()} KrazyStudios. All rights reserved.</p>
           <p className="italic font-lora">Based in India. Available Worldwide.</p>
         </div>
      </footer>
    </div>
  );
}
