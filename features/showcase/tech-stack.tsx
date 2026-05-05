"use client";
import { useState } from "react";
import { TECH_CATEGORIES } from "@/data/portfolio";
import { SkillBar } from "./skill-bar";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
    frontend: (
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    backend: (
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    ),
    devops: (
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    ),
};

export function TechStack() {
    const [activeId, setActiveId] = useState("frontend");
    const active = TECH_CATEGORIES.find((c) => c.id === activeId)!;

    return (
        <section
            id="tech-stack"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top: text left + note right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        Not a stack collector — a{" "}
                        <span className="text-foreground font-semibold">craftsman</span>. Every tool
                        here has shipped real code into a{" "}
                        <span className="text-foreground font-semibold">production environment</span>.
                        No tutorial badges. No fluff.
                    </p>
                    <h2
                        data-aos="fade-right"
                        className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Tech Stack<br />& Proficiency.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p data-aos="fade-left" className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        Linux on bare metal. Terminal as home.{" "}
                        <span className="text-primary">Full-stack</span> from schema to deploy —
                        built iteratively, shipped quietly.
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./skills.json | jq</span>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                </div>
            </div>

            {/* Tech Stack Card */}
            <div data-aos="fade-up" className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Terminal bar */}
                <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[11px] text-muted-foreground tracking-widest">
                        cat skills.json | jq &apos;.{active.id}&apos;
                    </span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                    </div>
                </div>

                <div className="p-6 flex flex-col gap-6">
                    {/* Category tabs */}
                    <div className="flex items-center gap-2 flex-wrap">
                        {TECH_CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveId(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[11px] font-bold tracking-[.15em] uppercase transition-all ${activeId === cat.id
                                    ? `${cat.bgColor} ${cat.borderColor} ${cat.color}`
                                    : "border-border text-muted-foreground hover:border-border/80 hover:text-foreground"
                                    }`}
                            >
                                <span className={activeId === cat.id ? cat.color : "text-muted-foreground"}>
                                    {CATEGORY_ICONS[cat.id]}
                                </span>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Skill bars */}
                    <div className="flex flex-col gap-4">
                        <p className="text-[10px] text-muted-foreground/40 tracking-widest uppercase">
                            hover a skill to see details
                        </p>
                        {active.techs.map((tech) => (
                            <SkillBar
                                key={tech.name}
                                name={tech.name}
                                level={tech.level}
                                note={tech.note}
                                colorClass={active.color}
                            />
                        ))}
                    </div>

                    <p className="text-[10px] text-muted-foreground/30 border-t border-border pt-4">
                        <span className="text-accent/40">▸</span> self-assessed proficiency · updated 2024
                    </p>
                </div>
            </div>
        </section>
    );
}