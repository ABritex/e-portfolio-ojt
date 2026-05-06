"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type SkillBarProps = {
    name: string;
    level: number;
    note: string;
    colorClass: string;
    activeId: string;
    icon?: string;
};

export function SkillBar({ name, level, note, colorClass, activeId, icon }: SkillBarProps) {
    const [hovered, setHovered] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setWidth(level), 50);
        return () => clearTimeout(timer);
    }, [level, activeId]);

    return (
        <div
            className="group cursor-default"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                    {icon && (
                        <Image
                            src={icon}
                            alt={name}
                            width={16}
                            height={16}
                            className="flex-shrink-0 object-contain"
                        />
                    )}
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
                    style={{ width: `${width}%` }}
                />
            </div>
        </div>
    );
}