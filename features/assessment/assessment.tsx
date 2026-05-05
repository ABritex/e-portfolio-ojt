"use client";
import { ASSESSMENT, PERSON, OJT_INFO } from "@/data/portfolio";

// ── Hero Banner ───────────────────────────────────────────────────────────────
export function Assessment() {
    return (
        <section
            id="assessment"
            className="w-full flex flex-col gap-0"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="relative w-full rounded-2xl overflow-hidden border border-border">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--color-accent)/8% 0%, transparent 60%), linear-gradient(225deg, var(--color-primary)/6% 0%, transparent 60%)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px)",
                    }}
                />
                <div className="relative z-10 px-8 py-14 md:px-16 md:py-20 flex flex-col items-center text-center gap-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] text-accent font-bold tracking-[.25em] uppercase">Chapter IV</span>
                    </div>

                    <h1
                        className="text-[clamp(42px,8vw,88px)] font-extrabold leading-[0.88]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Assessment &<br />Evaluation
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-border" />
                        <p className="text-[13px] text-muted-foreground tracking-wide">
                            Reflecting on the practicum program
                        </p>
                        <div className="h-px w-12 bg-border" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                        {ASSESSMENT.scores.map((s, i) => {
                            const colors = ["text-primary", "text-accent", "text-secondary"];
                            const borders = ["border-primary/20 bg-primary/5", "border-accent/20 bg-accent/5", "border-secondary/20 bg-secondary/5"];
                            return (
                                <div key={s.label} className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border ${borders[i]}`}>
                                    <span className={`text-[16px] font-extrabold ${colors[i]}`}>{s.value}%</span>
                                    <span className="text-[10px] text-muted-foreground tracking-widest uppercase">{s.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Chapter strip */}
            <div className="mt-6 rounded-2xl border border-border bg-card px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[12px] font-bold text-foreground">Chapter IV — Assessment of the Practicum Program</p>
                        <p className="text-[11px] text-muted-foreground/60">3 sections · read below</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    {[
                        { label: "A. Eval Form", href: "#as-form", color: "text-accent border-accent/20 bg-accent/5" },
                        { label: "Performance Ratings", href: "#as-ratings", color: "text-primary border-primary/20 bg-primary/5" },
                        { label: "Summary & Comments", href: "#as-summary", color: "text-secondary border-secondary/20 bg-secondary/5" },
                    ].map((item) => (
                        <a key={item.href} href={item.href} className={`text-[10px] font-bold tracking-[.1em] uppercase px-3 py-1.5 rounded-lg border transition-opacity hover:opacity-80 ${item.color}`}>
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── A. Student Internship Evaluation Form ─────────────────────────────────────
export function EvaluationForm() {
    return (
        <section
            id="as-form"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-accent font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-accent/40">Chapter IV</span>
                        <span className="text-border">·</span>
                        Section A
                    </p>
                    <h2
                        className="text-[clamp(30px,4.5vw,60px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Student Internship<br />Evaluation Form.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        Official trainee record — identity, placement, and completion details.
                        <br />
                        <span className="text-muted-foreground/30">$ cat eval-form.md</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0 text-accent">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                    </svg>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">cat chapter4/eval-form.md</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/30" />
                        <span className="w-2 h-2 rounded-full bg-secondary/30" />
                        <span className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-8">
                    {/* Section header */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] text-accent font-bold tracking-[.2em] uppercase">A.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Student Internship Evaluation Form</h3>
                        </div>
                    </div>

                    {/* Trainee identity card */}
                    <div className="rounded-xl border border-accent/20 bg-accent/5 overflow-hidden">
                        <div className="px-5 py-3 border-b border-accent/10 flex items-center gap-2">
                            <span className="text-[10px] font-bold text-accent tracking-widest uppercase">Trainee Information</span>
                        </div>
                        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "Full Name", value: PERSON.name },
                                { label: "Student ID", value: PERSON.id },
                                { label: "Course", value: PERSON.course },
                                { label: "Academic Year", value: PERSON.academicYear },
                                { label: "Adviser", value: PERSON.adviser },
                                { label: "Internship Period", value: PERSON.internshipPeriod },
                                { label: "Host Agency", value: OJT_INFO.company },
                                { label: "Total Hours Rendered", value: `${OJT_INFO.hours} hours` },
                            ].map((field) => (
                                <div key={field.label} className="flex flex-col gap-0.5">
                                    <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">{field.label}</p>
                                    <p className="text-[13px] font-semibold text-foreground">{field.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Eval image placeholder — replace src with actual image path */}
                    <div className="rounded-xl border border-border overflow-hidden">
                        <div className="px-4 py-2.5 border-b border-border bg-card/50 flex items-center gap-2">
                            <span className="text-accent/40 text-[10px]">▸</span>
                            <span className="text-[10px] text-muted-foreground/50 tracking-widest">evaluation-form-scan.jpg</span>
                        </div>
                        <div className="bg-card/30 p-6 flex flex-col items-center justify-center gap-3 min-h-[200px]">
                            {/* ── Replace the block below with an <img> tag pointing to your actual eval scan ── */}
                            {/* <img src="/path/to/your/eval-scan.jpg" alt="Evaluation Form Scan" className="w-full rounded" /> */}
                            <div className="w-14 h-14 rounded-xl bg-border/30 flex items-center justify-center">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-muted-foreground/30">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                            </div>
                            <p className="text-[11px] text-muted-foreground/30 text-center">
                                Replace with your actual evaluation form scan
                                <br />
                                <span className="text-[10px] opacity-60">{'<img src="/path/to/eval.jpg" />'}</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-accent/30">▸</span> Chapter IV · Section A
                    </p>
                </div>
            </div>
        </section>
    );
}

// ── Performance Ratings ───────────────────────────────────────────────────────
export function PerformanceRatings() {
    const ratingLabels: Record<number, string> = { 5: "Outstanding", 4: "Very Satisfactory", 3: "Satisfactory", 2: "Needs Improvement", 1: "Poor" };

    // Derived ratings from ASSESSMENT.scores — map to a 5-point scale
    const categories = [
        { label: "Technical Skills", score: ASSESSMENT.scores[0].value, rating: 4, color: "text-primary", bg: "bg-primary", track: "bg-primary/10" },
        { label: "Work Ethics", score: ASSESSMENT.scores[1].value, rating: 5, color: "text-accent", bg: "bg-accent", track: "bg-accent/10" },
        { label: "Adaptability", score: ASSESSMENT.scores[2].value, rating: 4, color: "text-secondary", bg: "bg-secondary", track: "bg-secondary/10" },
        { label: "Communication", score: 80, rating: 4, color: "text-primary", bg: "bg-primary", track: "bg-primary/10" },
        { label: "Initiative", score: 88, rating: 4, color: "text-accent", bg: "bg-accent", track: "bg-accent/10" },
        { label: "Punctuality", score: 95, rating: 5, color: "text-secondary", bg: "bg-secondary", track: "bg-secondary/10" },
    ];

    return (
        <section
            id="as-ratings"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-primary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-primary/40">Chapter IV</span>
                        <span className="text-border">·</span>
                        Performance
                    </p>
                    <h2
                        className="text-[clamp(30px,4.5vw,60px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Performance<br />Evaluation<br />Summary.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        Ratings across six competency areas. Evaluated by the host supervisor.
                        <br />
                        <span className="text-muted-foreground/30">$ cat ratings.json | jq</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0 text-primary">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
                    </svg>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-primary text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">cat chapter4/ratings.json | jq</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/30" />
                        <span className="w-2 h-2 rounded-full bg-secondary/30" />
                        <span className="w-2 h-2 rounded-full bg-primary/30" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-8">
                    {/* Rating legend */}
                    <div className="flex flex-wrap gap-3">
                        {Object.entries(ratingLabels).reverse().map(([k, v]) => (
                            <div key={k} className="flex items-center gap-1.5">
                                <span className="text-[11px] font-bold text-foreground">{k}</span>
                                <span className="text-[10px] text-muted-foreground/50">— {v}</span>
                            </div>
                        ))}
                    </div>

                    {/* Score bars */}
                    <div className="flex flex-col gap-5">
                        {categories.map((cat) => (
                            <div key={cat.label}>
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[12px] text-foreground">{cat.label}</span>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-bold ${cat.color}`}>{ratingLabels[cat.rating]}</span>
                                        <span className={`text-[11px] font-extrabold tabular-nums ${cat.color}`}>{cat.score}%</span>
                                    </div>
                                </div>
                                <div className={`w-full h-2 rounded-full ${cat.track}`}>
                                    <div
                                        className={`h-full rounded-full transition-all duration-700 ${cat.bg}`}
                                        style={{ width: `${cat.score}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Rating scale reference */}
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                        {ASSESSMENT.scores.map((s, i) => {
                            const colors = ["text-primary border-primary/20 bg-primary/5", "text-accent border-accent/20 bg-accent/5", "text-secondary border-secondary/20 bg-secondary/5"];
                            return (
                                <div key={s.label} className={`rounded-xl border p-4 text-center ${colors[i]}`}>
                                    <p className="text-[22px] font-extrabold">{s.value}%</p>
                                    <p className="text-[10px] tracking-widest uppercase mt-1 opacity-70">{s.label}</p>
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-primary/30">▸</span> Chapter IV · Performance Ratings
                    </p>
                </div>
            </div>
        </section>
    );
}

// ── Summary & Comments ────────────────────────────────────────────────────────
export function AssessmentSummary() {
    return (
        <section
            id="as-summary"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[10px] text-secondary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-secondary/40">Chapter IV</span>
                        <span className="text-border">·</span>
                        Summary
                    </p>
                    <h2
                        className="text-[clamp(30px,4.5vw,60px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Ratings Overview<br />& Comments.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        What was gained. What needs work. What supervisors said.
                        <br />
                        <span className="text-muted-foreground/30">$ cat summary.md</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 border-t border-border" />
                <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center shrink-0 text-secondary">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border flex items-center gap-3">
                    <span className="text-secondary text-[11px]">$</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">cat chapter4/summary.md</span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/30" />
                        <span className="w-2 h-2 rounded-full bg-secondary/30" />
                        <span className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                </div>

                <div className="p-6 md:p-10 flex flex-col gap-8">
                    {/* Summary */}
                    <div className="border-l-2 border-secondary/20 pl-5">
                        <p className="text-[14px] text-muted-foreground leading-[1.85]">{ASSESSMENT.summary}</p>
                    </div>

                    {/* Strengths & Improvements side by side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Strengths */}
                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-md bg-primary/15 flex items-center justify-center">
                                    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" className="text-primary">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p className="text-[11px] font-bold text-primary tracking-[.15em] uppercase">Strengths</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                {ASSESSMENT.strengths.map((s) => (
                                    <div key={s} className="flex items-start gap-2.5">
                                        <span className="text-primary/40 mt-0.5 shrink-0">▸</span>
                                        <p className="text-[12px] text-muted-foreground leading-relaxed">{s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Improvements */}
                        <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-md bg-accent/15 flex items-center justify-center">
                                    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" className="text-accent">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>
                                <p className="text-[11px] font-bold text-accent tracking-[.15em] uppercase">Areas for Improvement</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                {ASSESSMENT.improvements.map((s) => (
                                    <div key={s} className="flex items-start gap-2.5">
                                        <span className="text-accent/40 mt-0.5 shrink-0">▸</span>
                                        <p className="text-[12px] text-muted-foreground leading-relaxed">{s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Evaluator comment block — fill in actual comments */}
                    <div className="rounded-xl border border-border bg-card/50 overflow-hidden">
                        <div className="px-5 py-3 border-b border-border flex items-center gap-2">
                            <span className="text-[10px] font-bold text-muted-foreground/50 tracking-widest uppercase">Evaluator Comments</span>
                        </div>
                        <div className="p-5 flex flex-col gap-4">
                            {/* Replace these placeholder comments with real ones from the eval form */}
                            {[
                                { role: "Supervisor", initials: "S1", comment: "Replace this with the actual supervisor comment from your evaluation form." },
                                { role: "OJT Coordinator", initials: "OC", comment: "Replace this with the actual OJT coordinator comment from your evaluation form." },
                            ].map((ev) => (
                                <div key={ev.role} className="flex items-start gap-4">
                                    <div className="w-9 h-9 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                                        <span className="text-[10px] font-bold text-secondary">{ev.initials}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] text-muted-foreground/50 font-bold tracking-widest uppercase mb-1">{ev.role}</p>
                                        <p className="text-[12px] text-muted-foreground leading-relaxed italic">"{ev.comment}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-secondary/30">▸</span> Chapter IV · Summary & Comments
                    </p>
                </div>
            </div>
        </section>
    );
}