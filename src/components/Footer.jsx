import { footer } from "../constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-16 py-9 flex justify-between items-center flex-wrap gap-4 max-[900px]:px-6 max-[900px]:flex-col max-[900px]:text-center">
      <div className="font-display text-[1.3rem] tracking-[4px] text-snow">
        MSB<span className="text-red">.</span>
      </div>

      <div className="flex gap-6">
        {footer.map((l) => (
          <a
            key={l.title}
            href={l.link}
            target={l.link.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="text-[#3a3a3a] font-mono-jet text-[0.62rem] tracking-[1px] no-underline transition-colors duration-200 hover:text-red"
          >
            {/* {l.icon && <l.icon className="inline-block mr-1" />} */}
            {l.title}
          </a>
        ))}
      </div>

      <div className="font-mono-jet text-[0.62rem] text-[#3a3a3a] tracking-[1px]">
        © 2025 Mirza Sohaib Baig
      </div>
    </footer>
  );
}
