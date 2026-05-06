import { TOOLS } from "@/data/portfolio";
import { SectionHeader, Divider } from "@/components/terminal";

export function ToolsGrid() {
    return (
        <section
            id="tools"
            className="w-full flex flex-col gap-8"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <SectionHeader
                subtitle={
                    <>
                        A curated selection of tools that power daily workflow —
                        <span className="text-foreground font-semibold"> battle-tested</span>,
                        <span className="text-foreground font-semibold"> performance-focused</span>,
                        always in the{" "}
                        <span className="text-foreground font-semibold">terminal</span>.
                    </>
                }
                title={<>Daily Tools<br />& Environment.</>}
                note="Vim motions. Tmux panes. CLI-first utilities. No IDEs bloated with plugins I don't need."
            />

            <Divider />

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