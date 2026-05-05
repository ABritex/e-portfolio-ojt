"use client";
import { WORK_EXPERIENCE } from "@/data/portfolio";

export function WorkExperience() {
    return (
        <section
            id="work-experience"
            className="w-full flex flex-col gap-0"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* ── Hero Banner ─────────────────────────────────────────────── */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-border">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--color-primary)/8% 0%, transparent 60%), linear-gradient(225deg, var(--color-secondary)/6% 0%, transparent 60%)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px)",
                    }}
                />
                <div className="relative z-10 px-8 py-14 md:px-16 md:py-20 flex flex-col items-center text-center gap-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] text-primary font-bold tracking-[.25em] uppercase">Chapter III</span>
                    </div>

                    <h1
                        className="text-[clamp(42px,8vw,88px)] font-extrabold leading-[0.88]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Work<br />Experience
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-border" />
                        <p className="text-[13px] text-muted-foreground tracking-wide">
                            Documentation of tasks, hours, and analysis throughout the training
                        </p>
                        <div className="h-px w-12 bg-border" />
                    </div>

                    {/* Report count pills */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                        {WORK_EXPERIENCE.reports.map((r, i) => {
                            const colors = ["text-primary", "text-accent", "text-secondary", "text-accent"];
                            const borders = ["border-primary/20 bg-primary/5", "border-accent/20 bg-accent/5", "border-secondary/20 bg-secondary/5", "border-accent/20 bg-accent/5"];
                            return (
                                <div key={r.title} className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${borders[i]}`}>
                                    <span className={`text-[13px] font-extrabold ${colors[i]}`}>{r.count}</span>
                                    <span className="text-[10px] text-muted-foreground tracking-widest">{r.title.split(" ").slice(-1)[0]}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── Chapter overview strip ───────────────────────────────────── */}
            <div className="mt-6 rounded-2xl border border-border bg-card px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[12px] font-bold text-foreground">Chapter III — Work Experience</p>
                        <p className="text-[11px] text-muted-foreground/60">4 sections · read below</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    {[
                        { label: "A. Weekly Report", href: "#we-weekly", color: "text-primary border-primary/20 bg-primary/5" },
                        { label: "B. Daily Time Record", href: "#we-dtr", color: "text-accent border-accent/20 bg-accent/5" },
                        { label: "C. Progress Report", href: "#we-progress", color: "text-secondary border-secondary/20 bg-secondary/5" },
                        { label: "D. Analysis Report", href: "#we-analysis", color: "text-primary border-primary/20 bg-primary/5" },
                    ].map((item) => (
                        <a key={item.href} href={item.href} className={`text-[10px] font-bold tracking-[.1em] uppercase px-3 py-1.5 rounded-lg border transition-opacity hover:opacity-80 ${item.color}`}>
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}