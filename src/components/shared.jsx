import { useIntersect } from "../hooks";

export function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useIntersect();
  const delayClass = delay === 1 ? "delay-100" : delay === 2 ? "delay-200" : delay === 3 ? "delay-300" : "";
  return (
    <div ref={ref} className={`fade-up ${visible ? "in" : ""} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeader({ num, title }) {
  return (
    <div className="flex items-center gap-5 mb-[70px]">
      <span className="font-mono-jet text-[0.65rem] text-red tracking-[3px]">// {num}</span>
      <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] tracking-[3px] text-snow">{title}</h2>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>
  );
}
