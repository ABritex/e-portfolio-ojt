"use client";

import { Briefcase } from "lucide-react";
import { HeroBanner, ChapterStrip } from "@/components/terminal";

const reports = [
    { title: "Weekly Accomplishment Report", count: "14 reports" },
    { title: "Daily Time Record", count: "55 entries" },
    { title: "Internship Progress Report", count: "1 report" },
    { title: "Internship Analysis Report", count: "1 report" },
];

export function WorkExperience() {
    const quickFacts = reports.map((r, i) => {
        const colors = ["text-primary", "text-accent", "text-secondary", "text-accent"];
        const borders = ["border-primary/20 bg-primary/5", "border-accent/20 bg-accent/5", "border-secondary/20 bg-secondary/5", "border-accent/20 bg-accent/5"];
        return {
            label: r.title.split(" ").slice(-1)[0],
            value: r.count,
            color: colors[i],
            border: borders[i].split(" ")[0],
            bg: borders[i].split(" ")[1],
            key: `${r.title.split(" ").slice(-1)[0]}-${i}`,
        };
    });

    const chapterActions = [
        { label: "A. Weekly Report", href: "#we-weekly", color: "text-primary border-primary/20 bg-primary/5" },
        { label: "B. Daily Time Record", href: "#we-dtr", color: "text-accent border-accent/20 bg-accent/5" },
        { label: "C. Progress Report", href: "#we-progress", color: "text-secondary border-secondary/20 bg-secondary/5" },
        { label: "D. Analysis Report", href: "#we-analysis", color: "text-primary border-primary/20 bg-primary/5" },
    ];

    const icon = <Briefcase size={14} className="text-primary" />;

    return (
        <section id="work-experience" className="w-full flex flex-col gap-0">
            <HeroBanner chapter="Chapter III" title={<>Work<br />Experience</>} subtitle="Documentation of tasks, hours, and analysis throughout the training" quickFacts={quickFacts} />
            <ChapterStrip chapter="Chapter III — Work Experience" sections={4} actions={chapterActions} icon={icon} />
        </section>
    );
}