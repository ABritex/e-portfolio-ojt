"use client";

import Link from "next/link";
import { SectionHeader, Divider } from "@/components/terminal";
import { Info, Building2, Columns3, ClipboardCheck, Link2, ArrowRight, BookOpen } from "lucide-react";

export function EPortfolioContents() {
    const contents = [
        {
            title: "Chapter I: Introduction",
            description: "Overview of internship importance, objectives, and setting",
            href: "/introduction",
            color: "primary" as const,
            icon: <Info className="w-5 h-5" />
        },
        {
            title: "Chapter II: Company Profile",
            description: "Details about the host company, its mission, and structure",
            href: "/company-profile",
            color: "accent" as const,
            icon: <Building2 className="w-5 h-5" />
        },
        {
            title: "Chapter III: Work Experiences",
            description: "Weekly reports, time records, and project documentation",
            href: "/work-experience",
            color: "secondary" as const,
            icon: <Columns3 className="w-5 h-5" />
        },
        {
            title: "Chapter IV: Assessment",
            description: "Evaluation forms and internship performance assessment",
            href: "/assessment",
            color: "primary" as const,
            icon: <ClipboardCheck className="w-5 h-5" />
        },
        {
            title: "Appendices",
            description: "Additional documentation, certificates, and attachments",
            href: "/appendices",
            color: "accent" as const,
            icon: <Link2 className="w-5 h-5" />
        },
    ];

    const colors = {
        primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/25", hover: "hover:border-primary/40 hover:bg-primary/5" },
        accent: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/25", hover: "hover:border-accent/40 hover:bg-accent/5" },
        secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/25", hover: "hover:border-secondary/40 hover:bg-secondary/5" },
    };

    return (
        <section id="e-portfolio-contents" className="w-full flex flex-col gap-12">
            <SectionHeader
                subtitle="Navigate through the comprehensive documentation of your internship experience"
                title={<>E-Portfolio<br />Contents.</>}
                note={
                    <>
                        <span className="text-muted-foreground">Click any chapter to explore detailed documentation.</span>
                        <br />
                        <span className="text-muted-foreground/40">$ cat ./contents.json</span>
                    </>
                }
            />

            <Divider icon={<BookOpen size={18} />} />

            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contents.map((item) => {
                    const c = colors[item.color];
                    return (
                        <Link key={item.title} href={item.href} className={`group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-200 ${c.hover}`}>
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.bg} shrink-0`}>
                                <div className={c.text}>
                                    {item.icon}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className={`text-[15px] font-bold ${c.text} group-hover:${c.text}`}>
                                    {item.title}
                                </h3>
                                <p className="text-[13px] text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex-1" />
                            <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                                <span>Explore</span>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}