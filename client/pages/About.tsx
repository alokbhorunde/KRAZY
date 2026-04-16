import Navigation from "../components/Navigation";
import SiteFooter from "../components/SiteFooter";

export default function About() {
  const values = [
    {
      title: "Design First",
      desc: "Design is not just aesthetics, it is functionality, clarity, and experience. Every decision we make is driven by purpose, ensuring solutions are both beautiful and effective.",
    },
    {
      title: "Growth Mindset",
      desc: "We constantly evolve, learning, experimenting, and refining our craft. This mindset allows us to stay ahead in a rapidly changing design and technology landscape.",
    },
    {
      title: "Creative Excellence",
      desc: "We do not create average work. Every project is approached with precision and intent, delivering designs that are refined, distinctive, and memorable.",
    },
    {
      title: "Purpose-Driven Work",
      desc: "We design with intention. Beyond visuals, our focus is on solving real problems and creating meaningful impact through every experience we build.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative mx-auto flex min-h-[65vh] max-w-[1100px] flex-col justify-center px-4 pb-20 pt-40 sm:px-6 lg:px-10">
        <p className="mb-6 font-lora text-xl italic tracking-tight text-gray-500 md:text-2xl">Based in India</p>
        <h1 className="gradient-text mb-10 w-fit font-grotesk text-3xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
          About Us
        </h1>

        <div className="max-w-4xl space-y-8">
          <p className="font-grotesk text-xl leading-relaxed text-gray-600 md:text-2xl">
            Krazy Studios is a creative design studio dedicated to crafting bold, impactful, and meaningful digital experiences. We specialise in UI/UX design, brand identity, and product thinking, transforming ideas into visually compelling and user-focused solutions.
          </p>
          <p className="font-grotesk text-xl leading-relaxed text-gray-600 md:text-2xl">
            Built on the belief that great design is both strategic and intuitive, Krazy Studios operates as a flexible and evolving creative unit. We collaborate with startups, brands, and individuals, adapting to each project's unique vision to deliver scalable, high-quality design systems that stand out.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 lg:px-10">
        <div className="mb-20 flex flex-col items-start justify-between border-t-2 border-gray-200 pt-16 md:flex-row md:items-center">
          <h2 className="gradient-text font-grotesk text-3xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Our Values
          </h2>
          <p className="mt-4 max-w-sm text-left font-lora text-xl italic tracking-tight text-gray-500 md:mt-0 md:text-right md:text-2xl">
            The core principles guiding our work process
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group rounded-[2rem] border border-gray-100 bg-[#fafafa] p-10 transition-all duration-300 hover:border-gray-200 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] md:p-12"
            >
              <span className="mb-5 block font-grotesk text-lg font-bold uppercase tracking-widest text-gray-300 transition-colors group-hover:text-gray-400">
                0{index + 1}
              </span>
              <h3 className="mb-5 w-fit font-grotesk text-3xl font-bold leading-tight text-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#00b2ff] group-hover:via-[#d946ef] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent md:text-4xl">
                {value.title}
              </h3>
              <p className="font-grotesk text-lg font-medium leading-relaxed text-gray-600 md:text-xl">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter variant="minimal" />
    </div>
  );
}
