"use client";
import { WORK_EXPERIENCE } from "@/data/portfolio";

// ── Shared section shell ───────────────────────────────────────────────────────
function SectionShell({
    id,
    section,
    label,
    title,
    subtitle,
    cmd,
    accentColor,
    accentBorder,
    accentBg,
    dotColor,
    icon,
    children,
}: {
    id: string;
    section: string;
    label: string;
    title: string;
    subtitle: string;
    cmd: string;
    accentColor: string;
    accentBorder: string;
    accentBg: string;
    dotColor: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className={`text-[10px] font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2 ${accentColor}`}>
                        <span className="opacity-40">Chapter III</span>
                        <span className="text-border">·</span>
                        {section}
                    </p>
                    <h2
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: `linear-gradient(135deg, var(--color-${label}) 0%, var(--color-accent) 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {title}
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        {subtitle}
                        <br />
                        <span className="text-muted-foreground/30">$ {cmd}</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className={`w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0 ${accentColor}`}>
                    {icon}
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className={`text-[11px] ${accentColor}`}>$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">{cmd}</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/30" />
                        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
                        <span className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                </div>
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    {children}
                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className={`${accentColor} opacity-30`}>▸</span> Chapter III · {section}
                    </p>
                </div>
            </div>
        </section>
    );
}

// ── A. Weekly Accomplishment Report ───────────────────────────────────────────
export function WeeklyReport() {
    const report = WORK_EXPERIENCE.reports[0];
    return (
        <SectionShell
            id="we-weekly"
            section="Section A"
            label="primary"
            title={"Weekly\nAccomplishment\nReport."}
            subtitle="13 weeks of documented tasks, every line verified by the supervisor."
            cmd="cat chapter3/weekly-report.md"
            accentColor="text-primary"
            accentBorder="border-primary/20"
            accentBg="bg-primary/5"
            dotColor="bg-primary/30"
            icon={
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            }
        >
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </div>
                <div>
                    <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">A.</p>
                    <h3 className="text-[17px] font-bold text-foreground">{report.title}</h3>
                    <p className="text-[11px] text-muted-foreground/60 mt-0.5">{report.period} · {report.count}</p>
                </div>
            </div>

            <div className="border-l-2 border-primary/20 pl-5">
                <p className="text-[14px] text-muted-foreground leading-[1.85]">{report.description}</p>
            </div>

            {/* Sample week breakdown */}
            <div>
                <p className="text-[10px] text-muted-foreground/40 tracking-widest uppercase mb-4">Sample Weekly Structure</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { day: "Mon – Tue", task: "Document sorting & filing of procurement notices" },
                        { day: "Wed", task: "Preparation of bidding summaries and resolutions" },
                        { day: "Thu", task: "Assist in bid opening documentation and logging" },
                        { day: "Fri", task: "Weekly report submission & supervisor review" },
                    ].map((w) => (
                        <div key={w.day} className="rounded-lg border border-border bg-card/50 px-4 py-3 flex flex-col gap-1">
                            <p className="text-[10px] font-bold text-primary tracking-widest">{w.day}</p>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">{w.task}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}

// ── B. Daily Time Record ───────────────────────────────────────────────────────
export function DailyTimeRecord() {
    const report = WORK_EXPERIENCE.reports[1];
    return (
        <SectionShell
            id="we-dtr"
            section="Section B"
            label="accent"
            title={"Daily Time\nRecord."}
            subtitle="65 entries. Every arrival and departure accounted for."
            cmd="cat chapter3/daily-time-record.md"
            accentColor="text-accent"
            accentBorder="border-accent/20"
            accentBg="bg-accent/5"
            dotColor="bg-accent/30"
            icon={
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            }
        >
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                </div>
                <div>
                    <p className="text-[11px] text-accent font-bold tracking-[.2em] uppercase">B.</p>
                    <h3 className="text-[17px] font-bold text-foreground">{report.title}</h3>
                    <p className="text-[11px] text-muted-foreground/60 mt-0.5">{report.period} · {report.count}</p>
                </div>
            </div>

            <div className="border-l-2 border-accent/20 pl-5">
                <p className="text-[14px] text-muted-foreground leading-[1.85]">{report.description}</p>
            </div>

            {/* DTR summary stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                    { label: "Total Days", value: "65", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
                    { label: "Total Hours", value: "504", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
                    { label: "Time In", value: "8:00 AM", color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/5" },
                    { label: "Time Out", value: "5:00 PM", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
                ].map((s) => (
                    <div key={s.label} className={`rounded-xl border ${s.border} ${s.bg} p-4 flex flex-col gap-1`}>
                        <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">{s.label}</p>
                        <p className={`text-[15px] font-extrabold ${s.color}`}>{s.value}</p>
                    </div>
                ))}
            </div>
        </SectionShell>
    );
}

// ── C. Progress Report ────────────────────────────────────────────────────────
export function ProgressReport() {
    const report = WORK_EXPERIENCE.reports[2];
    return (
        <SectionShell
            id="we-progress"
            section="Section C"
            label="secondary"
            title={"Internship\nProgress\nReport."}
            subtitle="Mid-point self-evaluation. Skills gained vs. expectations set on day one."
            cmd="cat chapter3/progress-report.md"
            accentColor="text-secondary"
            accentBorder="border-secondary/20"
            accentBg="bg-secondary/5"
            dotColor="bg-secondary/30"
            icon={
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
            }
        >
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                </div>
                <div>
                    <p className="text-[11px] text-secondary font-bold tracking-[.2em] uppercase">C.</p>
                    <h3 className="text-[17px] font-bold text-foreground">{report.title}</h3>
                    <p className="text-[11px] text-muted-foreground/60 mt-0.5">{report.period} · {report.count}</p>
                </div>
            </div>

            <div className="border-l-2 border-secondary/20 pl-5">
                <p className="text-[14px] text-muted-foreground leading-[1.85]">{report.description}</p>
            </div>

            {/* Progress milestone */}
            <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-5 flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-secondary">
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                </div>
                <div>
                    <p className="text-[11px] font-bold text-secondary tracking-widest uppercase mb-1">Mid-Point Milestone</p>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                        Submitted March 15, 2026 — halfway through the 90-day training period. Documented skills acquired and outlined remaining goals.
                    </p>
                </div>
            </div>
        </SectionShell>
    );
}

// ── D. Analysis Report ────────────────────────────────────────────────────────
export function AnalysisReport() {
    const report = WORK_EXPERIENCE.reports[3];
    return (
        <SectionShell
            id="we-analysis"
            section="Section D"
            label="primary"
            title={"Internship\nAnalysis\nReport."}
            subtitle="Final comprehensive review. Theory vs. practice. Gaps. Recommendations."
            cmd="cat chapter3/analysis-report.md"
            accentColor="text-primary"
            accentBorder="border-primary/20"
            accentBg="bg-primary/5"
            dotColor="bg-primary/30"
            icon={
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
            }
        >
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                </div>
                <div>
                    <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">D.</p>
                    <h3 className="text-[17px] font-bold text-foreground">{report.title}</h3>
                    <p className="text-[11px] text-muted-foreground/60 mt-0.5">{report.period} · {report.count}</p>
                </div>
            </div>

            <div className="border-l-2 border-primary/20 pl-5">
                <p className="text-[14px] text-muted-foreground leading-[1.85]">{report.description}</p>
            </div>

            {/* Analysis breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                    { label: "Academic Preparation", verdict: "Strong foundation", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
                    { label: "Workplace Requirements", verdict: "Practical exposure gained", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
                    { label: "Identified Skill Gaps", verdict: "Technical writing, procurement tools", color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/5" },
                    { label: "Recommendations", verdict: "Expand software training in curriculum", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
                ].map((item) => (
                    <div key={item.label} className={`rounded-xl border ${item.border} ${item.bg} p-4`}>
                        <p className={`text-[10px] font-bold tracking-widest uppercase mb-1.5 ${item.color}`}>{item.label}</p>
                        <p className="text-[12px] text-muted-foreground leading-relaxed">{item.verdict}</p>
                    </div>
                ))}
            </div>
        </SectionShell>
    );
}