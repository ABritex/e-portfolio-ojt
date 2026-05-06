"use client";
import { COMPANY_PROFILE } from "@/data/portfolio";
import { Shield, FileText, Search, CheckSquare } from "lucide-react";
import { Divider, TerminalWindow } from "@/components/terminal";

const NATURE_FEATURES = [
    {
        label: "Bid Management",
        icon: <FileText size={15} />,
        desc: "Organizes public bidding, prepares documents, conducts pre-bid conferences, and evaluates submitted proposals.",
        color: "text-primary",
        bg: "bg-primary/5",
        border: "border-primary/20",
    },
    {
        label: "RA 9184 Compliance",
        icon: <Shield size={15} />,
        desc: "Strict adherence to the Government Procurement Reform Act ensuring all activities follow established legal procedures.",
        color: "text-accent",
        bg: "bg-accent/5",
        border: "border-accent/20",
    },
    {
        label: "Public Accountability",
        icon: <Search size={15} />,
        desc: "Promotes fairness and equal opportunity among suppliers while safeguarding public funds from corruption and misuse.",
        color: "text-secondary",
        bg: "bg-secondary/5",
        border: "border-secondary/20",
    },
    {
        label: "Good Governance",
        icon: <CheckSquare size={15} />,
        desc: "Supports efficient implementation of government programs, ensuring resources are utilized effectively for public service.",
        color: "text-primary",
        bg: "bg-primary/5",
        border: "border-primary/20",
    },
];

export function CompanyNature() {
    return (
        <section id="cp-nature" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-primary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-primary/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Section 1
                    </p>
                    <h2 data-aos="fade-right"
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Nature of<br />the Agency.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        What the BAC does and why it exists under Philippine law.
                        <br />
                        <span className="text-muted-foreground/30">$ cat nature.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<Shield size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter2/nature.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <Shield size={20} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">1.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Nature of the Agency</h3>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="border-l-2 border-primary/20 pl-5 flex flex-col gap-4">
                        {COMPANY_PROFILE.nature.split(". ").reduce<string[][]>((acc, sentence, i, arr) => {
                            const chunkIndex = Math.floor(i / Math.ceil(arr.length / 3));
                            if (!acc[chunkIndex]) acc[chunkIndex] = [];
                            acc[chunkIndex].push(sentence);
                            return acc;
                        }, []).map((chunk, i) => (
                            <p data-aos="fade-right" key={i} className="text-[14px] text-muted-foreground leading-[1.85]">
                                {chunk.join(". ").trim()}{chunk[chunk.length - 1]?.endsWith(".") ? "" : "."}
                            </p>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {NATURE_FEATURES.map((f) => (
                            <div data-aos="fade-up" key={f.label} className={`rounded-xl border ${f.border} ${f.bg} p-4 flex items-start gap-3`}>
                                <div className={`mt-0.5 shrink-0 ${f.color}`}>{f.icon}</div>
                                <div className="flex flex-col gap-1">
                                    <p className={`text-[11px] font-bold tracking-widest uppercase ${f.color}`}>{f.label}</p>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-primary/30">▸</span> Chapter II · Section 1
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}