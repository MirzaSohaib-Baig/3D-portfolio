import { useState } from "react";
import { navLinks } from "../constants";
import { useActiveSection } from "../hooks";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-16 py-[22px] bg-gradient-to-b from-bg/[0.96] to-transparent backdrop-blur-sm max-[900px]:px-6">
        {/* Logo */}
        <div
          className="font-display text-2xl tracking-[4px] text-snow cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MSB<span className="text-red">.</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-9 list-none">
          {navLinks.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`font-mono-jet text-[0.72rem] tracking-[2px] uppercase no-underline transition-colors duration-200 ${
                  activeSection === n.id ? "text-red" : "text-gray hover:text-red"
                }`}
              >
                {n.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="sm:hidden flex items-center justify-center w-9 h-9 border border-white/[0.06] bg-transparent text-snow text-lg cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed top-[68px] left-0 right-0 z-[199] bg-bg/[0.97] px-6 py-6 backdrop-blur-lg sm:hidden">
          <ul className="list-none flex flex-col gap-5">
            {navLinks.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="no-underline text-gray font-mono-jet text-[0.85rem] tracking-[2px] uppercase"
                >
                  {n.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
