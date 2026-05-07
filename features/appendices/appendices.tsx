"use client";

import { FileText } from "lucide-react";
import { APPENDICES_FULL } from "@/data/portfolio";
import { HeroBanner, ChapterStrip } from "@/components/terminal";

const QUICK_FACTS = [
    { label: "Total Documents", value: `${APPENDICES_FULL.length}`, color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/5" },
    { label: "Category", value: "Supporting", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
    { label: "Status", value: "Completed", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
];

export function Appendices() {
    const chapterActions = [
        { label: "A - M", href: "#appendices-am", color: "text-secondary border-secondary/20 bg-secondary/5" },
        { label: "N - R", href: "#appendices-nr", color: "text-primary border-primary/20 bg-primary/5" },
    ];

    return (
        <section id="appendices" className="w-full flex flex-col gap-0">
            <HeroBanner chapter="Chapter V" title={<>Appendices<br />& Records.</>} subtitle="Supporting documents — the complete paperwork of the internship journey." primaryColor="secondary" secondaryColor="accent" quickFacts={QUICK_FACTS} description="Forms. Certificates. Records. Documentation." />
            <ChapterStrip chapter="Chapter V — Appendices" sections={2} actions={chapterActions} icon={<FileText size={14} className="text-secondary" />} />
        </section>
    );
}