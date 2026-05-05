"use client";

import Image from "next/image";
import { PERSON, OJT_INFO, TITLE_PAGE_INFO } from "@/data/portfolio";

export function TitleCard() {
    return (
        <section
            id="title-card"
            className="w-full flex flex-col gap-12"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top: text left + note right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div data-aos="fade-right">
                    <p className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        A formal document fulfilling the requirements of{" "}
                        <span className="text-foreground font-semibold">{OJT_INFO.hours} hours</span> of
                        supervised on-the-job training — submitted with pride, filed with purpose.
                    </p>
                    <h2
                        className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Title Page<br />
                        & Front Matter.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        {PERSON.course} · <span className="text-primary">{PERSON.academicYear}</span>
                        <br />
                        <span className="text-muted-foreground/40">$ cat title-page.pdf | render</span>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                </div>
            </div>

            {/* Title Card Content */}
            <div data-aos="fade-up" className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Terminal bar */}
                <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[11px] text-muted-foreground tracking-widest">open title-page.pdf</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                    </div>
                </div>

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
                        <p className="text-[10px] tracking-[.3em] uppercase text-muted-foreground/50">{TITLE_PAGE_INFO.university}</p>
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
                        <p><span className="text-muted-foreground/40">Submitted to: </span><span className="text-white">{TITLE_PAGE_INFO.supervisor}</span></p>
                        <p><span className="text-muted-foreground/40">Academic Year: </span><span className="text-accent">{PERSON.academicYear}</span></p>
                        <p><span className="text-muted-foreground/40">Internship Period: </span><span className="text-secondary">{PERSON.internshipPeriod}</span></p>
                        <p><span className="text-muted-foreground/40">Adviser: </span><span className="text-white">{PERSON.adviser}</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}