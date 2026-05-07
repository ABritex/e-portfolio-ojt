"use client";

import { PERSON, OJT_INFO } from "@/data/portfolio";
import { FileText } from "lucide-react";
import { HeroBanner, ChapterStrip } from "@/components/terminal";

const stats = [
    { label: "Total Hours", value: OJT_INFO.hours, unit: "hrs", color: "text-primary" },
    { label: "OJT Duration", value: OJT_INFO.days, unit: "days", color: "text-accent" },
    { label: "Law Followed", value: OJT_INFO.law, unit: "", color: "text-secondary" },
];

const quickFacts = stats.map((s) => ({
    label: s.label,
    value: `${s.value}${s.unit ? ` ${s.unit}` : ''}`,
    color: s.color,
    border: `border-${s.color.split('-')[1]}/20`,
    bg: `bg-${s.color.split('-')[1]}/5`,
}));

const chapterActions = [
    { label: "A. Importance", href: "#importance", color: "text-primary border-primary/20 bg-primary/5" },
    { label: "B. Objectives", href: "#objectives", color: "text-accent border-accent/20 bg-accent/5" },
    { label: "C. Time & Place", href: "#time-place", color: "text-secondary border-secondary/20 bg-secondary/5" },
];

export function Introduction() {
    return (
        <section id="introduction" className="w-full flex flex-col gap-0">
            <HeroBanner chapter="Chapter I" title="Introduction" subtitle="Foundation and Framework of the Internship Program" primaryColor="primary" secondaryColor="accent" quickFacts={quickFacts} />
            <ChapterStrip chapter="Chapter I — Introduction" sections={3} actions={chapterActions} icon={<FileText className="text-primary" />} />
            <div data-aos="fade-up" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mt-1">
                <span className="text-[11px] text-muted-foreground/50">
                    <span className="text-muted-foreground/30 mr-1">@</span>
                    {PERSON.name}
                </span>
                <span className="text-[11px] text-muted-foreground/50">
                    <span className="text-muted-foreground/30 mr-1">#</span>
                    {PERSON.id}
                </span>
                <span className="text-[11px] text-muted-foreground/50">
                    <span className="text-accent/40 mr-1">▸</span>
                    {OJT_INFO.company}
                </span>
            </div>
        </section>
    );
}