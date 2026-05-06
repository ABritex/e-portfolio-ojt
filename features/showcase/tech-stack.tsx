"use client";
import { useState } from "react";
import { TECH_CATEGORIES } from "@/data/portfolio";
import { SkillBar } from "./skill-bar";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";
import Image from "next/image";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
    frontend: <Image src="/icons/code.svg" alt="Frontend" width={14} height={14} />,
    backend: <Image src="/icons/server.svg" alt="Backend" width={14} height={14} />,
    devops: <Image src="/icons/container.svg" alt="DevOps" width={14} height={14} />,
};

export function TechStack() {
    const [activeId, setActiveId] = useState("frontend");
    const active = TECH_CATEGORIES.find((c) => c.id === activeId)!;

    return (
        <section id="tech-stack" className="w-full flex flex-col gap-8">
            <SectionHeader
                subtitle={
                    <>
                        Not a stack collector — a{" "}
                        <span className="text-foreground font-semibold">craftsman</span>. Every tool
                        here has shipped real code into a{" "}
                        <span className="text-foreground font-semibold">production environment</span>.
                        No tutorial badges. No fluff.
                    </>
                }
                title={<>Tech Stack<br />& Proficiency.</>}
                note="Linux on bare metal. Terminal as home. Full-stack from schema to deploy — built iteratively, shipped quietly. $ cat ./skills.json | jq"
            />

            <Divider />

            <TerminalWindow dataAos="fade-up" command={`cat skills.json | jq '.${activeId}'`}>
                <div className="p-6 flex flex-col gap-6">
                    <div className="flex items-center gap-2 flex-wrap">
                        {TECH_CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveId(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[11px] font-bold tracking-[.15em] uppercase transition-all ${activeId === cat.id
                                    ? `${cat.bgColor} ${cat.borderColor} ${cat.color}`
                                    : "border-border text-muted-foreground hover:border-border/80 hover:text-foreground"
                                    }`}
                            >
                                <span className={activeId === cat.id ? cat.color : "text-muted-foreground"}>
                                    {CATEGORY_ICONS[cat.id]}
                                </span>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[10px] text-muted-foreground/40 tracking-widest uppercase">
                            hover a skill to see details
                        </p>
                        {active.techs.map((tech) => (
                            <SkillBar
                                key={tech.name}
                                name={tech.name}
                                level={tech.level}
                                note={tech.note}
                                colorClass={active.color}
                                activeId={activeId}
                                icon={tech.icon}
                            />
                        ))}
                    </div>

                    <p className="text-[10px] text-muted-foreground/30 border-t border-border pt-4">
                        <span className="text-accent/40">▸</span> self-assessed proficiency · updated 2024
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}