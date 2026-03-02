import { useState } from "react";
import { FadeIn } from "./shared";
import emailjs from "@emailjs/browser";
import { contactLinks } from "../constants";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const service_id = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const template_id = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    emailjs
      .send(
        service_id,
        template_id,
        {
          from_name: form.name,
          to_name: "Full Stack Developer",
          from_email: form.email,
          to_email: "sohaibbaig329@gmail.com",
          message: form.message,
        },
        public_key
      )
      .then(
        () => {
          setSending(false);
          setSent(true);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setSending(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="px-16 py-[120px] bg-bg max-[900px]:px-6 max-[900px]:py-20">
      <div className="grid grid-cols-[1fr_1.1fr] gap-20 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">

        {/* Left: info */}
        <FadeIn delay={1}>
          <div>
            <h2 className="font-display text-[clamp(3rem,5.5vw,5rem)] leading-[0.9] tracking-[3px] mb-6 text-snow">
              LET'S<br />BUILD<br /><span className="text-red">TOGETHER</span>
            </h2>
            <p className="text-[0.92rem] text-gray leading-[1.85] mb-10">
              Have a project in mind? Looking for a developer who gets results?
              Send me a message and let's make something great.
            </p>
            <div className="flex flex-col gap-[14px]">
              {contactLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-[14px] text-gray font-mono-jet text-[0.75rem] tracking-[1px] no-underline transition-colors duration-200 hover:text-snow group"
                >
                  <div className="w-[34px] h-[34px] border border-white/[0.06] flex items-center justify-center text-[0.9rem] flex-shrink-0 transition-all duration-200 group-hover:border-red group-hover:bg-red/10">
                    <l.icon className="w-5 h-5 object-contain" />
                  </div>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right: form */}
        <FadeIn delay={2}>
          {sent ? (
            <div className="flex flex-col items-start gap-4 p-10 bg-bg2 border border-white/[0.06]">
              <div className="font-display text-[2.5rem] tracking-[3px] text-red">MESSAGE SENT</div>
              <p className="text-gray text-[0.9rem] leading-[1.8]">
                Thank you! I'll get back to you as soon as possible.
              </p>
              <button
                className="bg-red text-white clip-btn px-[34px] py-[13px] font-mono-jet text-[0.75rem] tracking-[2px] uppercase border-none cursor-pointer transition-all duration-200 hover:bg-[#ff1f35] hover:shadow-red"
                onClick={() => setSent(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
              {[
                { label: "Name",    name: "name",    type: "text",  placeholder: "Your name" },
                { label: "Email",   name: "email",   type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-[7px]">
                  <label className="font-mono-jet text-[0.62rem] text-gray tracking-[3px] uppercase">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    className="bg-bg2 border border-white/[0.06] text-snow px-4 py-[13px] font-body text-[0.88rem] outline-none transition-colors duration-200 focus:border-red"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-[7px]">
                <label className="font-mono-jet text-[0.62rem] text-gray tracking-[3px] uppercase">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-bg2 border border-white/[0.06] text-snow px-4 py-[13px] font-body text-[0.88rem] outline-none transition-colors duration-200 focus:border-red resize-y min-h-[130px]"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="self-start bg-transparent text-red border border-red px-8 py-[13px] font-mono-jet text-[0.75rem] tracking-[3px] uppercase cursor-pointer transition-all duration-200 hover:bg-red hover:text-white hover:shadow-red disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
};
