"use client";

import { INTRODUCTION } from "@/data/portfolio";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";
import { Clock, Shield, Users, TrendingUp, CheckSquare } from "lucide-react";

export function Importance() {
    return (
        <section id="importance" className="w-full flex flex-col gap-8">
            <SectionHeader
                subtitle="Why real-world exposure matters more than any textbook ever will."
                title={<>Importance<br />of Internship.</>}
                note={
                    <>
                        Chapter I · Section A
                        <br />
                        <span className="text-muted-foreground/30">$ cat importance.md</span>
                    </>
                }
            />

            <Divider icon={<Clock size={16} className="text-primary" />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter1/importance.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">

                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <Shield size={20} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">A.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Importance of Internship</h3>
                        </div>
                    </div>

                    <div data-aos="fade-right" className="border-l-2 border-primary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {INTRODUCTION.importance}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                            {
                                icon: <Clock size={13} className="text-primary" />,
                                label: "Real Experience",
                                desc: "Hands-on training before entering the workforce.",
                            },
                            {
                                icon: <Users size={13} className="text-primary" />,
                                label: "Work Ethics",
                                desc: "Learning professionalism and co-worker relations.",
                            },
                            {
                                icon: <TrendingUp size={13} className="text-primary" />,
                                label: "Global Readiness",
                                desc: "Builds confidence to compete in the real world.",
                            },
                        ].map((item) => (
                            <div data-aos="fade-up" key={item.label} className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-col gap-2">
                                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <p className="text-[11px] font-bold text-primary tracking-widest uppercase">{item.label}</p>
                                <p className="text-[12px] text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div data-aos="fade-up" className="rounded-xl border border-primary/20 bg-primary/5 p-5 flex items-start gap-4">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckSquare size={13} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-primary tracking-widest uppercase mb-1">Key Takeaway</p>
                            <p className="text-[12px] text-muted-foreground leading-relaxed">
                                Internship prepares students to be globally competitive — transforming academic learning into real professional confidence and competence.
                            </p>
                        </div>
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-primary/30">▸</span> Chapter I · Section A
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}