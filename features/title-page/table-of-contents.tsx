"use client";
import { TOC_STRUCTURE, APPENDICES_FULL } from "@/data/portfolio";

// ── Color maps ─────────────────────────────────────────────────────────────────
const COLOR = {
    primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/25", dot: "bg-primary", tag: "bg-primary/10 text-primary border-primary/20" },
    accent: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/25", dot: "bg-accent", tag: "bg-accent/10 text-accent border-accent/20" },
    secondary: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/25", dot: "bg-secondary", tag: "bg-secondary/10 text-secondary border-secondary/20" },
} as const;

type ColorKey = keyof typeof COLOR;

// ── Chapter icons ──────────────────────────────────────────────────────────────
const GROUP_ICONS: Record<string, React.ReactNode> = {
    "Front Matter": (
        <>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
        </>
    ),
    "Chapter I: Introduction": (
        <>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </>
    ),
    "Chapter II: Company Profile": (
        <>
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </>
    ),
    "Chapter III: Work Experiences": (
        <>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </>
    ),
    "Chapter IV: Assessment of the Practicum Program": (
        <>
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </>
    ),
};

// ── Row component ──────────────────────────────────────────────────────────────
function TocRow({
    index,
    label,
    href,
    color,
    isSub = false,
}: {
    index: string;
    label: string;
    href: string;
    color: ColorKey;
    isSub?: boolean;
}) {
    const c = COLOR[color];
    return (
        <a data-aos="fade-right"
            href={href}
            className={`group flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3.5 hover:${c.border} hover:bg-muted/30 transition-all duration-150 ${isSub ? "ml-6" : ""}`}
        >
            {/* Index badge */}
            <span className={`shrink-0 text-[10px] tabular-nums tracking-widest w-6 text-right ${isSub ? "text-muted-foreground/30" : "text-muted-foreground/40"}`}>
                {index}
            </span>

            {/* Dot */}
            <span className={`shrink-0 w-1.5 h-1.5 rounded-full ${isSub ? "bg-border" : c.dot} opacity-70`} />

            {/* Label */}
            <span className={`flex-1 text-[13px] ${isSub ? "text-muted-foreground" : "text-foreground"} group-hover:${c.text} transition-colors`}>
                {label}
            </span>

            {/* Arrow */}
            <svg
                width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24"
                className={`shrink-0 text-muted-foreground/20 group-hover:${c.text} transition-colors`}
            >
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </a>
    );
}

// ── Group block ────────────────────────────────────────────────────────────────
function TocGroup({
    group,
    color,
    items,
    startIndex,
}: {
    group: string;
    color: ColorKey;
    items: { id: string; label: string; href: string; subs: { label: string; href: string }[] }[];
    startIndex: number;
}) {
    const c = COLOR[color];
    const icon = GROUP_ICONS[group];

    return (
        <div className="flex flex-col gap-3">
            {/* Group heading */}
            <div data-aos="fade-right" className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${c.bg}`}>
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className={c.text}>
                        {icon}
                    </svg>
                </div>
                <span className={`text-[11px] font-bold tracking-[.2em] uppercase ${c.text}`}>
                    {group}
                </span>
                <div className="flex-1 border-t border-border" />
                <span className={`text-[9px] tracking-widest px-2 py-0.5 rounded-full border ${c.tag}`}>
                    {items.length} item{items.length !== 1 ? "s" : ""}
                </span>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-1.5">
                {items.map((item, i) => (
                    <TocRow
                        key={item.id}
                        index={String(startIndex + i).padStart(2, "0")}
                        label={item.label}
                        href={item.href}
                        color={color}
                    />
                ))}
            </div>
        </div>
    );
}

// ── Appendices grid ────────────────────────────────────────────────────────────
function AppendicesGrid() {
    return (
        <div className="flex flex-col gap-3">
            {/* Heading */}
            <div data-aos="fade-right" className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-secondary/10">
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                </div>
                <span className="text-[11px] font-bold tracking-[.2em] uppercase text-secondary">
                    Appendices
                </span>
                <div className="flex-1 border-t border-border" />
                <span className="text-[9px] tracking-widest px-2 py-0.5 rounded-full border bg-secondary/10 text-secondary border-secondary/20">
                    {APPENDICES_FULL.length} items
                </span>
            </div>

            {/* Grid */}
            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {APPENDICES_FULL.map((a) => (
                    <a
                        key={a.id}
                        href={`/ojt/${a.id}`}
                        className="group flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-3.5 hover:border-secondary/30 hover:bg-muted/30 transition-all duration-150"
                    >
                        {/* Badge */}
                        <span className="shrink-0 mt-0.5 text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20">
                            {a.label.replace("Appendix ", "")}
                        </span>
                        {/* Description */}
                        <span className="flex-1 text-[12px] text-muted-foreground group-hover:text-secondary leading-snug transition-colors">
                            {a.desc}
                        </span>
                        {/* Arrow */}
                        <svg
                            width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="shrink-0 mt-0.5 text-muted-foreground/20 group-hover:text-secondary transition-colors"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                ))}
            </div>
        </div>
    );
}

// ── Root export ────────────────────────────────────────────────────────────────
export function TableOfContents() {
    // Compute starting index for each group using reduce
    const groupStarts = TOC_STRUCTURE.reduce((acc, group) => {
        const start = acc.runningIndex;
        acc.runningIndex += group.items.length;
        acc.starts.push(start);
        return acc;
    }, { runningIndex: 1, starts: [] as number[] });

    return (
        <section
            id="table-of-contents"
            className="w-full flex flex-col gap-10"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        Structured navigation through your complete OJT documentation —{" "}
                        <span className="text-foreground font-semibold">click to explore</span>.
                    </p>
                    <h2 data-aos="fade-right"
                        className="text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Table of<br />
                        Contents.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        <span className="text-primary">Front matter</span> ·{" "}
                        <span className="text-accent">Chapters I–IV</span> ·{" "}
                        <span className="text-secondary">Appendices A–Q</span>
                        <br />
                        <span className="text-muted-foreground/40">$ cat toc.md | less</span>
                    </p>
                </div>
            </div>

            {/* ── Divider ── */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                </div>
            </div>

            {/* ── Main card ── */}
            <div data-aos="fade-up" className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Terminal header */}
                <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                    <span className="text-accent text-[11px]">$</span>
                    <span className="text-[11px] text-muted-foreground tracking-widest">
                        cat TABLE_OF_CONTENTS.md
                    </span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col gap-10">
                    {TOC_STRUCTURE.map((group, idx) => {
                        const start = groupStarts.starts[idx];
                        return (
                            <TocGroup
                                key={group.group}
                                group={group.group}
                                color={group.color}
                                items={group.items}
                                startIndex={start}
                            />
                        );
                    })}

                    {/* Appendices */}
                    <AppendicesGrid />
                </div>
            </div>


        </section>
    );
}