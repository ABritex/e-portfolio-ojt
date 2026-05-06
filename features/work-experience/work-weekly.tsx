import { useState } from "react";
import Image from "next/image";
import { WEEKLY_REPORTS } from "@/data/portfolio";
import { Calendar, ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";
import { Divider } from "@/components/terminal/divider";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const MONTH_COLORS: Record<string, { badge: string; dot: string; border: string; bg: string }> = {
    January: { badge: "text-secondary bg-secondary/10 border-secondary/20", dot: "bg-secondary", border: "border-secondary/20", bg: "bg-secondary/5" },
    February: { badge: "text-accent bg-accent/10 border-accent/20", dot: "bg-accent", border: "border-accent/20", bg: "bg-accent/5" },
    March: { badge: "text-primary bg-primary/10 border-primary/20", dot: "bg-primary", border: "border-primary/20", bg: "bg-primary/5" },
    April: { badge: "text-secondary bg-secondary/10 border-secondary/20", dot: "bg-secondary", border: "border-secondary/20", bg: "bg-secondary/5" },
};

export function WeeklyReport() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    const current = WEEKLY_REPORTS[selectedIndex];
    const colors = MONTH_COLORS[current.month] ?? MONTH_COLORS["January"];

    const prev = () => setSelectedIndex((i) => Math.max(0, i - 1));
    const next = () => setSelectedIndex((i) => Math.min(WEEKLY_REPORTS.length - 1, i + 1));

    return (
        <section id="we-weekly" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-primary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-primary/40">Chapter III</span>
                        <span className="text-border">·</span>
                        Section A
                    </p>
                    <h2
                        data-aos="fade-right"
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Weekly<br />Accomplishment<br />Report.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        14 weeks of documented tasks, every line verified by the supervisor.
                        <br />
                        <span className="text-muted-foreground/30">$ cat chapter3/weekly-report.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<Calendar size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter3/weekly-report.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <Calendar size={20} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">A.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Weekly Accomplishment Report</h3>
                            <p className="text-[11px] text-muted-foreground/60 mt-0.5">January 30 - May 4, 2026 · 14 reports</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="border-l-2 border-primary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">Weekly documentation of tasks completed including document control for procurement notices, preparation of bidding documents, assistance in bid openings, and maintenance of procurement records.</p>
                    </div>
                    <div data-aos="fade-up" className="flex flex-col gap-3">
                        <p className="text-[10px] text-muted-foreground/40 tracking-widest uppercase">Select Week</p>
                        <Select value={selectedIndex.toString()} onValueChange={(v) => setSelectedIndex(Number(v))}>
                            <SelectTrigger className="w-full rounded-xl border border-border bg-card/60 px-4 py-3 text-[12px] font-bold text-foreground tracking-wide focus:outline-none focus:border-primary/40 transition-colors cursor-pointer" style={{ fontFamily: "var(--font-mono)" }}>
                                <SelectValue>
                                    {WEEKLY_REPORTS[selectedIndex]?.week} · {WEEKLY_REPORTS[selectedIndex]?.period} ({WEEKLY_REPORTS[selectedIndex]?.month})
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                {WEEKLY_REPORTS.map((w, i) => (
                                    <SelectItem key={w.week} value={i.toString()}>
                                        {w.week} · {w.period} ({w.month})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className={`rounded-xl border ${colors.border} ${colors.bg} flex flex-col gap-0 overflow-hidden`}>
                        <div className={`flex items-center justify-between px-5 py-4 border-b ${colors.border}`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                                <div>
                                    <p className="text-[13px] font-bold text-foreground">{current.week}</p>
                                    <p className="text-[11px] text-muted-foreground/50">{current.period}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={prev}
                                    disabled={selectedIndex <= 0}
                                    className="w-7 h-7 rounded-lg border border-border flex items-center justify-center disabled:opacity-20 hover:bg-muted/20 transition-colors"
                                >
                                    <ChevronLeft size={13} />
                                </button>
                                <span className="text-[10px] text-muted-foreground/40 px-1">
                                    {selectedIndex + 1} / {WEEKLY_REPORTS.length}
                                </span>
                                <button
                                    onClick={next}
                                    disabled={selectedIndex >= WEEKLY_REPORTS.length - 1}
                                    className="w-7 h-7 rounded-lg border border-border flex items-center justify-center disabled:opacity-20 hover:bg-muted/20 transition-colors"
                                >
                                    <ChevronRight size={13} />
                                </button>
                            </div>
                        </div>

                        <div className="px-5 py-4 flex flex-col gap-3">
                            <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40">Key Accomplishments</p>
                            <ul className="flex flex-col gap-2">
                                {current.activities.map((activity, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0 mt-1.5`} />
                                        <p className="text-[12px] text-muted-foreground leading-relaxed">{activity}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`px-5 py-4 border-t ${colors.border} flex flex-col gap-2`}>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40">Skills Applied</p>
                            <div className="flex flex-wrap gap-2">
                                {current.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant={colors.badge.includes("secondary") ? "secondary" : colors.badge.includes("accent") ? "default" : "secondary"}
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className={`px-5 py-4 border-t ${colors.border} flex flex-col gap-3`}>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40 flex items-center gap-2">
                                <ImageIcon size={11} />
                                Documentation Photos
                            </p>

                            {current.photos.length === 0 ? (
                                <div className="rounded-lg border border-dashed border-border/50 py-8 flex flex-col items-center gap-2 text-center">
                                    <ImageIcon size={20} className="text-muted-foreground/20" />
                                    <p className="text-[11px] text-muted-foreground/30">No photos added yet</p>
                                    <p className="text-[10px] text-muted-foreground/20">Add photo paths to <code className="text-[9px]">WEEKLY_REPORTS[{selectedIndex}].photos</code></p>
                                </div>
                            ) : (
                                <div className={`grid gap-2 ${current.photos.length === 1 ? "grid-cols-1" :
                                    current.photos.length === 2 ? "grid-cols-2" :
                                        "grid-cols-3"
                                    }`}>
                                    {current.photos.map((src, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setLightboxImg(src)}
                                            className="relative aspect-square rounded-lg overflow-hidden border border-border group hover:border-primary/40 transition-colors"
                                        >
                                            <Image
                                                src={src}
                                                alt={`Week ${current.week} photo ${i + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                <ImageIcon size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-primary/30">▸</span> Chapter III · Section A
                    </p>
                </div>
            </TerminalWindow>

            {lightboxImg && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    onClick={() => setLightboxImg(null)}
                >
                    <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
                        <button
                            onClick={() => setLightboxImg(null)}
                            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                            <X size={16} className="text-white" />
                        </button>
                        <Image
                            src={lightboxImg}
                            alt="Documentation"
                            fill
                            className="object-contain rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}