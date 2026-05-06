"use client";

import { INTRODUCTION, OJT_INFO } from "@/data/portfolio";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";
import { Calendar, Clock, MapPin, Building } from "lucide-react";

const DETAILS = [
    {
        label: "Start Date",
        value: "January 30, 2026",
        icon: <Calendar size={14} />,
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
    {
        label: "End Date",
        value: "May 04, 2026",
        icon: <Calendar size={14} />,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
    {
        label: "Total Hours",
        value: "504 hrs",
        icon: <Clock size={14} />,
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
    },
    {
        label: "Office Hours",
        value: "8AM–5PM / 7AM–6PM",
        icon: <Clock size={14} />,
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
];

export function TimeAndPlace() {
    return (
        <section id="time-place" className="w-full flex flex-col gap-8"       >
            <SectionHeader
                subtitle="504 hours. One government office. Real work."
                title={<>Time & Place<br />of Internship.</>}
                note={
                    <>
                        Chapter I · Section C
                        <br />
                        <span className="text-muted-foreground/30">$ cat time-place.md</span>
                    </>
                }
            />

            <Divider icon={<MapPin size={16} className="text-secondary" />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter1/time-place.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">

                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <MapPin size={20} className="text-secondary" />
                        </div>
                        <div>
                            <p className="text-[11px] text-secondary font-bold tracking-[.2em] uppercase">C.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Time and Place of Internship</h3>
                        </div>
                    </div>

                    <div data-aos="fade-right" className="border-l-2 border-secondary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            {INTRODUCTION.timeAndPlace}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {DETAILS.map((d) => (
                            <div data-aos="fade-up" key={d.label} className={`rounded-xl border ${d.border} ${d.bg} p-4 flex flex-col gap-2`} >
                                <div className={`${d.color}`}>{d.icon}</div>
                                <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">{d.label}</p>
                                <p className={`text-[12px] font-bold ${d.color} leading-tight`}>{d.value}</p>
                            </div>
                        ))}
                    </div>

                    <div data-aos="fade-up" className="rounded-xl border border-border bg-card/50 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-muted/20 border border-border flex items-center justify-center shrink-0">
                                <Building size={14} className="text-muted-foreground" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-foreground">Bids and Awards Committee</p>
                                <p className="text-[10px] text-muted-foreground/40 tracking-widest">Host Agency</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-0.5">
                            <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">Address</p>
                            <p className="text-[11px] text-muted-foreground/70 font-medium">
                                Hidalgo St., Brgy. 7 Poblacion, San Jose, Occidental Mindoro
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="rounded-xl overflow-hidden border border-border">
                        <div className="px-4 py-2.5 border-b border-border bg-card/50 flex items-center gap-2">
                            <span className="text-secondary text-[10px]">▸</span>
                            <span className="text-[10px] text-muted-foreground tracking-widest">maps --location=&ldquo;Bids and Awards Committee, San Jose, Occidental Mindoro&rdquo;</span>
                        </div>
                        <iframe src={OJT_INFO.location.embedSrc} width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Internship Location Map" />
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-secondary/30">▸</span> Chapter I · Section C
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}