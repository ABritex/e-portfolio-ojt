"use client";

import { cn } from "@/lib/utils";

type TerminalWindowProps = {
    command?: string;
    children: React.ReactNode;
    className?: string;
    dataAos?: string;
};

export function TerminalWindow({ command, children, className, dataAos }: TerminalWindowProps) {
    return (
        <div data-aos={dataAos} className={cn("rounded-2xl border border-border bg-card overflow-hidden", className)}>
            <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                <span className="text-accent text-[11px]">$</span>
                <span className="text-[11px] text-muted-foreground tracking-widest">{command}</span>
                <div className="flex-1" />
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                </div>
            </div>
            {children}
        </div>
    );
}