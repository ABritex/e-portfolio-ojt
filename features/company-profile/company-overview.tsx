"use client";

import { OJT_INFO } from "@/data/portfolio";
import { Building2 } from "lucide-react";
import { Divider, TerminalWindow } from "@/components/terminal";

export function CompanyOverview() {
    return (
        <section id="cp-overview" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-secondary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-secondary/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Overview
                    </p>
                    <h2 data-aos="fade-right"
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Company<br />Overview.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        A government body ensuring fair and lawful public procurement.
                        <br />
                        <span className="text-muted-foreground/30">$ cat overview.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<Building2 size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter2/overview.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div data-aos="fade-right" className="flex items-center gap-5 p-5 rounded-xl border border-secondary/20 bg-secondary/5">
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <Building2 size={24} className="text-secondary" />
                        </div>
                        <div>
                            <p className="text-[16px] font-bold text-foreground">{OJT_INFO.company}</p>
                            <p className="text-[11px] text-muted-foreground/60 mt-0.5">Local Government Unit · Municipality of San Jose Occidental Mindoro</p>
                            <p className="text-[10px] text-secondary/60 mt-1 font-bold tracking-widest">{OJT_INFO.law} Compliant</p>
                        </div>
                    </div>

                    <div data-aos="fade-right" className="border-l-2 border-secondary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {OJT_INFO.companyDescription}
                        </p>
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-secondary/30">▸</span> Chapter II · Overview
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}