"use client";

import { cn } from "@/lib/utils";

type ChapterAction = {
    label: string;
    href: string;
    color: string;
};

type ChapterStripProps = {
    chapter: string;
    sections: number;
    actions: ChapterAction[];
    icon?: React.ReactNode;
    className?: string;
};

export function ChapterStrip({ chapter, sections, actions, icon, className }: ChapterStripProps) {
    return (
        <div data-aos="fade-up"
            className={cn(
                "mt-6 rounded-2xl border border-border bg-card px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                className
            )}
        >
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    {icon}
                </div>
                <div>
                    <p className="text-[12px] font-bold text-foreground">{chapter}</p>
                    <p className="text-[11px] text-muted-foreground/60">{sections} sections · read below</p>
                </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
                {actions.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={`text-[10px] font-bold tracking-[.1em] uppercase px-3 py-1.5 rounded-lg border transition-opacity hover:opacity-80 ${item.color}`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
}