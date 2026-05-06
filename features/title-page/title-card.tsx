"use client";

import Image from "next/image";
import { PERSON, OJT_INFO, TITLE_PAGE_INFO } from "@/data/portfolio";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";

export function TitleCard() {
    return (
        <section id="title-card" className="w-full flex flex-col gap-12">
            <SectionHeader
                subtitle={
                    <>
                        A formal document fulfilling the requirements of{" "}
                        <span className="text-foreground font-semibold">{OJT_INFO.hours} hours</span> of
                        supervised on-the-job training — submitted with pride, filed with purpose.
                    </>
                }
                title={<>Title Page<br />& Front Matter.</>}
                note={
                    <>
                        {PERSON.course} · {PERSON.academicYear}
                        <br />
                        <span className="text-muted-foreground/40">$ cat title-page.pdf | render</span>
                    </>
                }
            />

            <Divider />

            <TerminalWindow dataAos="fade-up" command="open title-page.pdf">
                <div
                    className="relative w-full rounded-xl border border-border overflow-hidden flex flex-col items-center justify-center text-center px-8 py-20 gap-6"
                    style={{
                        backgroundImage: "url('/images/background.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundBlendMode: "overlay",
                        backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                >
                    <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-primary/30 rounded-tl-sm" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-primary/30 rounded-tr-sm" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-primary/30 rounded-bl-sm" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-primary/30 rounded-br-sm" />

                    <div className="flex flex-row gap-6 items-center justify-center">
                        <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center p-2 bg-card/50">
                            <Image src="/logo/omsc-logo.webp" alt="OMSC Logo" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center p-2 bg-card/50">
                            <Image src="/logo/bsit-logo.webp" alt="BSIT Logo" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center p-2 bg-card/50">
                            <Image src="/logo/lgu-logo.webp" alt="LGU Logo" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center p-2 bg-card/50">
                            <Image src="/logo/bac-logo.webp" alt="BAC Logo" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <p className="text-[12px] tracking-[.2em] uppercase text-primary font-bold">{TITLE_PAGE_INFO.college}</p>
                        <p className="text-[10px] tracking-[.15em] uppercase text-muted-foreground/40">{TITLE_PAGE_INFO.department}</p>
                    </div>

                    <div className="w-24 border-t border-border" />

                    <div className="flex flex-col gap-2">
                        <p className="text-[10px] tracking-[.35em] uppercase text-muted-foreground/40">Narrative Report on</p>
                        <h1 className="text-[clamp(20px,3.5vw,32px)] font-extrabold tracking-tight text-white leading-tight">
                            ON-THE-JOB TRAINING
                        </h1>
                        <p className="text-[12px] text-muted-foreground/60 tracking-widest">{OJT_INFO.company}</p>
                    </div>

                    <div className="w-24 border-t border-border" />

                    <div className="flex flex-col gap-2 text-[13px] text-muted-foreground">
                        <p><span className="text-muted-foreground/40">ID: </span><span className="text-white font-semibold">{PERSON.id}</span></p>
                        <p><span className="text-muted-foreground/40">Submitted by: </span><span className="text-white font-semibold">{PERSON.name}</span></p>
                        <p><span className="text-muted-foreground/40">Program: </span><span className="text-primary">{PERSON.course}</span></p>
                        <p><span className="text-muted-foreground/40">Academic Year: </span><span className="text-accent">{PERSON.academicYear}</span></p>
                        <p><span className="text-muted-foreground/40">Internship Period: </span><span className="text-secondary">{PERSON.internshipPeriod}</span></p>
                        <p><span className="text-muted-foreground/40">Adviser: </span><span className="text-white">{PERSON.adviser}</span></p>
                    </div>
                </div>
            </TerminalWindow>
        </section>
    );
}