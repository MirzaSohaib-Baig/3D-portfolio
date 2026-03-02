import { useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FadeIn, SectionHeader } from "./shared";
import { useIntersect } from "../hooks";
import { projects } from "../constants";

// ─── Video Popup ───────────────────────────────────────────────────────────────

const VideoPopup = ({ videoSrc, onClose }) => {
  if (!videoSrc) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 flex justify-center items-center z-[9000]"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-red transition-colors duration-200 z-10"
          aria-label="Close video"
        >
          <MdClose className="w-8 h-8" />
        </button>

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="w-[90%] max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-red z-10" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-red z-10" />
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full rounded-sm shadow-2xl"
            />
          </div>
          <p className="text-center font-mono-jet text-[0.65rem] text-gray tracking-[2px] uppercase mt-3">
            Click outside to close
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Project Card ──────────────────────────────────────────────────────────────

function ProjectCard({ proj, onVideoOpen }) {
  const cardRef = useRef(null);
  const [wrapRef, visible] = useIntersect();

  const image = proj.media?.find(
    (f) => !f.endsWith(".mp4") && !f.endsWith(".webm")
  );
  const video = proj.media?.find(
    (f) => f.endsWith(".mp4") || f.endsWith(".webm")
  );
  const hasVideo = Boolean(video);

  const handleMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -10;
    const rotY = ((x - cx) / cx) * 10;
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.015)`;
    card.style.boxShadow = `${-rotY * 1.5}px ${rotX * 1.5}px 40px rgba(224,26,45,.18), 0 20px 50px rgba(0,0,0,.5)`;
    card.style.setProperty("--mx", (x / rect.width * 100) + "%");
    card.style.setProperty("--my", (y / rect.height * 100) + "%");
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    card.style.boxShadow = "none";
  }, []);

  return (
    <div ref={wrapRef} className={`fade-up ${visible ? "in" : ""} [perspective:1100px]`}>
      <div
        ref={cardRef}
        className={`relative bg-bg2 border border-white/[0.06] preserve-3d will-change-transform 
          transition-[transform_0.12s_ease,box-shadow_0.25s] flex flex-col overflow-hidden group
          ${hasVideo ? "cursor-pointer" : ""}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={() => hasVideo && onVideoOpen(video)}
      >
        {/* Mouse spotlight glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
          style={{ background: "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(224,26,45,.12) 0%, transparent 55%)" }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-[18px] h-[18px] border-t-2 border-l-2 border-red z-[3]" />
        <div className="absolute bottom-0 right-0 w-[18px] h-[18px] border-b-2 border-r-2 border-red z-[3]" />

        {/* ── Image: fixed height + flex-shrink-0 = NEVER squishes body content ── */}
        <div className="relative h-[300px] flex-shrink-0 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={proj.name}
              className="w-full h-full object-cover block transition-all duration-[400ms]
                saturate-[.7] brightness-[.85]
                group-hover:scale-[1.04] group-hover:saturate-100 group-hover:brightness-[.95]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-bg3 flex items-center justify-center">
              <span className="font-display text-[3rem] text-white/[0.04]">{proj.num}</span>
            </div>
          )}

          {/* Soft fade from image into card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg2 via-bg2/30 to-transparent" />

          {/* Play button - only shows when video exists */}
          {hasVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red/80 backdrop-blur-sm flex items-center justify-center
                opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* ── Body: flex-1 takes all remaining height naturally ── */}
        <div className="relative z-[2] px-6 pt-5 flex-1 flex flex-col">
          <div className="font-mono-jet text-[0.62rem] text-red tracking-[3px] uppercase mb-2">
            {proj.tag}
          </div>
          <div className="font-display text-[1.7rem] tracking-[2px] leading-none mb-[10px] text-snow">
            {proj.name}
          </div>
          <p className="text-[0.82rem] text-gray leading-[1.7] flex-1 pb-4">
            {proj.description}
          </p>
        </div>

        {/* ── Footer: always at bottom, never clipped ── */}
        <div
          className="relative z-[2] px-6 py-[14px] border-t border-white/[0.06]
            flex justify-between items-center gap-[10px] flex-shrink-0"
        >
          <div className="flex flex-wrap gap-[6px]">
            {proj.tags?.map((t) => (
              <span
                key={t.name}
                className={`font-mono-jet text-[0.58rem] border border-white/[0.06]
                  px-[9px] py-[3px] tracking-[1px] uppercase ${t.color || "text-gray"}`}
              >
                {t.name}
              </span>
            ))}
          </div>

          {/* Stop propagation so clicking links doesn't also open the video */}
          <div className="flex gap-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            {/* {proj.tech?.map((t) => (
              <span
                key={t}
                className="font-mono-jet text-[0.58rem] border border-white/[0.06]
                  px-[9px] py-[3px] tracking-[1px] uppercase text-gray"
              >
                {t}
              </span>
            ))} */}
            {proj.source_code_link && (
              <a
                href={proj.source_code_link}
                target="_blank"
                rel="noreferrer"
                className="font-mono-jet text-[0.72rem] text-gray tracking-[1px] no-underline transition-colors hover:text-red"
              >
                GH ↗
              </a>
            )}
            {proj.live_link && proj.live_link !== "#" && (
              <a
                href={proj.live_link}
                target="_blank"
                rel="noreferrer"
                className="font-mono-jet text-[0.72rem] text-gray tracking-[1px] no-underline transition-colors hover:text-red"
              >
                Live ↗
              </a>
            )}
            {hasVideo && (
              <button
                className="font-mono-jet text-[0.72rem] text-red tracking-[1px]
                  bg-transparent border-none cursor-pointer hover:text-snow transition-colors"
                onClick={(e) => { e.stopPropagation(); onVideoOpen(video); }}
              >
                ▶ Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Works Section ─────────────────────────────────────────────────────────────

export default function Works() {
  const [popupVideo, setPopupVideo] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="px-16 py-[120px] bg-bg2 max-[900px]:px-6 max-[900px]:py-20"
      >
        <FadeIn>
          <SectionHeader num="03" title="PROJECTS" />
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-[22px] max-[900px]:grid-cols-1">
          {projects.map((p, index) => (
            <ProjectCard
              key={p.name}
              proj={{ ...p, num: String(index + 1).padStart(2, "0") }}
              onVideoOpen={setPopupVideo}
            />
          ))}
        </div>
      </section>

      <VideoPopup videoSrc={popupVideo} onClose={() => setPopupVideo(null)} />
    </>
  );
}