"use client";
import { STUDENT_PRAYER } from "@/data/portfolio";

export function StudentPrayer() {
    return (
        <section
            id="student-prayer"
            className="w-full flex flex-col gap-12"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top: text left + note right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        A prayer for guidance, strength, and wisdom throughout the training journey.
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
                        Student<br />
                        Prayer.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p data-aos="fade-left" className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        Faith as foundation. Hope as compass. Gratitude as strength.
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./prayer.md</span>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4l3 3" />
                    </svg>
                </div>
            </div>

            {/* Prayer Content */}
            <div data-aos="fade-up" className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Terminal bar */}
                <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[11px] text-muted-foreground tracking-widest">cat prayer.md</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                    </div>
                </div>

                <div className="relative border-l-2 border-secondary/30 pl-8 ml-2 p-6 md:p-10">
                    <span className="absolute -top-3 -left-2 text-[52px] leading-none text-secondary/15 font-serif select-none">&ldquo;</span>
                    <div className="flex flex-col gap-5 text-[14px] text-muted-foreground leading-[1.85] max-w-3xl pt-2">
                        {STUDENT_PRAYER.paragraphs.map((para, i) => (
                            <p key={i} className={i === 0 ? "text-foreground font-semibold" : ""}>
                                {para}
                            </p>
                        ))}
                        <p className="text-foreground font-semibold">{STUDENT_PRAYER.closing}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}