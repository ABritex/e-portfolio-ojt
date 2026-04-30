export default function OJT() {
    const documents = [
        {
            code: "SVP",
            name: "Small Value Procurement",
            desc: "Prepared SVP documents for purchases below the public bidding threshold. Handled supplier canvassing, abstract of quotations, and compliance with RA 9184.",
            tag: "Procurement",
            tagColor: "bg-primary/10 text-primary border-primary/20",
        },
        {
            code: "Public Bidding",
            name: "Competitive Bidding Process",
            desc: "Assisted in preparing bidding documents, Invitation to Bid (ITB), and post-qualification checklists. Observed actual bid openings and proper protocol.",
            tag: "Bidding",
            tagColor: "bg-accent/10 text-accent border-accent/20",
        },
        {
            code: "RFQ",
            name: "Request for Quotation",
            desc: "Drafted RFQ letters and consolidated supplier quotations. Assisted in comparative analysis to determine the lowest compliant bidder.",
            tag: "Canvassing",
            tagColor: "bg-secondary/10 text-secondary border-secondary/20",
        },
        {
            code: "PO / NOA",
            name: "Purchase Order & Notice of Award",
            desc: "Encoded and formatted Purchase Orders and Notices of Award after successful procurement. Maintained filing and tracking of all issued documents.",
            tag: "Records",
            tagColor: "bg-primary/10 text-primary border-primary/20",
        },
        {
            code: "BAC Res.",
            name: "BAC Resolutions",
            desc: "Helped prepare BAC Resolutions for recommending awards, approving procurement methods, and committee decisions per GPPB guidelines.",
            tag: "Committee",
            tagColor: "bg-accent/10 text-accent border-accent/20",
        },
        {
            code: "PhilGEPS",
            name: "PhilGEPS Posting",
            desc: "Encoded procurement opportunities and awards on the Philippine Government Electronic Procurement System to ensure transparency and compliance.",
            tag: "Compliance",
            tagColor: "bg-secondary/10 text-secondary border-secondary/20",
        },
    ];

    return (
        <section
            id="ojt"
            className="w-full flex flex-col gap-12"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[clamp(15px,2vw,18px)] text-muted-foreground leading-relaxed mb-8">
                        Inside a government office, I learned that every document
                        carries <span className="text-foreground font-semibold">real weight</span> —
                        public funds, community needs, and the accountability that comes with handling both.
                        No localhost. No sandbox.{" "}
                        <span className="text-foreground font-semibold">Real stakes, real files, real process.</span>
                    </p>
                    <h2
                        className="text-[clamp(40px,6vw,80px)] font-extrabold leading-[0.92]"
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
                <div className="lg:text-right lg:pt-2 flex items-start justify-end">
                    <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm">
                        My OJT at the LGU Bids and Awards Committee gave me a front-row seat to
                        government procurement under <span className="text-primary">RA 9184</span> — 300+ hours of
                        documents, deadlines, and discipline.
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

            {/* Middle: stats + button */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                <div className="flex gap-12">
                    {[
                        { value: "300+", label: "OJT Hours", color: "text-secondary" },
                        { value: "6+", label: "Doc Types", color: "text-accent" },
                        { value: "RA 9184", label: "Law Studied", color: "text-primary" },
                    ].map(({ value, label, color }) => (
                        <div key={label} className="flex flex-col">
                            <span className={`text-[clamp(20px,3vw,32px)] font-extrabold ${color}`}>{value}</span>
                            <span className="text-[10px] tracking-widest text-muted-foreground/50 uppercase">{label}</span>
                        </div>
                    ))}
                </div>
                <div className="flex lg:justify-end">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 border border-border bg-card text-foreground rounded-full px-7 py-3 text-[13px] hover:border-primary/50 hover:text-primary transition-all"
                    >
                        More About OJT
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Bottom: document cards */}
            <div className="w-full">
                <p className="text-center text-[11px] tracking-[.25em] uppercase text-primary font-bold mb-8">
                    WHAT I WORKED WITH
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {documents.map(({ code, name, desc, tag, tagColor }) => (
                        <div
                            key={code}
                            className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/30 hover:-translate-y-1 transition-all cursor-default"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                    </svg>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded border tracking-wide shrink-0 ${tagColor}`}>
                                    {tag}
                                </span>
                            </div>
                            <div className="text-[13px] font-bold text-foreground">{code}</div>
                            <div className="text-[11px] text-primary/80 font-medium">{name}</div>
                            <div className="text-[11px] text-muted-foreground leading-relaxed">{desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}