"use client";
import { PERSON, OJT_INFO } from "@/data/portfolio";

const stats = [
    { label: "Total Hours", value: OJT_INFO.hours, unit: "hrs", color: "text-primary" },
    { label: "OJT Duration", value: "62", unit: "days", color: "text-accent" },
    { label: "Law Followed", value: OJT_INFO.law, unit: "", color: "text-secondary" },
];

export function Introduction() {
    return (
        <section
            id="introduction"
            className="w-full flex flex-col gap-0"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* ── Hero Banner ─────────────────────────────────────────────── */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-border">
                {/* Background gradient layer */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--color-primary)/8% 0%, transparent 60%), linear-gradient(225deg, var(--color-accent)/6% 0%, transparent 60%)",
                    }}
                />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px)",
                    }}
                />

                <div className="relative z-10 px-8 py-14 md:px-16 md:py-20 flex flex-col items-center text-center gap-6">
                    {/* Chapter badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] text-primary font-bold tracking-[.25em] uppercase">
                            Chapter I
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        className="text-[clamp(48px,8vw,96px)] font-extrabold leading-[0.88]"
                        style={{
                            background:
                                "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Introduction
                    </h1>

                    {/* Underline accent */}
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-border" />
                        <p className="text-[13px] text-muted-foreground tracking-wide">
                            Foundation and Framework of the Internship Program
                        </p>
                        <div className="h-px w-12 bg-border" />
                    </div>

                    {/* Stat pills */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-border bg-card/60 backdrop-blur-sm"
                            >
                                <span className={`text-[15px] font-extrabold ${s.color}`}>
                                    {s.value}
                                    {s.unit && (
                                        <span className="text-[10px] font-bold ml-0.5 opacity-60">
                                            {s.unit}
                                        </span>
                                    )}
                                </span>
                                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mt-1">
                        <span className="text-[11px] text-muted-foreground/50">
                            <span className="text-muted-foreground/30 mr-1">@</span>
                            {PERSON.name}
                        </span>
                        <span className="text-[11px] text-muted-foreground/50">
                            <span className="text-muted-foreground/30 mr-1">#</span>
                            {PERSON.id}
                        </span>
                        <span className="text-[11px] text-muted-foreground/50">
                            <span className="text-accent/40 mr-1">▸</span>
                            {OJT_INFO.company}
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Chapter overview strip ───────────────────────────────────── */}
            <div className="mt-6 rounded-2xl border border-border bg-card px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[12px] font-bold text-foreground">Chapter I — Introduction</p>
                        <p className="text-[11px] text-muted-foreground/60">3 sections · read below</p>
                    </div>
                </div>

                {/* Section links */}
                <div className="flex items-center gap-2 flex-wrap">
                    {[
                        { label: "A. Importance", href: "#importance", color: "text-primary border-primary/20 bg-primary/5" },
                        { label: "B. Objectives", href: "#objectives", color: "text-accent border-accent/20 bg-accent/5" },
                        { label: "C. Time & Place", href: "#time-place", color: "text-secondary border-secondary/20 bg-secondary/5" },
                    ].map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`text-[10px] font-bold tracking-[.1em] uppercase px-3 py-1.5 rounded-lg border transition-opacity hover:opacity-80 ${item.color}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}