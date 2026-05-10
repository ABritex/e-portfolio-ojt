import { SectionHeader, Divider } from "@/components/terminal";
import Image from "next/image";
import { Star } from "lucide-react";

const placeholderCover = "/images/projects/placeholder-cover.svg";
const placeholderLogo = "/images/projects/placeholder-logo.svg";

const PROJECTS = [

    {
        title: "Mindful Companion",
        desc: "AI mental health chatbot with self-help tools, mood tracking, and guided interventions. Designed to feel calm and trustworthy — not clinical.",
        period: "2026",
        cover: "/images/projects/mindful-cover.jpg",
        logo: "/images/projects/mindful-logo.webp",
        dot: "bg-[#1D9E75]",
        iconColor: "text-[#0F6E56]",
        iconBg: "bg-[#E1F5EE]",
        fallbackIcon: "🧠",
        techs: ["Next.js", "PostgreSQL", "Drizzle ORM", "Supabase"],
        liveUrl: "https://mindful-companion-gamma.vercel.app",
        githubUrl: null,
    },
    {
        title: "Minstrel Website",
        desc: "Library of songs collected from Discord, featuring search and playback with a custom-built audio player. Pairs with the Minstrel Bot to form a full pipeline.",
        period: "2026",
        cover: placeholderCover,
        logo: placeholderLogo,
        dot: "bg-[#BA7517]",
        iconColor: "text-[#854F0B]",
        iconBg: "bg-[#FAEEDA]",
        fallbackIcon: "🎵",
        techs: ["React", "Tailwind CSS", "TanStack", "Drizzle ORM", "Neon DB"],
        liveUrl: "https://minstel-web-cnq.vercel.app/",
        githubUrl: "https://github.com/ABritex/minstel-web-cnq",
    },
    {
        title: "Minstrel Bot",
        desc: "Discord bot that collects, organizes, and serves songs from Discord servers directly into the Minstrel website — the data backbone of the whole system.",
        period: "2026",
        cover: placeholderCover,
        logo: placeholderLogo,
        dot: "bg-[#7F77DD]",
        iconColor: "text-[#534AB7]",
        iconBg: "bg-[#EEEDFE]",
        fallbackIcon: "🤖",
        techs: ["TypeScript", "Discord.js", "Drizzle ORM", "Neon DB"],
        liveUrl: null,
        githubUrl: "https://github.com/ABritex/minstrel-bot",
    },
    {
        title: "JNDM Sari-Sari Store (Web)",
        desc: "Full-featured convenience store management web app for clients to manage inventory, sales, and analytics. Serves as the customer-facing shop interface for the sari-sari store ecosystem.",
        period: "2025",
        cover: placeholderCover,
        logo: "/images/projects/jndm-logo.webp",
        dot: "bg-[#4F46E5]",
        iconColor: "text-[#4338CA]",
        iconBg: "bg-[#EEF2FF]",
        fallbackIcon: "🛒",
        techs: ["Next.js", "Firebase", "Tailwind CSS"],
        liveUrl: null,
        githubUrl: null,
        status: "postponed",
    },
    {
        title: "JNDM Sari-Sari Store (Mobile)",
        desc: "Tablet-based cashier app for sari-sari stores. Streamlines transactions, inventory tracking, and customer management — designed as the operational backbone for store owners.",
        period: "2025",
        cover: placeholderCover,
        logo: "/images/projects/jndm-logo.webp",
        dot: "bg-[#059669]",
        iconColor: "text-[#047857]",
        iconBg: "bg-[#D1FAE5]",
        fallbackIcon: "📱",
        techs: ["Flutter", "Firebase", "Provider"],
        liveUrl: null,
        githubUrl: null,
        status: "postponed",
    },
    {
        title: "The Empire (Web)",
        desc: "Multi-purpose business management platform for food court, restaurant, PC cafe, and boarding room operations. Unified dashboard for managing orders, bookings, and inventory across all business units.",
        period: "2024",
        cover: placeholderCover,
        logo: "/images/projects/empire-logo.png",
        dot: "bg-[#DC2626]",
        iconColor: "text-[#B91C1C]",
        iconBg: "bg-[#FEF2F2]",
        fallbackIcon: "🏢",
        techs: ["Next.js", "Firebase", "TypeScript"],
        liveUrl: null,
        githubUrl: null,
        status: "postponed",
    },


    {
        title: "The Empire (Mobile)",
        desc: "Android-only staff app for The Empire building operations. Enables staff to manage orders, track bookings, and handle day-to-day operations across food court, restaurant, PC cafe, and boarding rooms.",
        period: "2024",
        cover: placeholderCover,
        logo: "/images/projects/empire-logo.png",
        dot: "bg-[#7C3AED]",
        iconColor: "text-[#6D28D9]",
        iconBg: "bg-[#F3E8FF]",
        fallbackIcon: "📱",
        techs: ["Android Studio", "Jetpack Compose", "Firebase"],
        liveUrl: null,
        githubUrl: null,
    }
];

export function Achievements() {
    const years = PROJECTS.map((p) => p.period);
    const yearIndexMap = new Map<string, number>();
    years.forEach((year, i) => {
        if (!yearIndexMap.has(year)) {
            yearIndexMap.set(year, i);
        }
    });

    return (
        <section id="projects" className="w-full flex flex-col gap-12">
            <SectionHeader
                subtitle={
                    <>
                        Not a demo collector — a{" "}
                        <span className="text-foreground font-semibold">ship-first craftsman</span>.
                        Every project here is live, used, and actively maintained.
                    </>
                }
                title={<>Featured<br />Projects.</>}
                note="From schema to deploy — built iteratively, shipped quietly. No tutorials, just production code."
            />

            <Divider iconClassName="text-secondary"><Star /></Divider>

            {/* Timeline prompt label */}
            <div data-aos="fade-up" className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-muted-foreground/50 bg-muted/30 border border-border/40 rounded px-2 py-0.5">
                    ~/projects $ git log --all
                </span>
            </div>

            {/* Timeline */}
            <div className=" relative pl-7">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/50" />

                {PROJECTS.map((p, i) => {
                    const showYear = yearIndexMap.get(p.period) === i;
                    const isLast = i === PROJECTS.length - 1;
                    const marginBottom = isLast ? 'mb-0' : showYear ? 'mb-8' : 'mb-4';
                    return (
                        <div key={p.title}>
                            {/* Year flag */}
                            {showYear && (
                                <div
                                    data-aos="fade-up"
                                    className="flex items-center gap-2 mb-4 font-mono text-[11px] text-muted-foreground/40"
                                >
                                    <span className="w-4 h-px bg-border/50 inline-block" />
                                    {p.period}
                                </div>
                            )}

                            {/* Entry */}
                            <div data-aos="fade-up" className={`relative ${marginBottom}`}>
                                {/* Dot */}
                                <div
                                    className={`absolute -left-[24px] top-5 w-3.5 h-3.5 rounded-full border-2 border-card ${p.dot} z-10`}
                                />

                                {/* Card */}
                                <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-border transition-all duration-300">

                                    {/* Cover image */}
                                    <div className="relative w-full h-36 bg-muted/20">
                                        {p.cover && (
                                            <Image
                                                src={p.cover}
                                                alt={`${p.title} cover`}
                                                fill
                                                className="object-cover"
                                            />
                                        )}

                                        {/* Logo — bottom-left over cover */}
                                        <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-card border border-border/60 overflow-hidden flex items-center justify-center shadow-sm">
                                            {p.logo ? (
                                                <Image
                                                    src={p.logo}
                                                    alt={`${p.title} logo`}
                                                    width={36}
                                                    height={36}
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <span className="text-lg">{p.fallbackIcon}</span>
                                            )}
                                        </div>

                                        {/* Badges — top-right over cover */}
                                        <div className="absolute top-2.5 right-3 flex gap-1.5">
                                            {p.status === "postponed" && (
                                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 border border-amber-500/40">
                                                    postponed
                                                </span>
                                            )}
                                            {!p.status && p.liveUrl && (
                                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E1F5EE] text-[#0F6E56] border border-[#5DCAA5]">
                                                    ● live
                                                </span>
                                            )}
                                            {p.githubUrl && (
                                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-card/90 text-muted-foreground border border-border/60">
                                                    open source
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="p-5">
                                        <div className="mb-2">
                                            <p className="text-[14px] font-semibold text-foreground">{p.title}</p>
                                            <p className="text-[10px] font-mono text-muted-foreground/40 mt-0.5">{p.period}</p>
                                        </div>
                                        <p className="text-[12px] text-muted-foreground leading-relaxed mb-4">
                                            {p.desc}
                                        </p>

                                        <div className="border-t border-border/40 pt-3 mb-3">
                                            <div className="flex flex-wrap gap-1.5">
                                                {p.techs.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-[10px] font-mono px-2 py-0.5 bg-muted/30 border border-border/40 rounded text-muted-foreground"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            {p.status !== "postponed" && p.liveUrl && (
                                                <a
                                                    href={p.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-md bg-[#E1F5EE] text-[#0F6E56] border border-[#5DCAA5] hover:opacity-80 transition-opacity"
                                                >
                                                    ↗ View live
                                                </a>
                                            )}
                                            {p.githubUrl && (
                                                <a
                                                    href={p.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-md bg-muted/30 text-muted-foreground border border-border/40 hover:border-border hover:text-foreground transition-all"
                                                >
                                                    <Image src="/icons/github.svg" alt="GitHub" width={12} height={12} />
                                                    GitHub
                                                </a>
                                            )}
                                            {p.status === "postponed" && (
                                                <span className="text-[11px] font-mono px-3 py-1.5 rounded-md bg-amber-500/20 text-amber-600 border border-amber-500/40">
                                                    TBD
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}