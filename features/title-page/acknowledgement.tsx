"use client";

import { ACKNOWLEDGEMENT_INFO } from "@/data/portfolio";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";

export function Acknowledgement() {
    return (
        <section id="acknowledgement" className="w-full flex flex-col gap-12">
            <SectionHeader
                subtitle="To everyone who walked this path with me — your guidance shaped this journey more than you know."
                title={<>Acknowledgement<br />& Gratitude.</>}
                note={
                    <>
                        <span className="text-mute-foreground">Family. Mentors. Supervisors. Interns. Faith.</span>
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./acknowledgement.md</span>
                    </>
                }
            />


            <Divider />

            <TerminalWindow dataAos="fade-up" command="cat acknowledgement.md">
                <div className="p-6 md:p-10 flex flex-col gap-5 text-[14px] text-muted-foreground leading-[1.85] max-w-3xl">
                    <p data-aos="fade-right" className="italic text-muted-foreground/70 border-l-2 border-accent pl-4">
                        {ACKNOWLEDGEMENT_INFO.quote}
                    </p>
                    <p data-aos="fade-right">{ACKNOWLEDGEMENT_INFO.opening}</p>
                    <p data-aos="fade-right">
                        Special thanks to{" "}
                        <span className="text-accent font-semibold">{ACKNOWLEDGEMENT_INFO.permission.name}</span>
                        , {ACKNOWLEDGEMENT_INFO.permission.role},{" "}
                        {ACKNOWLEDGEMENT_INFO.permission.note}
                    </p>
                    <p data-aos="fade-right">
                        To{" "}
                        <span className="text-primary font-semibold">{ACKNOWLEDGEMENT_INFO.staff.name}</span>
                        . {ACKNOWLEDGEMENT_INFO.staff.note}
                    </p>
                    <p data-aos="fade-right">
                        To my fellow interns,{" "}
                        {ACKNOWLEDGEMENT_INFO.interns.map((name, i) => (
                            <span key={name}>
                                <span className="text-primary font-semibold">{name}</span>
                                {i < ACKNOWLEDGEMENT_INFO.interns.length - 1 ? ", " : ""}
                            </span>
                        ))}{" "}
                        — Thank you for the teamwork, support and moments we had.
                    </p>
                    <p data-aos="fade-right">
                        To my loved ones,{" "}
                        <span className="text-secondary font-semibold">
                            {ACKNOWLEDGEMENT_INFO.family}
                        </span>
                        . {ACKNOWLEDGEMENT_INFO.familyNote}
                    </p>
                    <p data-aos="fade-right">
                        To{" "}
                        <span className="text-foreground font-semibold">
                            {ACKNOWLEDGEMENT_INFO.coordinator}
                        </span>
                        , {ACKNOWLEDGEMENT_INFO.coordinatorNote}
                    </p>
                    <p data-aos="fade-right" className="text-xs text-muted-foreground/40 italic border-t border-border pt-4 mt-2">{ACKNOWLEDGEMENT_INFO.closing}</p>
                </div>
            </TerminalWindow>
        </section>
    );
}