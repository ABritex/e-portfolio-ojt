"use client";
import { COMPANY_PROFILE } from "@/data/portfolio";

export function CompanyMission() {
    return (
        <section
            id="cp-mission"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-accent font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-accent/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Section 2
                    </p>
                    <h2
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Vision &<br />Mission.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        The guiding principles behind every procurement decision.
                        <br />
                        <span className="text-muted-foreground/30">$ cat mission.md</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="12" y1="2" x2="12" y2="5" />
                        <line x1="12" y1="19" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="5" y2="12" />
                        <line x1="19" y1="12" x2="22" y2="12" />
                    </svg>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">cat chapter2/mission.md</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/30" />
                        <span className="w-2 h-2 rounded-full bg-secondary/30" />
                        <span className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] text-accent font-bold tracking-[.2em] uppercase">2.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Vision / Mission / Goal</h3>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="rounded-xl border border-accent/20 bg-accent/5 p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <p className="text-[11px] font-bold text-accent tracking-[.2em] uppercase">Vision</p>
                        </div>
                        <p className="text-[14px] text-muted-foreground leading-[1.8] italic">
                            "{COMPANY_PROFILE.vision}"
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <p className="text-[11px] font-bold text-primary tracking-[.2em] uppercase">Mission</p>
                        </div>
                        <p className="text-[14px] text-muted-foreground leading-[1.8] italic">
                            "{COMPANY_PROFILE.mission}"
                        </p>
                    </div>

                    {/* Goal */}
                    <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <p className="text-[11px] font-bold text-secondary tracking-[.2em] uppercase">Goal</p>
                        </div>
                        <p className="text-[14px] text-muted-foreground leading-[1.8]">
                            {COMPANY_PROFILE.goal}
                        </p>
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-accent/30">▸</span> Chapter II · Section 2
                    </p>
                </div>
            </div>
        </section>
    );
}