"use client";
import { OJT_INFO } from "@/data/portfolio";

export function CompanyOverview() {
    return (
        <section
            id="cp-overview"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-secondary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-secondary/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Overview
                    </p>
                    <h2
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Company<br />Overview.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        A government body ensuring fair and lawful public procurement.
                        <br />
                        <span className="text-muted-foreground/30">$ cat overview.md</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-secondary text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">cat chapter2/overview.md</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/30" />
                        <span className="w-2 h-2 rounded-full bg-secondary/30" />
                        <span className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-8">
                    {/* Office identity card */}
                    <div className="flex items-center gap-5 p-5 rounded-xl border border-secondary/20 bg-secondary/5">
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-secondary">
                                <rect x="2" y="7" width="20" height="14" rx="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[16px] font-bold text-foreground">{OJT_INFO.company}</p>
                            <p className="text-[11px] text-muted-foreground/60 mt-0.5">Local Government Unit · Municipality of Odiongan, Romblon</p>
                            <p className="text-[10px] text-secondary/60 mt-1 font-bold tracking-widest">{OJT_INFO.law} Compliant</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="border-l-2 border-secondary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {OJT_INFO.companyDescription}
                        </p>
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-secondary/30">▸</span> Chapter II · Overview
                    </p>
                </div>
            </div>
        </section>
    );
}