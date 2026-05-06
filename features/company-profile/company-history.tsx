"use client";
import { COMPANY_PROFILE } from "@/data/portfolio";
import { Clock } from "lucide-react";
import { Divider, TerminalWindow } from "@/components/terminal";

const TIMELINE = [
    {
        year: "18th Century",
        label: "Chinese Traders Settle",
        desc: "Chinese traders settled in Mangarin, one of the oldest communities in southern Mindoro. The name is believed to derive from 'Mandarin.'",
        color: "bg-accent",
    },
    {
        year: "Spanish Period",
        label: "Administrative Transfers",
        desc: "Presidencias were transferred multiple times — from Sinaloa to Caminawit — before settling in Pandurucan, the former name of San Jose.",
        color: "bg-primary",
    },
    {
        year: "1911",
        label: "Seat of Civil Government",
        desc: "Pandurucan officially became the seat of civil government under Don German Ramirez, its first appointed leader.",
        color: "bg-secondary",
    },
    {
        year: "World War II",
        label: "Japanese Occupation",
        desc: "San Jose came under Japanese occupation with a series of appointed local leaders including Gomez, Cuden, and Abeleda.",
        color: "bg-accent",
    },
    {
        year: "Post-War",
        label: "Rapid Growth",
        desc: "Establishment of the Philippine Sugar Mill in Barangay Central attracted migrants, fueling population growth and cultural diversity.",
        color: "bg-primary",
    },
    {
        year: "1969",
        label: "Magsaysay Separates",
        desc: "Magsaysay became a separate municipality, redefining San Jose as it continued to develop as a progressive town.",
        color: "bg-secondary",
    },
    {
        year: "Present",
        label: "Progressive Municipality",
        desc: "San Jose celebrates its patron saint St. Joseph every May 1, and continues to grow as one of Occidental Mindoro's key towns.",
        color: "bg-secondary",
    },
];

export function CompanyHistory() {
    return (
        <section id="cp-history" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-secondary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-secondary/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Section 3
                    </p>
                    <h2 data-aos="fade-right"
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        History &<br />Background.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        From 18th-century traders to a modern municipality. A rich local history.
                        <br />
                        <span className="text-muted-foreground/30">$ cat history.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<Clock size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter2/history.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <Clock size={20} className="text-secondary" />
                        </div>
                        <div>
                            <p className="text-[11px] text-secondary font-bold tracking-[.2em] uppercase">3.</p>
                            <h3 className="text-[17px] font-bold text-foreground">History / Background of the Agency</h3>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="border-l-2 border-secondary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {COMPANY_PROFILE.history}
                        </p>
                    </div>
                    <div className="flex flex-col gap-0">
                        {TIMELINE.map((item, i, arr) => (
                            <div data-aos="fade-up" key={item.year} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className={`w-3 h-3 rounded-full shrink-0 mt-1.5 ${item.color}`} />
                                    {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                                </div>
                                <div className={`${i < arr.length - 1 ? "pb-6" : "pb-0"}`}>
                                    <p className="text-[10px] font-bold tracking-widest text-muted-foreground/50 uppercase">{item.year}</p>
                                    <p className="text-[13px] font-bold text-foreground mt-0.5">{item.label}</p>
                                    <p className="text-[12px] text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-secondary/30">▸</span> Chapter II · Section 3
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}