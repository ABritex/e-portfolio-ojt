"use client";

import { CAREER_PLAN } from "@/data/portfolio";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";
import { BarChart3 } from "lucide-react";

export function CareerPlan() {
    const colors = ["text-primary", "text-accent", "text-secondary"];
    const bgs = ["bg-primary/10 border-primary/30", "bg-accent/10 border-accent/30", "bg-secondary/10 border-secondary/30"];

    return (
        <section id="career-plan" className="w-full flex flex-col gap-12">
            <SectionHeader
                subtitle="A roadmap built on iteration, validated by execution."
                title={<>Career<br />Plan.</>}
                note={
                    <>
                        <span className="text-muted-foreground">Short-term: Land the role.Mid-term: Master the craft.Long-term: Lead the change.</span>
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./career.json</span>
                    </>
                }
            />

            <Divider icon={<BarChart3 size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat career.json">
                <div data-aos="fade-up" className="p-6 md:p-10 flex flex-col gap-0">
                    {CAREER_PLAN.map((phase, i) => (
                        <div data-aos="fade-up" key={phase.title} className="relative flex gap-6 pb-10 last:pb-0">
                            {i < CAREER_PLAN.length - 1 && (
                                <div className="absolute left-[21px] top-12 h-full w-px bg-border" />
                            )}
                            <div className={`shrink-0 w-11 h-11 rounded-full border flex items-center justify-center font-extrabold text-[15px] z-10 ${bgs[i % bgs.length]} ${colors[i % colors.length]}`}>
                                {i + 1}
                            </div>
                            <div className="flex flex-col gap-3 pt-1.5">
                                <h3 className={`text-[15px] font-bold ${colors[i % colors.length]}`}>{phase.title}</h3>
                                <p className="text-[13px] text-muted-foreground leading-relaxed">{phase.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </TerminalWindow>
        </section>
    );
}