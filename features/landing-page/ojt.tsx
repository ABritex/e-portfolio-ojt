import { PERSON, OJT_INFO } from "@/data/portfolio";

export default function OJT() {
    return (
        <section
            id="ojt"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top: text left + note right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        Inside a government office, I learned that every document
                        carries <span className="text-foreground font-semibold">real weight</span> —
                        public funds, community needs, and the accountability that comes with handling both.
                        No localhost. No sandbox.{" "}
                        <span className="text-foreground font-semibold">Real stakes, real files, real process.</span>
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
                        Learning in the<br />
                        Field. For Real.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        My OJT at the <span className="text-foreground font-semibold">{OJT_INFO.company}</span> gave me
                        a front-row seat to government procurement under{" "}
                        <span className="text-primary">{OJT_INFO.law}</span> — {OJT_INFO.hours} hours of
                        documents, deadlines, and real discipline.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                </div>
            </div>

            {/* Big card: logo+text header on top, map below */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">

                {/* Card header: logo + office info + stats */}
                <div className="flex items-center gap-6 px-6 py-5 border-b border-border">
                    {/* Logo placeholder */}
                    <div className="w-14 h-14 rounded-xl border border-dashed border-border flex items-center justify-center shrink-0 text-muted-foreground/20 text-[9px] tracking-widest text-center leading-loose">
                        YOUR<br />LOGO
                    </div>

                    {/* Office info */}
                    <div className="flex flex-col gap-0.5">
                        <p className="text-[9px] text-muted-foreground/40 tracking-[.2em] uppercase">Office</p>
                        <p className="text-[14px] text-foreground font-bold leading-tight">
                            {OJT_INFO.company}
                        </p>
                        <p className="text-[11px] text-muted-foreground/50">Local Government Unit · {PERSON.academicYear}</p>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Stats */}
                    <div className="hidden md:flex items-center gap-6">
                        {[
                            { value: OJT_INFO.hours, label: "OJT Hours", color: "text-secondary" },
                            { value: "6+", label: "Doc Types", color: "text-accent" },
                            { value: OJT_INFO.law, label: "Law Studied", color: "text-primary" },
                        ].map(({ value, label, color }) => (
                            <div key={label} className="flex flex-col items-end">
                                <span className={`text-[18px] font-extrabold leading-none ${color}`}>{value}</span>
                                <span className="text-[9px] tracking-widest text-muted-foreground/40 uppercase mt-0.5">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map — full width inside the card, taller */}
                <div className="relative w-full" style={{ height: '520px' }}>
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-background/85 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5">
                        <span className="text-accent text-[11px]">$</span>
                        <span className="text-[11px] text-muted-foreground tracking-widest">LGU · BAC Office</span>
                    </div>
                    <iframe
                        src={OJT_INFO.location.embedSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.15) contrast(1.02)' }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                    />
                </div>
            </div>

        </section>
    );
}