import { FadeIn, SectionHeader } from "./shared";
import { 
  testimonials
 } from "../constants";

export default function Feedbacks() {
  return (
    <section id="testimonials" className="px-16 py-[120px] bg-bg2 max-[900px]:px-6 max-[900px]:py-20">
      <FadeIn>
        <SectionHeader num="05" title="TESTIMONIALS" />
      </FadeIn>

      <FadeIn delay={1}>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-px bg-white/[0.06] max-[900px]:grid-cols-1">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-bg2 p-10 transition-colors duration-200 hover:bg-bg3">
              <span className="font-display text-[5rem] text-red leading-[0.6] opacity-50 mb-5 block">"</span>
              <p className="text-[0.92rem] text-gray leading-[1.85] mb-7 italic">{t.testimonial}</p>
              <div className="flex items-center gap-[14px]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-red"
                  loading="lazy"
                />
                <div>
                  <div className="font-mono-jet text-[0.78rem] text-snow tracking-[1px]">{t.name}</div>
                  <div className="text-[0.75rem] text-gray mt-[3px]">{t.designation}</div>
                  <div className="text-[0.75rem] text-gray mt-[3px]">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
