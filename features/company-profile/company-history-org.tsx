"use client";
import { COMPANY_PROFILE } from "@/data/portfolio";

export function CompanyHistory() {
    return (
        <section
            id="cp-history"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-secondary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-secondary/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Section 3
                    </p>
                    <h2
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        History &<br />Background.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        From manual paperwork to digital procurement. A 20-year evolution.
                        <br />
                        <span className="text-muted-foreground/30">$ cat history.md</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-secondary text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">cat chapter2/history.md</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/30" />
                        <span className="w-2 h-2 rounded-full bg-secondary/30" />
                        <span className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] text-secondary font-bold tracking-[.2em] uppercase">3.</p>
                            <h3 className="text-[17px] font-bold text-foreground">History / Background of the Agency</h3>
                        </div>
                    </div>

                    <div className="border-l-2 border-secondary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {COMPANY_PROFILE.history}
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col gap-0">
                        {[
                            { year: "2004", label: "RA 9184 enacted", desc: "BAC formally established under the Government Procurement Reform Act", color: "bg-secondary" },
                            { year: "2004–2015", label: "Manual Era", desc: "Paper-based procurement documentation and manual filing systems", color: "bg-primary" },
                            { year: "2016+", label: "Digital Transition", desc: "Shift to digital documentation and electronic procurement systems", color: "bg-accent" },
                            { year: "2026", label: "Present", desc: "Full digital records management with intern support on BAC Secretariat", color: "bg-secondary" },
                        ].map((item, i, arr) => (
                            <div key={item.year} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className={`w-3 h-3 rounded-full shrink-0 mt-1.5 ${item.color}`} />
                                    {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                                </div>
                                <div className={`pb-6 ${i === arr.length - 1 ? "pb-0" : ""}`}>
                                    <p className="text-[10px] font-bold tracking-widest text-muted-foreground/50 uppercase">{item.year}</p>
                                    <p className="text-[13px] font-bold text-foreground mt-0.5">{item.label}</p>
                                    <p className="text-[12px] text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-secondary/30">▸</span> Chapter II · Section 3
                    </p>
                </div>
            </div>
        </section>
    );
}

export function CompanyOrgChart() {
    return (
        <section
            id="cp-org"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-primary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-primary/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Section 4
                    </p>
                    <h2
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Organizational<br />Structure.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        The chain of command that keeps procurement accountable.
                        <br />
                        <span className="text-muted-foreground/30">$ cat org-chart.md</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                        <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" />
                        <line x1="6" y1="9" x2="6" y2="15" /><line x1="15" y1="6" x2="9" y2="6" />
                        <line x1="6" y1="15" x2="15" y2="18" />
                    </svg>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-primary text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">cat chapter2/org-chart.md</span>
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
                                <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" />
                                <line x1="6" y1="9" x2="6" y2="15" /><line x1="15" y1="6" x2="9" y2="6" />
                                <line x1="6" y1="15" x2="15" y2="18" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">4.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Organizational Structure</h3>
                        </div>
                    </div>

                    {/* Visual org chart */}
                    <div className="flex flex-col items-center gap-0">
                        {/* Mayor */}
                        <div className="px-6 py-3 rounded-xl border border-primary/30 bg-primary/10 text-center">
                            <p className="text-[12px] font-bold text-primary">Office of the Mayor</p>
                        </div>
                        <div className="w-px h-6 bg-border" />

                        {/* BAC */}
                        <div className="px-6 py-3 rounded-xl border border-accent/30 bg-accent/10 text-center">
                            <p className="text-[12px] font-bold text-accent">Bids and Awards Committee (BAC)</p>
                        </div>
                        <div className="flex gap-0 items-start">
                            <div className="flex flex-col items-center">
                                <div className="w-px h-6 bg-border" />
                                {/* Secretariat */}
                                <div className="px-5 py-2.5 rounded-xl border border-secondary/30 bg-secondary/10 text-center">
                                    <p className="text-[11px] font-bold text-secondary">BAC Secretariat</p>
                                </div>
                                <div className="flex gap-6 items-start mt-0">
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-5 bg-border" />
                                        <div className="px-4 py-2 rounded-lg border border-border bg-card text-center">
                                            <p className="text-[10px] text-muted-foreground">Document Controller</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-5 bg-border" />
                                        <div className="px-4 py-2 rounded-lg border border-border bg-card text-center">
                                            <p className="text-[10px] text-muted-foreground">Technical Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-px h-4 bg-border" />
                        <div className="px-5 py-2.5 rounded-xl border border-border bg-card/60 text-center">
                            <p className="text-[10px] text-muted-foreground">BAC Members (5) · Legal / Finance / Procurement Units</p>
                        </div>
                    </div>

                    {/* Raw pre for reference */}
                    <div className="rounded-xl border border-border overflow-hidden">
                        <div className="px-4 py-2 border-b border-border bg-card/50 flex items-center gap-2">
                            <span className="text-accent/40 text-[10px]">▸</span>
                            <span className="text-[10px] text-muted-foreground/50 tracking-widest">org-chart.txt</span>
                        </div>
                        <pre className="text-[11px] text-muted-foreground p-5 leading-relaxed overflow-x-auto">
                            <code>{COMPANY_PROFILE.orgChart}</code>
                        </pre>
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-primary/30">▸</span> Chapter II · Section 4
                    </p>
                </div>
            </div>
        </section>
    );
}