import { FadeIn, SectionHeader } from "./shared";
import { useIntersect } from "../hooks";
import { technologies } from "../constants";

function SkillBar({ level }) {
  const [ref, visible] = useIntersect();
  return (
    <div ref={ref}>
      <div className="bg-bg3 h-[3px] rounded-sm overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red2 to-red rounded-sm transition-all duration-[1s] ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
      <div className="font-mono-jet text-[0.65rem] text-red mt-[6px] text-right">{level}%</div>
    </div>
  );
}

export default function Tech() {
  return (
    <section id="skills" className="px-16 py-[120px] bg-bg max-[900px]:px-6 max-[900px]:py-20">
      <FadeIn>
        <SectionHeader num="02" title="SKILLS" />
      </FadeIn>

      <FadeIn delay={1}>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-px bg-white/[0.06] max-[900px]:grid-cols-1">
          {technologies.map((sk) => (
            <div
              key={sk.name}
              className="bg-bg2 px-7 py-6 transition-colors duration-200 hover:bg-bg3"
            >
              <div className="flex items-center gap-3 mb-[14px]">
                <img
                  src={sk.icon}
                  alt={sk.name}
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                />
                <span className="font-mono-jet text-[0.78rem] text-snow tracking-[1px]">{sk.name}</span>
              </div>
              {/* <SkillBar level={sk.level} /> */}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
