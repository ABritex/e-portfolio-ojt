"use client";
import { OBJECTIVES, PERSON, OJT_INFO } from "@/data/portfolio";
import { TrendingUp } from "lucide-react";
import { Divider } from "@/components/terminal/divider";
import { TerminalWindow } from "@/components/terminal/terminal-window";

export function ProgressReport() {

    return (
        <section id="we-progress" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-secondary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-secondary/40">Chapter III</span>
                        <span className="text-border">·</span>
                        Section C
                    </p>
                    <h2
                        data-aos="fade-right"
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Internship<br />Progress<br />Report.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        Final evaluation — all objectives completed across the full 486-hour training period.
                        <br />
                        <span className="text-muted-foreground/30">$ cat chapter3/progress-report.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<TrendingUp size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter3/progress-report.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">

                    {/* Title row */}
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <TrendingUp size={20} className="text-secondary" />
                        </div>
                        <div>
                            <p className="text-[11px] text-secondary font-bold tracking-[.2em] uppercase">C.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Internship Progress Report</h3>
                            <p className="text-[11px] text-muted-foreground/60 mt-0.5">January 30 - May 4, 2026 · 14 Objectives</p>
                        </div>
                    </div>

                    {/* Meta cards */}
                    <div data-aos="fade-right" className="grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
                        {[
                            { label: "Intern", value: PERSON.fullName },
                            { label: "Internship Site", value: OJT_INFO.company },
                            { label: "Hours Completed", value: `${OJT_INFO.hours} hours` },
                            { label: "Date Filed", value: OJT_INFO.dateFilled },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-secondary/5 px-4 py-3">
                                <p className="text-[9px] text-secondary/60 tracking-[.2em] uppercase mb-1">{label}</p>
                                <p className="text-[13px] text-secondary font-semibold">{value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div data-aos="fade-right" className="border-l-2 border-secondary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">Final evaluation — all objectives completed across the full 486-hour training period.</p>
                    </div>

                    {/* Objectives table */}
                    <div data-aos="fade-up" className="rounded-xl border border-border overflow-hidden">
                        <table className="w-full text-[11px]" style={{ tableLayout: "fixed" }}>
                            <colgroup>
                                <col style={{ width: "40px" }} />
                                <col />
                                <col style={{ width: "72px" }} />
                                <col style={{ width: "72px" }} />
                            </colgroup>
                            <thead>
                                <tr className="bg-secondary/5 border-b border-border">
                                    {["#", "Objective", "Status", "Problems"].map((h) => (
                                        <th key={h} className="text-[9px] text-secondary/70 tracking-[.18em] uppercase font-semibold text-left px-3.5 py-2.5">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {OBJECTIVES.map(({ id, text }) => (
                                    <tr key={id} className="border-b border-border/40 last:border-0 hover:bg-secondary/5 transition-colors">
                                        <td className="px-3.5 py-2.5 text-secondary/30 text-[10px] align-top">{id}</td>
                                        <td className="px-3.5 py-2.5 text-muted-foreground leading-relaxed align-top">{text}</td>
                                        <td className="px-3.5 py-2.5 align-top">
                                            <span className="inline-flex items-center gap-1.5 text-[10px] text-accent bg-accent/8 border border-accent/20 rounded-md px-2 py-0.5 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                Done
                                            </span>
                                        </td>
                                        <td className="px-3.5 py-2.5 text-[10px] text-muted-foreground/25 italic align-top">None</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Milestone box */}
                    <div data-aos="fade-up" className="rounded-xl border border-secondary/20 bg-secondary/5 p-5 flex items-start gap-4">
                        <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-secondary">
                                <polyline points="9 11 12 14 22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-secondary tracking-widest uppercase mb-1">Final Completion Milestone</p>
                            <p className="text-[12px] text-muted-foreground leading-relaxed">
                                Submitted May 04, 2026 — upon completion of the full 486-hour training period. All 13 objectives were accomplished with no problems encountered throughout the internship at LGU BAC Office.
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4 flex items-center gap-2">
                        <span className="text-secondary/30">▸</span> Chapter III · Section C
                        <span className="ml-auto">objectives: <span className="text-accent">13/13</span></span>
                        <span className="text-border">|</span>
                        <span>problems: <span className="text-accent">0</span></span>
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}