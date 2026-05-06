"use client";

import { FRONT_MATTER, CHAPTERS, PHOTOS, PERSON, OJT_INFO } from "@/data/portfolio";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, BookOpen, FileText, Book } from "lucide-react";

type Section = {
    id: string;
    label: string;
    content: string;
};

function HoverContentRow({ section, index, isLast }: { section: Section; index: number; isLast?: boolean }) {
    const [hovered, setHovered] = useState(false);
    const positionAbove = isLast && hovered;

    return (
        <div className="relative">
            <a href={`${section.id}`} className="border border-border rounded-xl overflow-hidden block cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="w-full flex items-center justify-between px-5 py-3.5 text-left bg-card hover:bg-muted/40 transition-colors group">
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-foreground/40 tracking-widest tabular-nums w-4 text-right">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] text-foreground">{section.label}</span>
                    </div>
                    <ChevronRight size={14} className="text-muted-foreground/40 group-hover:text-accent transition-all duration-200" />
                </div>
            </a>

            {hovered && (
                <div className={`absolute left-0 w-full bg-card border border-border rounded-xl p-4 shadow-lg z-10 animate-in fade-in duration-200 ${positionAbove ? 'bottom-full mb-2' : 'top-full mt-2'}`}
                    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <p className="text-[12px] text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                    </p>
                </div>
            )}
        </div>
    );
}

export default function OJTNarrative() {
    return (
        <section id="ojt-narrative" className="w-full flex flex-col gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        A structured account of{" "}
                        <span className="text-foreground font-semibold">{OJT_INFO.hours} hours</span> spent
                        inside a government procurement office — every document real,
                        every deadline serious, every lesson permanent.
                    </p>
                    <h2
                        className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[0.92]"
                        style={{
                            background:
                                "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        OJT Narrative<br />
                        Report.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        {OJT_INFO.company} ·{" "}
                        <span className="text-primary">{OJT_INFO.law}</span> · {PERSON.academicYear}
                        <br />
                        <span className="text-muted-foreground/40">
                            $ cat narrative-report.pdf | less
                        </span>
                    </p>
                </div>
            </div>

            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <BookOpen size={18} className="text-accent" />
                </div>
            </div>

            {/* Map Card */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="flex items-center gap-6 px-6 py-5 border-b border-border">
                    <div className="w-14 h-14 rounded-xl border border-dashed border-border flex items-center justify-center shrink-0 overflow-hidden">
                        <Image src="/logo/bac-logo.webp" alt="BAC Office Logo" width={56} height={56} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <p className="text-[9px] text-muted-foreground/40 tracking-[.2em] uppercase">Office</p>
                        <p className="text-[14px] text-foreground font-bold leading-tight">{OJT_INFO.company}</p>
                        <p className="text-[11px] text-muted-foreground/50">Local Government Unit · {PERSON.academicYear}</p>
                    </div>
                    <div className="flex-1" />
                    <div className="hidden md:flex items-center gap-6">
                        {[
                            { value: OJT_INFO.hours, label: "OJT Hours", color: "text-secondary" },
                            { value: "6+", label: "Doc Types", color: "text-accent" },
                            { value: OJT_INFO.law, label: "Law Studied", color: "text-primary" },
                        ].map(({ value, label, color }) => (
                            <div key={label} className="flex flex-col items-end">
                                <span className={`text-[18px] font-extrabold leading-none ${color}`}>{value}</span>
                                <span className="text-[9px] tracking-widest text-muted-foreground/40 uppercase mt-0.5">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative w-full" style={{ height: '520px' }}>
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-background/85 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5">
                        <span className="text-accent text-[11px]">$</span>
                        <span className="text-[11px] text-muted-foreground tracking-widest">LGU · BAC Office</span>
                    </div>
                    <iframe src={OJT_INFO.location.embedSrc} width="100%" height="100%" style={{ border: 0, filter: 'grayscale(0.15) contrast(1.02)' }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 w-full h-full" />
                </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[11px] text-muted-foreground tracking-widest">
                        cat TABLE_OF_CONTENTS.md
                    </span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                    </div>
                </div>

                <div className="p-6 flex flex-col gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FileText size={15} className="text-primary" />
                            <span className="text-[11px] font-bold text-primary tracking-[.2em] uppercase">
                                Contents
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {FRONT_MATTER.map((s, i) => (
                                <HoverContentRow key={s.id} section={s} index={i} isLast={false} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Book size={15} className="text-accent" />
                            <span className="text-[11px] font-bold text-accent tracking-[.2em] uppercase">
                                Chapters
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {CHAPTERS.map((s, i) => (
                                <HoverContentRow key={s.id} section={s} index={i + FRONT_MATTER.length} isLast={i === CHAPTERS.length - 1} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-[11px] font-bold tracking-[.25em] uppercase text-foreground">
                        OJT Experience
                    </span>
                    <div className="flex-1 border-t border-border" />
                    <span className="text-[10px] text-muted-foreground/40 tracking-widest">
                        {PHOTOS.length} captures
                    </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PHOTOS.map((photo) => (
                        <div key={photo.caption} className="group relative rounded-2xl border border-border overflow-hidden bg-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                                <Image src={photo.src} alt={photo.caption} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500" />
                                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm border border-border rounded-md px-2.5 py-1">
                                    <span className={`text-[10px] ${photo.color}`}>▸</span>
                                    <span className="text-[10px] text-muted-foreground tracking-widest">
                                        {photo.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="px-4 py-3 flex items-center justify-between">
                                <span className="text-[12px] text-muted-foreground">{photo.caption}</span>
                                <span className={`text-[10px] ${photo.color} tracking-widest`}>WEBP</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}