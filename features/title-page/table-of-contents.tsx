"use client";

import { TOC_STRUCTURE, APPENDICES_FULL } from "@/data/portfolio";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";
import { FileText, HelpCircle, Building2, Columns3, ClipboardCheck, ArrowRight, Link2, List } from "lucide-react";

const COLOR = {
    primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/25", dot: "bg-primary", tag: "bg-primary/10 text-primary border-primary/20" },
    accent: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/25", dot: "bg-accent", tag: "bg-accent/10 text-accent border-accent/20" },
    secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/25", dot: "bg-secondary", tag: "bg-secondary/10 text-secondary border-secondary/20" },
} as const;

type ColorKey = keyof typeof COLOR;

const GROUP_ICONS: Record<string, React.ReactNode> = {
    "Front Matter": <FileText size={13} />,
    "Chapter I: Introduction": <HelpCircle size={13} />,
    "Chapter II: Company Profile": <Building2 size={13} />,
    "Chapter III: Work Experiences": <Columns3 size={13} />,
    "Chapter IV: Assessment of the Practicum Program": <ClipboardCheck size={13} />,
};

function TocRow({ index, label, href, color, isSub = false, }: {
    index: string;
    label: string;
    href: string;
    color: ColorKey;
    isSub?: boolean;
}) {
    const c = COLOR[color];
    return (
        <a data-aos="fade-right" href={href} className={`group flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3.5 hover:${c.border} hover:bg-muted/30 transition-all duration-150 ${isSub ? "ml-6" : ""}`}>
            <span className={`shrink-0 text-[10px] tabular-nums tracking-widest w-6 text-right ${isSub ? "text-muted-foreground/30" : "text-muted-foreground/40"}`}>
                {index}
            </span>
            <span className={`shrink-0 w-1.5 h-1.5 rounded-full ${isSub ? "bg-border" : c.dot} opacity-70`} />
            <span className={`flex-1 text-[13px] ${isSub ? "text-muted-foreground" : "text-foreground"} group-hover:${c.text} transition-colors`}>
                {label}
            </span>
            <ArrowRight size={13} className={`shrink-0 text-muted-foreground/20 group-hover:${c.text} transition-colors`} />
        </a>
    );
}

function TocGroup({ group, color, items, startIndex, }: {
    group: string;
    color: ColorKey;
    items: { id: string; label: string; href: string; subs: { label: string; href: string }[] }[];
    startIndex: number;
}) {
    const c = COLOR[color];
    const icon = GROUP_ICONS[group];

    return (
        <div className="flex flex-col gap-3">
            <div data-aos="fade-right" className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${c.bg}`}>
                    <span className={c.text}>{icon}</span>
                </div>
                <span className={`text-[11px] font-bold tracking-[.2em] uppercase ${c.text}`}>
                    {group}
                </span>
                <div className="flex-1 border-t border-border" />
                <span className={`text-[9px] tracking-widest px-2 py-0.5 rounded-full border ${c.tag}`}>
                    {items.length} item{items.length !== 1 ? "s" : ""}
                </span>
            </div>

            <div className="flex flex-col gap-1.5">
                {items.map((item, i) => (
                    <TocRow key={item.id} index={String(startIndex + i).padStart(2, "0")} label={item.label} href={item.href} color={color} />
                ))}
            </div>
        </div>
    );
}

function AppendicesGrid() {
    return (
        <div className="flex flex-col gap-3">
            <div data-aos="fade-right" className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-secondary/10">
                    <Link2 size={13} className="text-secondary" />
                </div>
                <span className="text-[11px] font-bold tracking-[.2em] uppercase text-secondary">
                    Appendices
                </span>
                <div className="flex-1 border-t border-border" />
                <span className="text-[9px] tracking-widest px-2 py-0.5 rounded-full border bg-secondary/10 text-secondary border-secondary/20">
                    {APPENDICES_FULL.length} items
                </span>
            </div>

            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {APPENDICES_FULL.map((a) => (
                    <a key={a.id} href="/appendices#appendices-am" className="group flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-3.5 hover:border-secondary/30 hover:bg-muted/30 transition-all duration-150">
                        <span className="shrink-0 mt-0.5 text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20">
                            {a.label.replace("Appendix ", "")}
                        </span>
                        <span className="flex-1 text-[12px] text-muted-foreground group-hover:text-secondary leading-snug transition-colors">
                            {a.desc}
                        </span>
                        <ArrowRight size={12} className="shrink-0 mt-0.5 text-muted-foreground/20 group-hover:text-secondary transition-colors" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export function TableOfContents() {
    const groupStarts = TOC_STRUCTURE.reduce((acc, group) => {
        const start = acc.runningIndex;
        acc.runningIndex += group.items.length;
        acc.starts.push(start);
        return acc;
    }, { runningIndex: 1, starts: [] as number[] });

    return (
        <section id="table-of-contents" className="w-full flex flex-col gap-10">
            <SectionHeader
                subtitle={
                    <>
                        Structured navigation through your complete OJT documentation —{" "}
                        <span className="text-foreground font-semibold">click to explore</span>.
                    </>
                }
                title={<>Table of<br />Contents.</>}
                note={
                    <>
                        <span className="text-primary">Front matter</span> ·{" "}
                        <span className="text-accent">Chapters I–IV</span> ·{" "}
                        <span className="text-secondary">Appendices A–R</span>
                        <br />
                        <span className="text-muted-foreground/40">$ cat toc.md | less</span>
                    </>
                }
            />

            <Divider icon={<List size={18} className="text-primary" />} />

            <TerminalWindow command="cat TABLE_OF_CONTENTS.md" dataAos="fade-up">
                <div className="p-6 md:p-8 flex flex-col gap-10">
                    {TOC_STRUCTURE.map((group, idx) => {
                        const start = groupStarts.starts[idx];
                        return (
                            <TocGroup
                                key={group.group}
                                group={group.group}
                                color={group.color}
                                items={group.items}
                                startIndex={start}
                            />
                        );
                    })}
                    <AppendicesGrid />
                </div>
            </TerminalWindow>

        </section>
    );
}