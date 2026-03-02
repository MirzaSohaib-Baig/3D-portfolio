import { FadeIn, SectionHeader } from "./shared";
import { experiences } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="px-16 py-[120px] bg-bg max-[900px]:px-6 max-[900px]:py-20">
      <FadeIn>
        <SectionHeader num="04" title="EXPERIENCE" />
      </FadeIn>

      <FadeIn delay={1}>
        {/* Timeline container */}
        <div className="relative pl-9 max-w-[860px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-red before:to-red/10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10 pb-14 last:pb-0">
              {/* Dot */}
              <div className="absolute left-[-5px] top-[7px] w-[11px] h-[11px] bg-red rounded-full shadow-red-sm" />

              {/* Company row */}
              <div className="flex items-center gap-[14px] mb-[10px]">
                <img
                  src={exp.icon}
                  alt={exp.company_name}
                  className="w-50 h-10 rounded-md object-cover border border-white/[0.06]"
                  loading="lazy"
                />
                <span className="font-mono-jet text-[0.68rem] text-red tracking-[2px]">{exp.date}</span>
              </div>

              <div className="font-display text-[2rem] tracking-[2px] leading-none mb-1 text-snow">{exp.title}</div>
              <div className="text-[0.85rem] text-gray mb-[14px]">{exp.company_name}</div>

              <ul className="list-none flex flex-col gap-2">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-[0.88rem] text-[#666] leading-[1.75] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-red before:text-[0.75rem]">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
