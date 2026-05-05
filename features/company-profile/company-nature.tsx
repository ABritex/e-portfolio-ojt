"use client";
import { COMPANY_PROFILE } from "@/data/portfolio";

export function CompanyNature() {
    return (
        <section
            id="cp-nature"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-primary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-primary/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Section 1
                    </p>
                    <h2
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Nature of<br />the Agency.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        What the BAC does and why it exists under Philippine law.
                        <br />
                        <span className="text-muted-foreground/30">$ cat nature.md</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-primary text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">cat chapter2/nature.md</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/30" />
                        <span className="w-2 h-2 rounded-full bg-secondary/30" />
                        <span className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">1.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Nature of the Agency</h3>
                        </div>
                    </div>

                    <div className="border-l-2 border-primary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {COMPANY_PROFILE.nature}
                        </p>
                    </div>

                    {/* Key functions */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                            { label: "Bid Management", icon: "📋", desc: "Handles all bidding documents and resolutions" },
                            { label: "RA 9184 Compliance", icon: "⚖️", desc: "Strict adherence to procurement reform law" },
                            { label: "Public Accountability", icon: "🔍", desc: "Transparent procurement for the LGU" },
                        ].map((f) => (
                            <div key={f.label} className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-col gap-2">
                                <p className="text-[18px]">{f.icon}</p>
                                <p className="text-[11px] font-bold text-primary tracking-widest uppercase">{f.label}</p>
                                <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-primary/30">▸</span> Chapter II · Section 1
                    </p>
                </div>
            </div>
        </section>
    );
}