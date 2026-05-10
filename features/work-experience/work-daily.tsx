"use client";

import { useState, useMemo } from "react";
import { Clock } from "lucide-react";
import { Divider, TerminalWindow } from "@/components/terminal";

const RAW_DATA = [
    // January
    { date: "2026-01-30", day: "Fr", timeIn: "—", lunchOut: "—", lunchIn: "—", timeOut: "—", note: "Jan 30" },

    // February
    { date: "2026-02-02", day: "Mo", timeIn: "—", lunchOut: "—", lunchIn: "—", timeOut: "—", note: "Bio Registration" },
    { date: "2026-02-03", day: "Tu", timeIn: "10:17 AM", lunchOut: "12:04 PM", lunchIn: "12:52 PM", timeOut: "5:05 PM" },
    { date: "2026-02-04", day: "We", timeIn: "7:45 AM", lunchOut: "12:02 PM", lunchIn: "12:46 PM", timeOut: "5:07 PM" },
    { date: "2026-02-05", day: "Th", timeIn: "7:53 AM", lunchOut: "12:02 PM", lunchIn: "12:51 PM", timeOut: "5:05 PM" },
    { date: "2026-02-06", day: "Fr", timeIn: "7:56 AM", lunchOut: "12:03 PM", lunchIn: "12:52 PM", timeOut: "5:05 PM" },
    { date: "2026-02-09", day: "Mo", timeIn: "7:51 AM", lunchOut: "12:01 PM", lunchIn: "12:50 PM", timeOut: "5:07 PM" },
    { date: "2026-02-10", day: "Tu", timeIn: "7:59 AM", lunchOut: "12:03 PM", lunchIn: "1:00 PM", timeOut: "5:06 PM" },
    { date: "2026-02-11", day: "We", timeIn: "7:56 AM", lunchOut: "12:01 PM", lunchIn: "1:00 PM", timeOut: "5:10 PM" },
    { date: "2026-02-12", day: "Th", timeIn: "7:58 AM", lunchOut: "12:02 PM", lunchIn: "12:33 PM", timeOut: "5:05 PM" },
    { date: "2026-02-13", day: "Fr", timeIn: "7:48 AM", lunchOut: "12:00 PM", lunchIn: "12:59 PM", timeOut: "5:01 PM" },
    { date: "2026-02-16", day: "Mo", timeIn: "7:54 AM", lunchOut: "12:07 PM", lunchIn: "12:59 PM", timeOut: "5:05 PM" },
    { date: "2026-02-18", day: "We", timeIn: "7:48 AM", lunchOut: "12:04 PM", lunchIn: "1:01 PM", timeOut: "5:02 PM" },
    { date: "2026-02-19", day: "Th", timeIn: "7:58 AM", lunchOut: "12:01 PM", lunchIn: "1:00 PM", timeOut: "5:02 PM" },
    { date: "2026-02-20", day: "Fr", timeIn: "8:00 AM", lunchOut: "12:02 PM", lunchIn: "12:55 PM", timeOut: "5:03 PM" },
    { date: "2026-02-23", day: "Mo", timeIn: "7:46 AM", lunchOut: "12:00 PM", lunchIn: "—", timeOut: "5:01 PM" },
    { date: "2026-02-24", day: "Tu", timeIn: "7:54 AM", lunchOut: "12:02 PM", lunchIn: "1:03 PM", timeOut: "5:04 PM" },
    { date: "2026-02-25", day: "We", timeIn: "7:55 AM", lunchOut: "12:03 PM", lunchIn: "1:03 PM", timeOut: "5:03 PM" },
    { date: "2026-02-26", day: "Th", timeIn: "7:58 AM", lunchOut: "12:03 PM", lunchIn: "12:54 PM", timeOut: "5:02 PM" },
    { date: "2026-02-27", day: "Fr", timeIn: "7:53 AM", lunchOut: "12:04 PM", lunchIn: "—", timeOut: "5:02 PM" },

    // March
    { date: "2026-03-02", day: "Mo", timeIn: "7:53 AM", lunchOut: "12:01 PM", lunchIn: "1:05 PM", timeOut: "5:01 PM" },
    { date: "2026-03-03", day: "Tu", timeIn: "7:41 AM", lunchOut: "12:02 PM", lunchIn: "12:59 PM", timeOut: "5:03 PM" },
    { date: "2026-03-04", day: "We", timeIn: "7:46 AM", lunchOut: "12:01 PM", lunchIn: "1:02 PM", timeOut: "5:01 PM" },
    { date: "2026-03-05", day: "Th", timeIn: "7:49 AM", lunchOut: "12:03 PM", lunchIn: "12:57 PM", timeOut: "5:00 PM" },
    { date: "2026-03-06", day: "Fr", timeIn: "8:02 AM", lunchOut: "12:01 PM", lunchIn: "1:04 PM", timeOut: "5:00 PM" },
    { date: "2026-03-09", day: "Mo", timeIn: "6:54 AM", lunchOut: "12:00 PM", lunchIn: "12:57 PM", timeOut: "6:00 PM" },
    { date: "2026-03-10", day: "Tu", timeIn: "7:00 AM", lunchOut: "12:01 PM", lunchIn: "1:05 PM", timeOut: "5:59 PM" },
    { date: "2026-03-11", day: "We", timeIn: "6:59 AM", lunchOut: "12:01 PM", lunchIn: "12:54 PM", timeOut: "6:07 PM" },
    { date: "2026-03-12", day: "Th", timeIn: "6:52 AM", lunchOut: "12:01 PM", lunchIn: "12:59 PM", timeOut: "6:01 PM" },
    { date: "2026-03-16", day: "Mo", timeIn: "6:53 AM", lunchOut: "12:00 PM", lunchIn: "12:57 PM", timeOut: "6:00 PM" },
    { date: "2026-03-17", day: "Tu", timeIn: "7:02 AM", lunchOut: "12:01 PM", lunchIn: "1:01 PM", timeOut: "6:03 PM" },
    { date: "2026-03-18", day: "We", timeIn: "7:06 AM", lunchOut: "12:02 PM", lunchIn: "12:59 PM", timeOut: "6:00 PM" },
    { date: "2026-03-19", day: "Th", timeIn: "6:59 AM", lunchOut: "12:00 PM", lunchIn: "12:58 PM", timeOut: "6:00 PM" },
    { date: "2026-03-23", day: "Mo", timeIn: "6:57 AM", lunchOut: "12:02 PM", lunchIn: "12:56 PM", timeOut: "6:00 PM" },
    { date: "2026-03-24", day: "Tu", timeIn: "6:59 AM", lunchOut: "12:03 PM", lunchIn: "1:01 PM", timeOut: "6:01 PM" },
    { date: "2026-03-25", day: "We", timeIn: "7:02 AM", lunchOut: "12:01 PM", lunchIn: "1:02 PM", timeOut: "6:01 PM" },
    { date: "2026-03-26", day: "Th", timeIn: "6:59 AM", lunchOut: "12:01 PM", lunchIn: "1:08 PM", timeOut: "6:02 PM" },
    { date: "2026-03-30", day: "Mo", timeIn: "6:53 AM", lunchOut: "12:01 PM", lunchIn: "1:01 PM", timeOut: "6:00 PM" },
    { date: "2026-03-31", day: "Tu", timeIn: "7:00 AM", lunchOut: "12:01 PM", lunchIn: "12:56 PM", timeOut: "6:00 PM" },

    // April
    { date: "2026-04-01", day: "We", timeIn: "7:03 AM", lunchOut: "12:01 PM", lunchIn: "—", timeOut: "—", note: "Half Day" },
    { date: "2026-04-06", day: "Mo", timeIn: "6:56 AM", lunchOut: "12:01 PM", lunchIn: "1:04 PM", timeOut: "6:00 PM" },
    { date: "2026-04-07", day: "Tu", timeIn: "6:55 AM", lunchOut: "12:00 PM", lunchIn: "12:57 PM", timeOut: "6:00 PM" },
    { date: "2026-04-08", day: "We", timeIn: "7:01 AM", lunchOut: "12:03 PM", lunchIn: "12:58 PM", timeOut: "6:16 PM" },
    { date: "2026-04-13", day: "Mo", timeIn: "6:56 AM", lunchOut: "12:03 PM", lunchIn: "1:04 PM", timeOut: "6:02 PM" },
    { date: "2026-04-14", day: "Tu", timeIn: "7:02 AM", lunchOut: "12:01 PM", lunchIn: "1:02 PM", timeOut: "6:17 PM" },
    { date: "2026-04-15", day: "We", timeIn: "7:00 AM", lunchOut: "12:01 PM", lunchIn: "1:01 PM", timeOut: "6:01 PM" },
    { date: "2026-04-16", day: "Th", timeIn: "6:57 AM", lunchOut: "12:02 PM", lunchIn: "12:59 PM", timeOut: "6:01 PM" },
    { date: "2026-04-20", day: "Mo", timeIn: "6:59 AM", lunchOut: "12:00 PM", lunchIn: "12:54 PM", timeOut: "6:00 PM" },
    { date: "2026-04-21", day: "Tu", timeIn: "6:53 AM", lunchOut: "12:03 PM", lunchIn: "12:55 PM", timeOut: "6:03 PM" },
    { date: "2026-04-22", day: "We", timeIn: "7:02 AM", lunchOut: "12:01 PM", lunchIn: "12:56 PM", timeOut: "6:02 PM" },
    { date: "2026-04-23", day: "Th", timeIn: "7:00 AM", lunchOut: "12:02 PM", lunchIn: "1:00 PM", timeOut: "6:10 PM" },
    { date: "2026-04-27", day: "Mo", timeIn: "6:54 AM", lunchOut: "12:02 PM", lunchIn: "12:59 PM", timeOut: "6:00 PM" },
    { date: "2026-04-28", day: "Tu", timeIn: "6:54 AM", lunchOut: "12:01 PM", lunchIn: "12:50 PM", timeOut: "6:01 PM" },
    { date: "2026-04-29", day: "We", timeIn: "6:59 AM", lunchOut: "12:10 PM", lunchIn: "12:56 PM", timeOut: "6:03 PM" },
    { date: "2026-04-30", day: "Th", timeIn: "7:01 AM", lunchOut: "12:02 PM", lunchIn: "1:10 PM", timeOut: "6:00 PM" },
];

const MONTH_OPTIONS = [
    { label: "All Months", value: "all" },
    { label: "January 2026", value: "2026-01" },
    { label: "February 2026", value: "2026-02" },
    { label: "March 2026", value: "2026-03" },
    { label: "April 2026", value: "2026-04" },
];

const MONTH_LABELS: Record<string, string> = {
    "2026-01": "January 2026",
    "2026-02": "February 2026",
    "2026-03": "March 2026",
    "2026-04": "April 2026",
};

function formatDate(dateStr: string) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

type Entry = typeof RAW_DATA[number];

export function DailyTimeRecord() {
    const [monthFilter, setMonthFilter] = useState("all");

    const filtered = useMemo(() => {
        return RAW_DATA.filter((r) =>
            monthFilter === "all" || r.date.startsWith(monthFilter)
        );
    }, [monthFilter]);

    // group by month
    const groups = useMemo(() => {
        const map: Record<string, Entry[]> = {};
        filtered.forEach((r) => {
            const m = r.date.slice(0, 7);
            if (!map[m]) map[m] = [];
            map[m].push(r);
        });
        return Object.keys(map).sort().map((m) => ({ month: m, entries: map[m] }));
    }, [filtered]);

    const activeDays = filtered.filter((r) => r.timeIn !== "—").length;

    return (
        <section id="we-dtr" className="w-full flex flex-col gap-8">
            {/* Section heading */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-accent font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-accent/40">Chapter III</span>
                        <span className="text-border">·</span>
                        Section B
                    </p>
                    <h2
                        data-aos="fade-right"
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Daily Time<br />Record.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        55 entries. Every arrival and departure accounted for.
                        <br />
                        <span className="text-muted-foreground/30">$ cat chapter3/daily-time-record.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<Clock size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter3/daily-time-record.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">

                    {/* Title row */}
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <Clock size={20} className="text-accent" />
                        </div>
                        <div>
                            <p className="text-[11px] text-accent font-bold tracking-[.2em] uppercase">B.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Daily Time Record</h3>
                            <p className="text-[11px] text-muted-foreground/60 mt-0.5">January 30 – April 30, 2026 · 55 entries</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div data-aos="fade-right" className="border-l-2 border-accent/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">
                            Daily logging of arrival, departure, and total hours worked. Documented actual work hours against the required 504-hour internship mandate with supervisor verification.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                            { label: "Total Days", value: "55", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
                            { label: "Total Hours", value: "504", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5" },
                            { label: "Time In", value: "~7:00 AM", color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/5" },
                            { label: "Time Out", value: "~6:00 PM", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5" },
                        ].map((s) => (
                            <div key={s.label} className={`rounded-xl border ${s.border} ${s.bg} p-4 flex flex-col gap-1`}>
                                <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">{s.label}</p>
                                <p className={`text-[15px] font-extrabold ${s.color}`}>{s.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── Filter bar ── */}
                    <div data-aos="fade-up" className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <span className="text-[10px] text-muted-foreground/40 tracking-[.2em] uppercase shrink-0">Filter by Month</span>

                        <div className="flex flex-wrap gap-2">
                            {MONTH_OPTIONS.map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => setMonthFilter(opt.value)}
                                    className={`
                                        text-[10px] font-bold tracking-[.15em] uppercase px-3 py-1.5 rounded-lg border transition-all duration-200
                                        ${monthFilter === opt.value
                                            ? "bg-accent/10 border-accent/40 text-accent"
                                            : "bg-transparent border-border/40 text-muted-foreground/40 hover:border-accent/20 hover:text-muted-foreground/70"
                                        }
                                    `}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>

                        {monthFilter !== "all" && (
                            <span className="text-[10px] text-muted-foreground/30 ml-auto shrink-0">
                                {activeDays} day{activeDays !== 1 ? "s" : ""}
                            </span>
                        )}
                    </div>

                    {/* ── Table ── */}
                    <div data-aos="fade-up" className="flex flex-col gap-6">
                        {groups.map(({ month, entries }) => (
                            <div key={month} className="flex flex-col gap-0">
                                {/* Month label */}
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[10px] text-accent/60 font-bold tracking-[.2em] uppercase">
                                        ▸ {MONTH_LABELS[month]}
                                    </span>
                                    <div className="flex-1 h-px bg-accent/10" />
                                    <span className="text-[10px] text-muted-foreground/25">
                                        {entries.filter(e => e.timeIn !== "—").length} days
                                    </span>
                                </div>

                                {/* Table header */}
                                <div className="grid grid-cols-[90px_32px_1fr_1fr_1fr_1fr_80px] gap-x-3 px-3 py-1.5 rounded-t-lg bg-accent/5 border border-accent/10">
                                    {["Date", "Day", "Time In", "Lunch Out", "Lunch In", "Time Out", "Note"].map((h) => (
                                        <span key={h} className="text-[9px] text-muted-foreground/30 tracking-[.18em] uppercase font-bold">{h}</span>
                                    ))}
                                </div>

                                {/* Rows */}
                                {entries.map((r, i) => {
                                    const isSpecial = r.timeIn === "—";
                                    return (
                                        <div
                                            key={r.date}
                                            className={`
                                                grid grid-cols-[90px_32px_1fr_1fr_1fr_1fr_80px] gap-x-3
                                                px-3 py-2 border-x border-b border-border/30
                                                transition-colors duration-150 hover:bg-accent/[0.03]
                                                ${i === entries.length - 1 ? "rounded-b-lg" : ""}
                                                ${isSpecial ? "opacity-50" : ""}
                                            `}
                                        >
                                            <span className="text-[11px] text-muted-foreground/70 tabular-nums">{formatDate(r.date)}</span>
                                            <span className="text-[10px] text-muted-foreground/30">{r.day}</span>
                                            <span className={`text-[11px] tabular-nums font-medium ${r.timeIn === "—" ? "text-muted-foreground/20" : "text-foreground/80"}`}>{r.timeIn}</span>
                                            <span className={`text-[11px] tabular-nums ${r.lunchOut === "—" ? "text-muted-foreground/20" : "text-muted-foreground/50"}`}>{r.lunchOut}</span>
                                            <span className={`text-[11px] tabular-nums ${r.lunchIn === "—" ? "text-muted-foreground/20" : "text-muted-foreground/50"}`}>{r.lunchIn}</span>
                                            <span className={`text-[11px] tabular-nums font-medium ${r.timeOut === "—" ? "text-muted-foreground/20" : "text-foreground/80"}`}>{r.timeOut}</span>
                                            <span>
                                                {r.note && (
                                                    <span className={`
                                                        inline-block text-[8px] font-bold tracking-[.12em] uppercase px-1.5 py-0.5 rounded
                                                        ${r.note === "Bio Registration"
                                                            ? "bg-accent/10 text-accent/70 border border-accent/20"
                                                            : r.note === "Half Day"
                                                                ? "bg-secondary/10 text-secondary/70 border border-secondary/20"
                                                                : "bg-muted/10 text-muted-foreground/40 border border-border/30"
                                                        }
                                                    `}>
                                                        {r.note}
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-accent/30">▸</span>{" "}Chapter III · Section B{" "}·{" "}Verified by: MARY ROSE S. CORTEZ, HEAD, DAC SECRETARIAT
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}