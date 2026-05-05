"use client";
import { TITLE_PAGE_INFO } from "@/data/portfolio";

export function PersonalPhilosophy() {
    return (
        <section
            id="personal-philosophy"
            className="w-full flex flex-col gap-12"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top: text left + note right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        Beliefs shaped by code, tested by practice, proven by results.
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
                        Personal<br />
                        Philosophy.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p data-aos="fade-left" className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        Technology is a tool. Utility over elegance.
                        Impact over ego.
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./philosophy.md</span>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                    </svg>
                </div>
            </div>

            {/* Philosophy Content */}
            <div data-aos="fade-up" className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Terminal bar */}
                <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[11px] text-muted-foreground tracking-widest">cat philosophy.md</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-5 text-[14px] text-muted-foreground leading-[1.85] max-w-3xl relative">
                    <span className="text-primary text-6xl font-serif absolute -mt-2 -ml-4 select-none">"</span>
                    {TITLE_PAGE_INFO.philosophy.map((para, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: para }} className="relative z-10 pl-6" />
                    ))}
                </div>
            </div>
        </section>
    );
}