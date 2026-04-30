"use client";
import { ACKNOWLEDGEMENT_INFO, OJT_INFO } from "@/data/portfolio";

export function Acknowledgement() {
    return (
        <section
            id="acknowledgement"
            className="w-full flex flex-col gap-12"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top: text left + note right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        To everyone who walked this path with me — your guidance shaped this journey more than you know.
                    </p>
                    <h2
                        className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Acknowledgement<br />& Gratitude.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        Family. Mentors. Supervisors. Interns. Faith.
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./acknowledgement.md</span>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                </div>
            </div>

            {/* Acknowledgement Content */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Terminal bar */}
                <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[11px] text-muted-foreground tracking-widest">cat acknowledgement.md</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-5 text-[14px] text-muted-foreground leading-[1.85] max-w-3xl">
                    <p>{ACKNOWLEDGEMENT_INFO.opening}</p>

                    <p>
                        To our OJT coordinator,{" "}
                        <span className="text-foreground font-semibold">{ACKNOWLEDGEMENT_INFO.coordinator}</span>
                        , thank you for your guidance, encouragement, and constant support.
                    </p>

                    <p>
                        To <span className="text-foreground font-semibold">{OJT_INFO.company}</span>, especially{" "}
                        {ACKNOWLEDGEMENT_INFO.supervisors.map((name, i) => (
                            <span key={name}>
                                <span className="text-accent font-semibold">{name}</span>
                                {i < ACKNOWLEDGEMENT_INFO.supervisors.length - 1 ? ", " : ""}
                            </span>
                        ))}{" "}
                        — thank you for sharing your knowledge, mentorship, and valuable life lessons.
                    </p>

                    <p>
                        To my fellow interns,{" "}
                        {ACKNOWLEDGEMENT_INFO.interns.map((name, i) => (
                            <span key={name}>
                                <span className="text-primary font-semibold">{name}</span>
                                {i < ACKNOWLEDGEMENT_INFO.interns.length - 1 ? ", " : ""}
                            </span>
                        ))}{" "}
                        — thank you for the teamwork, support, and fun moments we shared.
                    </p>

                    <p>
                        To <span className="text-secondary font-semibold">my family</span>, thank you for your love, support, and motivation throughout this experience.
                    </p>

                    <p>
                        And most of all, to <span className="text-foreground font-bold">Almighty God,</span> thank You for the strength, wisdom, and guidance in completing this training.
                    </p>

                    <p className="italic text-muted-foreground/60">{ACKNOWLEDGEMENT_INFO.closing}</p>
                </div>
            </div>
        </section>
    );
}