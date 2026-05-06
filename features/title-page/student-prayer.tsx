"use client";

import { STUDENT_PRAYER } from "@/data/portfolio";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";
import { Clock } from "lucide-react";

export function StudentPrayer() {
    return (
        <section id="student-prayer" className="w-full flex flex-col gap-12">
            <SectionHeader
                subtitle="A prayer for guidance, strength, and wisdom throughout the training journey."
                title={<>Student<br />Prayer.</>}
                note={
                    <>
                        <span className="text-muted-foreground">Faith as foundation. Hope as compass. Gratitude as strength.</span>
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./prayer.md</span>
                    </>
                }
            />


            <Divider icon={<Clock size={18} className="text-secondary" />} />

            <TerminalWindow dataAos="fade-up" command="cat prayer.md">
                <div className="relative border-l-2 border-secondary/30 pl-8 ml-2 p-6 md:p-10">
                    <h3 data-aos="fade-right" className="text-sm font-semibold text-foreground mb-4">{STUDENT_PRAYER.title}</h3>
                    <span className="absolute -top-3 -left-2 text-[52px] leading-none text-secondary/15 font-serif select-none">&ldquo;</span>
                    <div className="flex flex-col gap-5 text-[14px] text-muted-foreground leading-[1.85] max-w-3xl pt-2">
                        <div className="flex flex-col gap-5">
                            {STUDENT_PRAYER.paragraphs.map((stanza, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    {stanza.map((line, j) => (
                                        <p data-aos="fade-right" key={j} className={j === 0 && stanza.length > 1 ? "text-foreground font-semibold" : ""}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <p data-aos="fade-right" className="text-xs text-muted-foreground/40 italic border-t border-border pt-4 mt-2">{STUDENT_PRAYER.footer}</p>

                    </div>
                </div>
            </TerminalWindow>
        </section>
    );
}