"use client";
import { INTRODUCTION, PERSON, OJT_INFO } from "@/data/portfolio";

const DETAILS = [
    {
        label: "Start Date",
        value: "January 30, 2026",
        icon: (
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
    {
        label: "End Date",
        value: "May 4, 2026",
        icon: (
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <polyline points="9 16 11 18 15 14" />
            </svg>
        ),
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
    {
        label: "Total Hours",
        value: `${OJT_INFO.hours} hrs`,
        icon: (
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
    },
    {
        label: "Location",
        value: "Odiongan, Romblon",
        icon: (
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
];

export function TimeAndPlace() {
    return (
        <section
            id="time-place"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-secondary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-secondary/40">Chapter I</span>
                        <span className="text-border">·</span>
                        Section C
                    </p>
                    <h2
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background:
                                "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Time & Place<br />of Internship.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        62 days. 504 hours. One government office. Real work.
                        <br />
                        <span className="text-muted-foreground/30">$ cat time-place.md</span>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </div>
            </div>

            {/* Content card */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Terminal bar */}
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-secondary text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">
                        cat chapter1/time-place.md
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
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] text-secondary font-bold tracking-[.2em] uppercase">C.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Time and Place of Internship</h3>
                        </div>
                    </div>

                    {/* Full paragraph */}
                    <div className="border-l-2 border-secondary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {INTRODUCTION.timeAndPlace}
                        </p>
                    </div>

                    {/* Detail cards grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {DETAILS.map((d) => (
                            <div
                                key={d.label}
                                className={`rounded-xl border ${d.border} ${d.bg} p-4 flex flex-col gap-2`}
                            >
                                <div className={`${d.color}`}>{d.icon}</div>
                                <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">{d.label}</p>
                                <p className={`text-[12px] font-bold ${d.color} leading-tight`}>{d.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Office name strip */}
                    <div className="rounded-xl border border-border bg-card/50 px-5 py-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-muted/20 border border-border flex items-center justify-center shrink-0">
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-muted-foreground">
                                    <rect x="2" y="7" width="20" height="14" rx="2" />
                                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-foreground">{OJT_INFO.company}</p>
                                <p className="text-[10px] text-muted-foreground/40 tracking-widest">Host Agency</p>
                            </div>
                        </div>
                        <span className="text-[10px] text-muted-foreground/30 font-bold tracking-widest hidden sm:block">
                            {OJT_INFO.law}
                        </span>
                    </div>

                    {/* Map embed */}
                    <div className="rounded-xl overflow-hidden border border-border">
                        <div className="px-4 py-2.5 border-b border-border bg-card/50 flex items-center gap-2">
                            <span className="text-secondary text-[10px]">▸</span>
                            <span className="text-[10px] text-muted-foreground tracking-widest">maps --location="{OJT_INFO.company}"</span>
                        </div>
                        <iframe
                            src={OJT_INFO.location.embedSrc}
                            width="100%"
                            height="280"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Internship Location Map"
                        />
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-secondary/30">▸</span> Chapter I · Section C
                    </p>
                </div>
            </div>
        </section>
    );
}