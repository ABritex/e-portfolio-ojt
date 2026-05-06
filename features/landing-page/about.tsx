"use client";

import { PERSON } from "@/data/portfolio";
import { SectionHeader, Divider } from "@/components/terminal";
import { Zap, GitCompare, Monitor, Network, Users } from "lucide-react";
import AboutMeButton from "@/components/about-me-btn";

const GOALS = [
    {
        iconColor: "bg-accent/10 text-accent",
        titleColor: "text-accent",
        title: "Ship Real Systems",
        desc: "Build full-stack apps that go beyond localhost — production-ready, scalable, and maintainable.",
        icon: <GitCompare size={16} />,
    },
    {
        iconColor: "bg-primary/10 text-primary",
        titleColor: "text-primary",
        title: "Master Architecture",
        desc: "Go beyond features — understand system design, databases, and how everything fits together.",
        icon: <Monitor size={16} />,
    },
    {
        iconColor: "bg-secondary/10 text-secondary",
        titleColor: "text-secondary",
        title: "Open Source",
        desc: "Give back to the community. Contribute to projects that developers around the world actually use.",
        icon: <Network size={16} />,
    },
    {
        iconColor: "bg-accent/10 text-accent",
        titleColor: "text-accent",
        title: "Build for People",
        desc: "Create tools that solve real problems. If nobody uses it, it doesn't matter how clean the code is.",
        icon: <Users size={16} />,
    },
];

export default function About() {
    return (
        <section id="about" className="w-full flex flex-col gap-12">
            <SectionHeader
                subtitle={
                    <>
                        I don&apos;t just write code — I build systems that{" "}
                        <span className="text-foreground font-semibold">think, scale, and endure</span>.
                        Every line is intentional. Every deploy is a commitment.
                        I&apos;m not here to fill a role — I&apos;m here to{" "}
                        <span className="text-foreground font-semibold">leave something behind that works.</span>
                    </>
                }
                title={<>Building with Purpose.<br />Shipping with Pride.</>}
                note="My obsession with the terminal, linux, and clean architecture sets me apart. I don&apos;t just use tools — I understand them."
            />

            <Divider icon={<Zap size={18} />} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                <p className="text-[clamp(13px,1.5vw,16px)] text-muted-foreground leading-relaxed">
                    I run <span className="text-secondary">Linux</span> on everything. I live in the{" "}
                    <span className="text-primary">terminal</span>. I ship full-stack systems
                    with <span className="text-accent">Next.js</span>, Node, and Postgres — quietly,
                    consistently, without waiting to feel ready.
                </p>
                <div className="flex lg:justify-end">
                    <AboutMeButton />
                </div>
            </div>

            <div className="w-full">
                <p className="text-center text-[11px] tracking-[.25em] uppercase text-primary font-bold mb-8">
                    MY GOALS AS A {PERSON.course.split(" in ")[1]?.toUpperCase() || "DEVELOPER"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {GOALS.map(({ iconColor, titleColor, title, desc, icon }) => (
                        <div key={title} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/30 hover:-translate-y-1 transition-all cursor-default"  >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconColor}`}>
                                {icon}
                            </div>
                            <div className={`text-[13px] font-bold ${titleColor}`}>{title}</div>
                            <div className="text-[11px] text-muted-foreground leading-relaxed">{desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}