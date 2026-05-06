"use client";

import { INTRODUCTION } from "@/data/portfolio";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";
import { Radar, Target } from "lucide-react";

const OBJECTIVE_ITEMS = [
    {
        number: "01",
        label: "Real Work Exposure",
        desc: "Provide students a chance to be exposed in a real work setting with the integration of all their academic learnings.",
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
    },
    {
        number: "02",
        label: "Values & Skills",
        desc: "Develop and instill positive work attitude, good relationships with co-workers, technical proficiency, and the willingness to learn.",
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
    {
        number: "03",
        label: "Confidence & Competence",
        desc: "Allow students to gain confidence, competence, and satisfaction by applying acquired knowledge to real industrial scenarios.",
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
    },
];

export function Objectives() {
    return (
        <section id="objectives" className="w-full flex flex-col gap-8">
            <SectionHeader
                subtitle="Goals set before day one. Benchmarks measured on day ninety."
                title={<>Objectives<br />of Internship.</>}
                note={
                    <>
                        Chapter I · Section B
                        <br />
                        <span className="text-muted-foreground/30">$ cat objectives.md</span>
                    </>
                }
            />

            <Divider icon={<Radar size={16} className="text-accent" />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter1/objectives.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <Target size={20} className="text-accent" />
                        </div>
                        <div>
                            <p className="text-[11px] text-accent font-bold tracking-[.2em] uppercase">B.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Objectives of Internship</h3>
                        </div>
                    </div>

                    <div data-aos="fade-right" className="border-l-2 border-accent/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {INTRODUCTION.objectives}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {OBJECTIVE_ITEMS.map((item) => (
                            <div data-aos="fade-up" key={item.label} className={`rounded-xl border ${item.border} ${item.bg} p-5 flex items-start gap-4`}>
                                <div className={`text-[22px] font-bold leading-none shrink-0 mt-0.5 ${item.color} opacity-40`}>
                                    {item.number}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className={`text-[11px] font-bold tracking-[.15em] uppercase ${item.color}`}>
                                        {item.label}
                                    </p>
                                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-accent/30">▸</span> Chapter I · Section B
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}