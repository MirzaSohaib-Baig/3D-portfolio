import { FadeIn, SectionHeader } from "./shared";
import { services } from "../constants";

export default function About() {
  return (
    <section id="about" className="px-16 py-[120px] bg-bg2 max-[900px]:px-6 max-[900px]:py-20">
      <FadeIn>
        <SectionHeader num="01" title="ABOUT" />
      </FadeIn>

      <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">
        {/* Bio */}
        <FadeIn delay={1}>
          <div className="space-y-[18px]">
            {[
              <>Need a developer who delivers <strong className="text-snow">fast, scalable, and business-focused results</strong>? I'm Sohaib — and I'm here to make it happen.</>,
              <>I'm a skilled software engineer experienced in <strong className="text-snow">TypeScript, Python, JavaScript, HTML, CSS</strong>, and WordPress. I build high-performance applications using React, Vue.js, FastAPI, Flask, Node.js, and Express.js.</>,
              <>I work with <strong className="text-snow">PostgreSQL, MySQL, and MongoDB</strong> using ORMs like Sequelize and SQLAlchemy, and leverage Selenium, Playwright, Git, and Linux for smooth automation, testing, and deployment.</>,
              <>If you're looking for someone who understands your vision and turns it into a <strong className="text-snow">powerful, user-friendly product</strong> — let's build it together.</>,
            ].map((text, i) => (
              <p key={i} className="text-gray leading-[1.95] text-[0.95rem]">{text}</p>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-red text-white clip-btn px-[34px] py-[13px] font-mono-jet text-[0.75rem] tracking-[2px] uppercase no-underline transition-all duration-200 hover:bg-[#ff1f35] hover:shadow-red hover:-translate-y-0.5"
              >
                Hire Me
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Service cards */}
        <FadeIn delay={2}>
          <div className="grid grid-cols-2 gap-px bg-white/[0.06] max-[900px]:grid-cols-1">
            {services.map((s) => (
              <div
                key={s.title}
                className="relative bg-bg2 p-8 overflow-hidden transition-colors duration-200 hover:bg-bg3 group"
              >
                {/* Bottom red line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-red transition-all duration-[350ms] group-hover:w-full" />
                {/* <span className="text-[2rem] mb-[14px] block">{s.icon}</span> */}
                <div className="font-display text-[1.4rem] tracking-[2px] mb-[10px] text-snow">{s.title}</div>
                <p className="text-[0.82rem] text-gray leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
