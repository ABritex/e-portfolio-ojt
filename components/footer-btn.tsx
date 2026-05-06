"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type FooterBtnProps = {
    prev?: { text: string; href: string };
    next?: { text: string; href: string };
    showPrev?: boolean;
    showNext?: boolean;
};

export default function FooterBtn({ prev, next, showPrev = true, showNext = true }: FooterBtnProps) {
    return (
        <div data-aos="fade-up" className="w-full flex justify-between items-center gap-4">
            {showPrev && prev ? (
                <a href={prev.href} className="group flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:bg-accent/5 hover:border-accent transition-all duration-200">
                    <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-accent">{prev.text}</span>
                </a>
            ) : <div />}

            {showNext && next ? (
                <a href={next.href} className="group flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:bg-primary/5 hover:border-primary transition-all duration-200">
                    <span className="text-sm text-muted-foreground group-hover:text-primary">{next.text}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
            ) : <div />}
        </div>
    );
}