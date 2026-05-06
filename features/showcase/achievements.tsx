import { SectionHeader, Divider } from "@/components/terminal";
import Image from "next/image";
import { Star } from "lucide-react";

const PROJECTS = [
    {
        title: "Mindful Companion",
        desc: "AI mental health chatbot with self-help tools, mood tracking, and guided interventions.",
        period: "2024",
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/20",
        cover: "/covers/mindful.png",
        techs: ["Next.js", "PostgreSQL", "Drizzle Orm", "Supabase"],
        liveUrl: "https://mindful-companion-gamma.vercel.app",
        githubUrl: null,
    },
    {
        title: "Minstrel Website",
        desc: "Library of songs collected from Discord, featuring search and playback with a custom player.",
        period: "2024",
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
        cover: "/covers/minstrel.png",
        techs: ["React", "Tailwind CSS", "TanStack", "Drizzle ORM", "Neon DB"],
        liveUrl: "https://minstel-web-cnq.vercel.app/",
        githubUrl: "https://github.com/ABritex/minstel-web-cnq",
    },
    {
        title: "Minstrel Bot",
        desc: "Discord bot that collects, organizes, and serves songs from Discord servers to the Minstrel website.",
        period: "2023",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        borderColor: "border-secondary/20",
        cover: "/covers/minstrel-bot.png",
        techs: ["TypeScript", "Discord.js", "Drizzle ORM", "Neon DB"],
        liveUrl: null,
        githubUrl: "https://github.com/ABritex/minstrel-bot",
    },
];

export function Achievements() {
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

            <div>
                <p data-aos="fade-up" className="text-center text-[11px] tracking-[.25em] uppercase text-secondary font-bold mb-8">
                    Featured Projects
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PROJECTS.map((p) => (
                        <div data-aos="fade-up" key={p.title} className={`bg-card border ${p.borderColor} rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300 cursor-default`}>
                            <div className="flex items-start justify-between">
                                <span className="text-[10px] text-muted-foreground/40 tracking-widest mt-1">{p.period}</span>
                            </div>
                            <div className="relative w-full h-32 rounded-lg overflow-hidden">
                                <Image src={p.cover} alt={p.title} fill className="object-cover" />
                            </div>
                            <div>
                                <p className={`text-[13px] font-bold ${p.color} mb-1`}>{p.title}</p>
                                <p className="text-[11px] text-muted-foreground leading-relaxed">{p.desc}</p>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-border/50">
                                <div className="flex gap-2">
                                    {p.techs.map((t) => (
                                        <span key={t} className="text-[10px] px-2 py-0.5 bg-muted/30 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    {p.liveUrl && (
                                        <a href={p.liveUrl} className={`text-[10px] font-bold ${p.color} hover:underline`} target="_blank" rel="noopener noreferrer">
                                            Live →
                                        </a>
                                    )}
                                    {p.githubUrl && (
                                        <a href={p.githubUrl} className="text-[10px] font-bold text-muted-foreground hover:underline flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                                            <Image src="/icons/github.svg" alt="GitHub" width={12} height={12} />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}