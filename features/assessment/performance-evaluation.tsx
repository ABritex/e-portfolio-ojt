"use client";

import { FileText, BarChart3 } from "lucide-react";
import Image from "next/image";
import { TerminalWindow, Divider } from "@/components/terminal";
import { SR_TOTAL, PR_TOTAL, SICR_TOTAL, ASR_TOTAL, MAX, srScore, prScore, sicrScore, asrScore, overall, ratingLabel } from "@/data/portfolio";

export function EvaluationForm() {
    const scores = [
        { key: "SR", label: "Student Self-Rating", total: SR_TOTAL, computed: srScore, weight: "10%", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5", barBg: "bg-primary", track: "bg-primary/10" },
        { key: "PR", label: "Peer Rating", total: PR_TOTAL, computed: prScore, weight: "10%", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5", barBg: "bg-accent", track: "bg-accent/10" },
        { key: "SICR", label: "Student Internship Coordinator Rating", total: SICR_TOTAL, computed: sicrScore, weight: "30%", color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/5", barBg: "bg-secondary", track: "bg-secondary/10" },
        { key: "ASR", label: "Agency Supervisor Rating", total: ASR_TOTAL, computed: asrScore, weight: "50%", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5", barBg: "bg-accent", track: "bg-accent/10" },
    ];

    const raters = [
        { role: "Student Intern", name: "Nicholas John C. Abeleda", initials: "NJA", color: "text-primary border-primary/20 bg-primary/5" },
        { role: "Peer", name: "Curt David T. Gamil", initials: "CDG", color: "text-accent border-accent/20 bg-accent/5" },
        { role: "Student Internship Coordinator", name: "Ailen B. Garcia, EdD, DIT", initials: "ABG", color: "text-secondary border-secondary/20 bg-secondary/5" },
        { role: "Agency Supervisor", name: "Mary Rose S. Cortez", initials: "MRC", color: "text-primary border-primary/20 bg-primary/5" },
    ];

    const evalImages = [
        { src: "/images/assessment/student-internship-evaluation-form-1.jpg", label: "Page 1 of 3" },
        { src: "/images/assessment/student-internship-evaluation-form-2.jpg", label: "Page 2 of 3" },
        { src: "/images/assessment/student-internship-evaluation-form-3.jpg", label: "Page 3 of 3" },
    ];

    return (
        <section id="as-form" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" >
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-accent font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-accent/40">Chapter IV</span>
                        <span className="text-border">·</span>
                        Section A
                    </p>
                    <h2 data-aos="fade-right"
                        className="text-[clamp(30px,4.5vw,60px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Performance<br />Evaluation.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        Official evaluation documentation from LGU (BAC Office) and Occidental Mindoro State College.
                        <br />
                        <span className="text-muted-foreground/30">$ cat eval-form.md</span>
                    </p>
                </div>
            </div >

            <Divider icon={<FileText size={16} />} iconClassName="text-accent" />

            <TerminalWindow dataAos="fade-up" command="cat chapter4/eval-form.md">
                <div className="p-6 md:p-10 flex flex-col gap-10">

                    <div className="flex flex-col gap-4">
                        <p data-aos="fade-right" className="text-[11px] font-bold text-accent tracking-[.2em] uppercase">Evaluation Form Scans</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {evalImages.map((img) => (
                                <div data-aos="fade-up" key={img.label} className="rounded-xl border border-border overflow-hidden flex flex-col">
                                    <div className="px-4 py-2 border-b border-border bg-card/50 flex items-center gap-2">
                                        <span className="text-accent/40 text-[10px]">▸</span>
                                        <span className="text-[10px] text-muted-foreground/50 tracking-widest">{img.label}</span>
                                    </div>
                                    <div className="relative w-full pt-[75%]">
                                        <Image src={img.src} alt={`Student Internship Evaluation Form — ${img.label}`} fill sizes="(min-width: 640px) 33vw, 100vw" className="absolute inset-0 w-full h-full object-contain bg-white" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="as-ratings" className="flex flex-col gap-6">
                        <div data-aos="fade-right" className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                <BarChart3 size={20} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">Summary</p>
                                <h3 className="text-[17px] font-bold text-foreground">Performance Evaluation Summary</h3>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            {scores.map((s) => {
                                const pct = (s.total / (MAX * 5)) * 100;
                                return (
                                    <div data-aos="fade-right" key={s.key}>
                                        <div className="flex items-start justify-between mb-1.5 gap-2 flex-wrap">
                                            <div>
                                                <span className={`text-[12px] font-bold ${s.color}`}>{s.key}</span>
                                                <span className="text-[11px] text-muted-foreground ml-2">— {s.label}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-[11px] text-muted-foreground/50">Total: <span className="text-foreground font-semibold">{s.total}</span></span>
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${s.border} ${s.bg} ${s.color}`}>{s.key} = {s.computed.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div className={`w-full h-2 rounded-full ${s.track}`}>
                                            <div className={`h-full rounded-full ${s.barBg}`} style={{ width: `${pct}%` }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div data-aos="fade-up" className="rounded-xl border border-border bg-card/50 overflow-hidden">
                            <div className="px-5 py-3 border-b border-border">
                                <span className="text-[10px] font-bold text-muted-foreground/50 tracking-widest uppercase">Calculation</span>
                            </div>
                            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {scores.map((s) => (
                                    <div key={s.key} className={`rounded-lg border p-3 ${s.border} ${s.bg}`}>
                                        <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${s.color}`}>{s.key} ({s.weight})</p>
                                        <p className="text-[11px] text-muted-foreground font-mono">
                                            ({s.total} / {MAX}) × {s.weight} = <span className={`font-bold ${s.color}`}>{s.computed.toFixed(2)}</span>
                                        </p>
                                    </div>
                                ))}
                                <div className="sm:col-span-2 rounded-lg border border-accent/30 bg-accent/8 p-3 flex items-center justify-between">
                                    <p className="text-[11px] text-muted-foreground font-mono">
                                        {srScore.toFixed(2)} + {prScore.toFixed(2)} + {sicrScore.toFixed(2)} + {asrScore.toFixed(2)} =
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[22px] font-extrabold text-accent">{overall.toFixed(2)}</span>
                                        <span className="text-[10px] text-accent/70 tracking-widest uppercase font-bold">{ratingLabel(overall)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="rounded-xl border border-border bg-card/50 overflow-hidden">
                            <div className="px-5 py-3 border-b border-border">
                                <span className="text-[10px] font-bold text-muted-foreground/50 tracking-widest uppercase">Rated By</span>
                            </div>
                            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {raters.map((r) => (
                                    <div key={r.role} className="flex items-center gap-3">
                                        <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${r.color}`}>
                                            <span className="text-[10px] font-bold">{r.initials}</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">{r.role}</p>
                                            <p className="text-[13px] font-semibold text-foreground">{r.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-accent/30">▸</span> Chapter IV · Section A — Performance Evaluation
                    </p>
                </div>
            </TerminalWindow>
        </section >
    );
}