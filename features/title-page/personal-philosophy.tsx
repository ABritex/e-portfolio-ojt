"use client";

import { TITLE_PAGE_INFO } from "@/data/portfolio";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";
import { Shield } from "lucide-react";

export function PersonalPhilosophy() {
    return (
        <section id="personal-philosophy" className="w-full flex flex-col gap-12">
            <SectionHeader
                subtitle="Beliefs shaped by code, tested by practice, proven by results."
                title={<>Personal<br />Philosophy.</>}
                note={
                    <>
                        <span className="text-muted-foreground">Technology is a tool. Utility over elegance. Impact over ego.</span>
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./philosophy.md</span>
                    </>
                }
            />


            <Divider icon={<Shield size={18} className="text-primary" />} />

            <TerminalWindow dataAos="fade-up" command="cat philosophy.md">
                <div className="p-6 md:p-10 flex flex-col gap-5 text-[14px] text-muted-foreground leading-[1.85] max-w-3xl relative">
                    <span className="text-primary text-6xl font-serif absolute -mt-2 -ml-4 select-none">&ldquo;</span>
                    {TITLE_PAGE_INFO.philosophy.map((para, i) => (
                        <p data-aos="fade-right" key={i} dangerouslySetInnerHTML={{ __html: para }} className="relative z-10 pl-6" />
                    ))}
                </div>
            </TerminalWindow>
        </section>
    );
}