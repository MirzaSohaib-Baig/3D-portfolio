export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-16 overflow-hidden max-[900px]:px-6">
      {/* Radial glow bg */}
      <div className="absolute inset-0 bg-hero-glow" />
      {/* Grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Content */}
      <div className="relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-[14px] font-mono-jet text-[0.7rem] text-red tracking-[5px] uppercase mb-[22px]">
          <span className="w-9 h-px bg-red block" />
          Full Stack Developer
        </div>

        {/* Name */}
        <h1 className="font-display leading-[0.88] tracking-[2px] mb-7 text-[clamp(5rem,11vw,9.5rem)]">
          MIRZA<br />
          <span className="text-hollow">SOHAIB</span><br />
          BAIG
        </h1>

        {/* Sub */}
        <p className="text-base text-gray max-w-[500px] leading-[1.85] mb-11">
          Building fast, scalable, and business-focused products — from
          management systems and interactive dashboards to automation pipelines
          and web apps.
        </p>

        {/* CTA */}
        <div className="flex gap-[18px] items-center flex-wrap">
          <a
            href="#projects"
            className="bg-red text-white clip-btn px-[34px] py-[13px] font-mono-jet text-[0.75rem] tracking-[2px] uppercase no-underline transition-all duration-200 hover:bg-[#ff1f35] hover:shadow-red hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-gray font-mono-jet text-[0.75rem] tracking-[2px] uppercase no-underline border border-white/[0.06] px-7 py-[13px] flex items-center gap-2 transition-colors duration-200 hover:text-snow hover:border-white/20"
          >
            Get in Touch ↗
          </a>
        </div>
      </div>

      {/* Big ghost number */}
      <div className="absolute right-16 bottom-[60px] font-display text-[18rem] text-hollow-faint leading-none select-none max-[900px]:hidden">
        01
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[10px]">
        <div className="w-px h-12 bg-gradient-to-b from-red to-transparent" />
        <div className="w-[6px] h-[6px] bg-red rounded-full animate-bounce-slow" />
      </div>
    </section>
  );
}
