"use client";
import { INTRODUCTION } from "@/data/portfolio";

const OBJECTIVE_ITEMS = [
    {
        label: "Primary Objective",
        desc: "Develop technical and professional skills through supervised practical experience in a real office environment.",
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
    },
    {
        label: "Secondary Goals",
        desc: "Understand organizational processes, build work ethics, and prepare for employment through real project involvement.",
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
];

export function Objectives() {
    return (
        <section
            id="objectives"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-accent font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-accent/40">Chapter I</span>
                        <span className="text-border">·</span>
                        Section B
                    </p>
                    <h2
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background:
                                "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Objectives<br />of Internship.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        Goals set before day one. Benchmarks measured on day ninety.
                        <br />
                        <span className="text-muted-foreground/30">$ cat objectives.md</span>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 8 12 12 14 14" />
                    </svg>
                </div>
            </div>

            {/* Content card */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Terminal bar */}
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">
                        cat chapter1/objectives.md
                    </span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/30" />
                        <span className="w-2 h-2 rounded-full bg-secondary/30" />
                        <span className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-8">
                    {/* Icon + heading */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="12" y1="2" x2="12" y2="5" />
                                <line x1="12" y1="19" x2="12" y2="22" />
                                <line x1="2" y1="12" x2="5" y2="12" />
                                <line x1="19" y1="12" x2="22" y2="12" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] text-accent font-bold tracking-[.2em] uppercase">B.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Objectives of Internship</h3>
                        </div>
                    </div>

                    {/* Full paragraph */}
                    <div className="border-l-2 border-accent/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {INTRODUCTION.objectives}
                        </p>
                    </div>

                    {/* Objective breakdown cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {OBJECTIVE_ITEMS.map((item) => (
                            <div
                                key={item.label}
                                className={`rounded-xl border ${item.border} ${item.bg} p-5 flex flex-col gap-2`}
                            >
                                <p className={`text-[11px] font-bold tracking-[.15em] uppercase ${item.color}`}>
                                    {item.label}
                                </p>
                                <p className="text-[12px] text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-accent/30">▸</span> Chapter I · Section B
                    </p>
                </div>
            </div>
        </section>
    );
}