"use client";
import { useState } from "react";

type SkillBarProps = {
    name: string;
    level: number;
    note: string;
    colorClass: string;
};

export function SkillBar({ name, level, note, colorClass }: SkillBarProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group cursor-default"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                    <span className="text-[12px] text-foreground">{name}</span>
                    {hovered && (
                        <span className="text-[10px] text-muted-foreground animate-in fade-in duration-150">
                            — {note}
                        </span>
                    )}
                </div>
                <span className={`text-[10px] tabular-nums font-bold ${colorClass}`}>{level}%</span>
            </div>
            <div className="w-full h-[3px] bg-border rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${colorClass.replace("text-", "bg-")}`}
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    );
}