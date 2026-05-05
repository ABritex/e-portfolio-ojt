"use client";
import { OJT_INFO } from "@/data/portfolio";

const QUICK_FACTS = [
    { label: "Governing Law", value: OJT_INFO.law, color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/5" },
    { label: "Office Type", value: "Government", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
    { label: "Function", value: "Procurement", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
];

export function CompanyProfile() {
    return (
        <section
            id="company-profile"
            className="w-full flex flex-col gap-0"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* ── Hero Banner ─────────────────────────────────────────────── */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-border">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--color-secondary)/8% 0%, transparent 60%), linear-gradient(225deg, var(--color-primary)/6% 0%, transparent 60%)",
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
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/20 bg-secondary/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        <span className="text-[10px] text-secondary font-bold tracking-[.25em] uppercase">Chapter II</span>
                    </div>

                    <h1
                        className="text-[clamp(42px,8vw,88px)] font-extrabold leading-[0.88]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Company<br />Profile
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-border" />
                        <p className="text-[13px] text-muted-foreground tracking-wide">
                            {OJT_INFO.company}
                        </p>
                        <div className="h-px w-12 bg-border" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                        {QUICK_FACTS.map((f) => (
                            <div key={f.label} className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border ${f.border} ${f.bg}`}>
                                <span className={`text-[14px] font-extrabold ${f.color}`}>{f.value}</span>
                                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">{f.label}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-[12px] text-muted-foreground/50 max-w-lg leading-relaxed">
                        {OJT_INFO.companyDescription.slice(0, 120)}…
                    </p>
                </div>
            </div>

            {/* ── Chapter overview strip ───────────────────────────────────── */}
            <div className="mt-6 rounded-2xl border border-border bg-card px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                            <rect x="2" y="7" width="20" height="14" rx="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[12px] font-bold text-foreground">Chapter II — Company Profile</p>
                        <p className="text-[11px] text-muted-foreground/60">4 sections · read below</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    {[
                        { label: "Overview", href: "#cp-overview", color: "text-secondary border-secondary/20 bg-secondary/5" },
                        { label: "1. Nature", href: "#cp-nature", color: "text-primary border-primary/20 bg-primary/5" },
                        { label: "2. Vision & Mission", href: "#cp-mission", color: "text-accent border-accent/20 bg-accent/5" },
                        { label: "3. History", href: "#cp-history", color: "text-secondary border-secondary/20 bg-secondary/5" },
                        { label: "4. Org Structure", href: "#cp-org", color: "text-primary border-primary/20 bg-primary/5" },
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