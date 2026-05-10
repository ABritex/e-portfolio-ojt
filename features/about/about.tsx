"use client";

import Image from "next/image";
import { useState } from "react";
import { PERSON } from "@/data/portfolio";

// ── Edit these ───────────────────────────────────────────────────────────────
const WHAT_I_DO = [
  {
    num: "01",
    title: "Design",
    desc: "Sharp interfaces, intentional spacing, micro-interactions that feel alive. I don't ship ugly things.",
    color: "text-primary",
  },
  {
    num: "02",
    title: "Development",
    desc: "Next.js, Node, PostgreSQL, Linux. Full-stack, end-to-end, no hand-holding required.",
    color: "text-accent",
  },
  {
    num: "03",
    title: "The Full Package",
    desc: "Schema to pixel. I own the whole stack and deliver without excuses.",
    color: "text-secondary",
  },
];

const FACTS = [
  { label: "OS", value: "Arch Linux", color: "text-secondary" },
  { label: "Editor", value: "Neovim", color: "text-accent" },
  { label: "Location", value: PERSON.location, color: "text-primary" },
  { label: "Status", value: "Open to work", color: "text-accent" },
];
// ────────────────────────────────────────────────────────────────────────────

export default function About() {
  const [hoveredNum, setHoveredNum] = useState<string | null>(null);

  return (
    <section id="about" className="w-full flex flex-col gap-16">
      {/* ── TOP — portrait left, headline right ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-end">
        {/* Portrait block */}
        <div className="flex flex-col gap-4">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="relative w-full aspect-[3/4] max-w-[280px] rounded-2xl border border-border overflow-hidden bg-card"
          >
            {/* Replace /portrait.jpg with your actual image */}
            <Image
              src="/images/1by3.png"
              alt={PERSON.name}
              fill
              sizes="280px"
              className="object-cover grayscale-[0.15] hover:grayscale-0 transition-all duration-500"
              priority
            />
            {/* gradient fade at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            {/* name badge over image */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[11px] text-muted-foreground/50 tracking-widest mb-0.5">
                $ whoami
              </p>
              <p className="text-[15px] font-bold text-foreground leading-tight">
                {PERSON.name}
              </p>
              <p className="text-[11px] text-primary">{PERSON.tagline}</p>
            </div>
          </div>

          {/* Facts table under portrait */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex flex-col gap-0 rounded-xl border border-border overflow-hidden"
          >
            {FACTS.map((f, i) => (
              <div
                key={f.label}
                className={`flex items-center justify-between px-4 py-2.5 ${i < FACTS.length - 1 ? "border-b border-border" : ""} bg-card`}
              >
                <span className="text-[10px] text-muted-foreground/40 tracking-widest uppercase">
                  {f.label}
                </span>
                <span className={`text-[11px] font-semibold ${f.color}`}>
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Headline + bio */}
        <div className="flex flex-col gap-8 lg:pb-2">
          {/* Big headline */}
          <div style={{ letterSpacing: "-0.03em" }} className="leading-[0.9]">
            <span
              data-aos="fade-left"
              data-aos-duration="500"
              className="block font-extrabold text-[clamp(48px,7vw,100px)]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hello!
            </span>
            <span
              data-aos="fade-left"
              data-aos-duration="750"
              className="block font-extrabold text-[clamp(48px,7vw,100px)] text-foreground"
            >
              I&apos;m {PERSON.name.split(" ")[0]}.
            </span>
            <span
              data-aos="fade-left"
              data-aos-duration="1000"
              className="block font-extrabold text-[clamp(36px,5.5vw,80px)] text-secondary"
            >
              Full-Stack
            </span>
            <span
              data-aos="fade-left"
              data-aos-duration="1250"
              className="block font-extrabold text-[clamp(36px,5.5vw,80px)]"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-accent) 0%, var(--color-primary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Developer.
            </span>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-3 max-w-lg">
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text-[clamp(13px,1.5vw,15px)] text-muted-foreground leading-relaxed"
            >
              I design and ship{" "}
              <span className="text-foreground font-semibold">
                full-stack systems
              </span>{" "}
              end-to-end. My workflow lives in the terminal — I run{" "}
              <span className="text-secondary font-semibold">Linux</span> on
              everything and treat the command line as home.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="1750"
              className="text-[clamp(13px,1.5vw,15px)] text-muted-foreground leading-relaxed"
            >
              I care about{" "}
              <span className="text-primary font-semibold">performance</span>,
              clean architecture, and interfaces that feel intentional. If it
              ships, it ships right.
            </p>
          </div>

          {/* Contact CTA */}
          <a
            data-aos="fade-left"
            data-aos-duration="2000"
            href="#contact"
            className="group self-start inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
          >
            <span className="text-[13px] text-foreground font-semibold">
              Contact Me
            </span>
            <span className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="#0a0a0a"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* ── WHAT I DO — numbered, but asymmetric layout ── */}
      <div className="flex flex-col gap-8">
        <div data-aos="fade-up" className="flex items-center gap-3">
          <span className="text-accent text-[11px]">▸</span>
          <span className="text-[11px] font-bold tracking-[.25em] uppercase text-foreground">
            What I Do
          </span>
          <div className="flex-1 border-t border-border" />
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden"
        >
          {WHAT_I_DO.map((s) => (
            <div
              key={s.num}
              onMouseEnter={() => setHoveredNum(s.num)}
              onMouseLeave={() => setHoveredNum(null)}
              className={`flex flex-col gap-4 p-7 bg-card transition-colors duration-200 cursor-default
                                ${hoveredNum === s.num ? "bg-muted/30" : ""}`}
            >
              {/* number + divider */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-muted-foreground/30 tracking-[.3em] tabular-nums shrink-0">
                  {s.num}
                </span>
                <div
                  className={`flex-1 border-t transition-colors duration-300 ${hoveredNum === s.num ? "border-accent/60" : "border-border"}`}
                />
              </div>
              {/* title */}
              <h3
                className={`text-[clamp(20px,2.2vw,28px)] font-extrabold leading-tight transition-colors duration-200 ${hoveredNum === s.num ? s.color : "text-foreground"}`}
                style={{ letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h3>
              {/* desc */}
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
