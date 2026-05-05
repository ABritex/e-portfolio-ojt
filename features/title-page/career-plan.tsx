"use client";
import { CAREER_PLAN } from "@/data/portfolio";

export function CareerPlan() {
    const colors = ["text-primary", "text-accent", "text-secondary"];
    const bgs = ["bg-primary/10 border-primary/30", "bg-accent/10 border-accent/30", "bg-secondary/10 border-secondary/30"];

    return (
        <section
            id="career-plan"
            className="w-full flex flex-col gap-12"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top: text left + note right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        A roadmap built on iteration, validated by execution.
                    </p>
                    <h2 data-aos="fade-right"
                        className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Career<br />
                        Plan.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p data-aos="fade-left" className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        Short-term: Land the role. Mid-term: Master the craft. Long-term: Lead the change.
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./career.json</span>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                </div>
            </div>

            {/* Career Plan Content */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Terminal bar */}
                <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[11px] text-muted-foreground tracking-widest">cat career.json</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                    </div>
                </div>

<div data-aos="fade-up" className="p-6 md:p-10 flex flex-col gap-0">
                     {CAREER_PLAN.map((phase, i) => (
                         <div data-aos="fade-up" key={phase.title} className="relative flex gap-6 pb-10 last:pb-0">
                             {/* Vertical line */}
                             {i < CAREER_PLAN.length - 1 && (
                                 <div className="absolute left-[21px] top-12 h-full w-px bg-border" />
                             )}

                             {/* Number badge */}
                             <div
                                 className={`shrink-0 w-11 h-11 rounded-full border flex items-center justify-center font-extrabold text-[15px] z-10 ${bgs[i % bgs.length]} ${colors[i % colors.length]}`}
                             >
                                 {i + 1}
                             </div>

                             {/* Content */}
                             <div className="flex flex-col gap-3 pt-1.5">
                                 <h3 className={`text-[15px] font-bold ${colors[i % colors.length]}`}>{phase.title}</h3>
                                 <p className="text-[13px] text-muted-foreground leading-relaxed">{phase.content}</p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </section>
    );
}