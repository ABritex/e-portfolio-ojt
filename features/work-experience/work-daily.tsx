"use client";

import { Clock } from "lucide-react";
import { Divider, TerminalWindow } from "@/components/terminal";

export function DailyTimeRecord() {
    return (
        <section id="we-dtr" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-accent font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-accent/40">Chapter III</span>
                        <span className="text-border">·</span>
                        Section B
                    </p>
                    <h2 data-aos="fade-right"
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Daily Time<br />Record.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        55 entries. Every arrival and departure accounted for.
                        <br />
                        <span className="text-muted-foreground/30">$ cat chapter3/daily-time-record.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<Clock size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter3/daily-time-record.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <Clock size={20} className="text-accent" />
                        </div>
                        <div>
                            <p className="text-[11px] text-accent font-bold tracking-[.2em] uppercase">B.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Daily Time Record</h3>
                            <p className="text-[11px] text-muted-foreground/60 mt-0.5">January 30 - May 4, 2026 · 55</p>
                        </div>
                    </div>

                    <div data-aos="fade-right" className="border-l-2 border-accent/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">Daily logging of arrival, departure, and total hours worked. Documented actual work hours against the required 504-hour internship mandate with supervisor verification.</p>
                    </div>
                    nooootttttttttttttttttttttt donnnnnnnnnnnnnnnnnnnnnnnne
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                            { label: "Total Days", value: "55", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
                            { label: "Total Hours", value: "504", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
                            { label: "Time In", value: "8:00 AM", color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/5" },
                            { label: "Time Out", value: "5:00 PM", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
                        ].map((s) => (
                            <div key={s.label} className={`rounded-xl border ${s.border} ${s.bg} p-4 flex flex-col gap-1`}>
                                <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">{s.label}</p>
                                <p className={`text-[15px] font-extrabold ${s.color}`}>{s.value}</p>
                            </div>
                        ))}
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-accent/30">▸</span> Chapter III · Section B
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}