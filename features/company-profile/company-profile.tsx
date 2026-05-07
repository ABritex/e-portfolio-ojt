"use client";
import { OJT_INFO } from "@/data/portfolio";
import { Building2 } from "lucide-react";
import { HeroBanner, ChapterStrip } from "@/components/terminal";

const QUICK_FACTS = [
    { label: "Governing Law", value: OJT_INFO.law, color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/5" },
    { label: "Office Type", value: "Government", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
    { label: "Function", value: "Procurement", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
];

export function CompanyProfile() {
    const chapterActions = [
        { label: "Overview", href: "#cp-overview", color: "text-secondary border-secondary/20 bg-secondary/5" },
        { label: "1. Nature", href: "#cp-nature", color: "text-primary border-primary/20 bg-primary/5" },
        { label: "2. Vision & Mission", href: "#cp-mission", color: "text-accent border-accent/20 bg-accent/5" },
        { label: "3. History", href: "#cp-history", color: "text-secondary border-secondary/20 bg-secondary/5" },
        { label: "4. Org Structure", href: "#cp-org", color: "text-primary border-primary/20 bg-primary/5" },
    ];

    return (
        <section id="company-profile" className="w-full flex flex-col gap-0">
            <HeroBanner chapter="Chapter II" title={<>Company<br />Profile</>} subtitle={OJT_INFO.company} primaryColor="secondary" secondaryColor="primary" quickFacts={QUICK_FACTS} description={`${OJT_INFO.companyDescription.slice(0, 120)}…`} />
            <ChapterStrip chapter="Chapter II — Company Profile" sections={4} actions={chapterActions} icon={<Building2 size={14} className="text-secondary" />} />
        </section>
    );
}