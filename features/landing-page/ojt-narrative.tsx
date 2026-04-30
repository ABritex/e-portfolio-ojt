"use client";
import { FRONT_MATTER, CHAPTERS, APPENDICES, PHOTOS, PERSON, OJT_INFO } from "@/data/portfolio";
import Image from "next/image";
import { useState } from "react";

type Section = {
    id: string;
    label: string;
    content: string;
};

function HoverContentRow({ section, index }: { section: Section; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative">
            <a
                href={`/ojt/${section.id}`}
                className="border border-border rounded-xl overflow-hidden block cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="w-full flex items-center justify-between px-5 py-3.5 text-left bg-card hover:bg-muted/40 transition-colors group">
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-foreground/40 tracking-widest tabular-nums w-4 text-right">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] text-foreground">{section.label}</span>
                    </div>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground/40 group-hover:text-accent transition-all duration-200"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </a>

            {hovered && (
                <div
                    className="absolute left-0 top-full mt-2 w-full bg-card border border-border rounded-xl p-4 shadow-lg z-10 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
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
        <section
            id="ojt-narrative"
            className="w-full flex flex-col gap-10"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Header */}
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

            {/* Divider */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                        className="text-accent"
                    >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                </div>
            </div>

            {/* Table of Contents Card */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Card header */}
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
                    {/* Front Matter */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span className="text-[11px] font-bold text-primary tracking-[.2em] uppercase">
                                Contents
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {FRONT_MATTER.map((s, i) => (
                                <HoverContentRow key={s.id} section={s} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Chapters */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            <span className="text-[11px] font-bold text-accent tracking-[.2em] uppercase">
                                Chapters
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {CHAPTERS.map((s, i) => (
                                <HoverContentRow key={s.id} section={s} index={i + FRONT_MATTER.length} />
                            ))}
                        </div>
                    </div>

                    {/* Appendices */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                            </svg>
                            <span className="text-[11px] font-bold text-secondary tracking-[.2em] uppercase">
                                Appendices
                            </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {APPENDICES.map((a) => (
                                <a
                                    key={a.id}
                                    href={`/ojt/${a.id}`}
                                    className="flex items-center justify-between px-4 py-3 border border-border rounded-xl bg-card hover:border-secondary/40 hover:text-secondary text-foreground text-[13px] transition-all group"
                                >
                                    {a.label}
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-muted-foreground/30 group-hover:text-secondary transition-colors"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* OJT Experience Photos */}
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
                        <div
                            key={photo.caption}
                            className="group relative rounded-2xl border border-border overflow-hidden bg-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                                <Image
                                    src={photo.src}
                                    alt={photo.caption}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                                />
                                {/* terminal overlay badge */}
                                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm border border-border rounded-md px-2.5 py-1">
                                    <span className={`text-[10px] ${photo.color}`}>▸</span>
                                    <span className="text-[10px] text-muted-foreground tracking-widest">
                                        {photo.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="px-4 py-3 flex items-center justify-between">
                                <span className="text-[12px] text-muted-foreground">{photo.caption}</span>
                                <span className={`text-[10px] ${photo.color} tracking-widest`}>JPG</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}