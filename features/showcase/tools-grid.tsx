import { TOOLS } from "@/data/portfolio";

export function ToolsGrid() {
    return (
        <section
            id="tools"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top: text left + note right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5">
                        A curated selection of tools that power daily workflow —
                        <span className="text-foreground font-semibold"> battle-tested</span>,
                        <span className="text-foreground font-semibold"> performance-focused</span>,
                        always in the{" "}
                        <span className="text-foreground font-semibold">terminal</span>.
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
                        Daily Tools<br />& Environment.
                    </h2>
                </div>
                <div className="hidden lg:flex items-start justify-end pt-1">
                    <p data-aos="fade-left" className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        Vim motions. Tmux panes. CLI-first utilities.
                        No IDEs bloated with plugins I don&apos;t need.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-primary">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                </div>
            </div>

            {/* Tools Grid */}
            <div>
                <p data-aos="fade-up" className="text-center text-[11px] tracking-[.25em] uppercase text-primary font-bold mb-8">
                    Daily Tools & Environment
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {TOOLS.map((tool) => (
                        <div data-aos="fade-up"
                            key={tool.name}
                            className="bg-card border border-border rounded-2xl px-4 py-3.5 flex items-center justify-between hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
                        >
                            <div>
                                <p className="text-[13px] text-foreground font-semibold">{tool.name}</p>
                                <p className="text-[10px] text-muted-foreground/50 tracking-widest mt-0.5">{tool.tag}</p>
                            </div>
                            <span className={`text-[10px] font-bold tracking-widest ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                                ▸
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}