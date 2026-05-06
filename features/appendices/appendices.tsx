"use client";
import { APPENDICES_FULL } from "@/data/portfolio";
import { SectionHeader } from "@/components/terminal/section-header";
import { Divider } from "@/components/terminal/divider";
import { TerminalWindow } from "@/components/terminal/terminal-window";

export function Appendices() {
    return (
        <section id="appendices" className="w-full flex flex-col gap-12" style={{ fontFamily: "var(--font-mono)" }}>
            <SectionHeader
                subtitle="Supporting documents — the complete paperwork of the internship journey."
                title={<>Appendices<br />& Records.</>}
                note={<>
                    Forms. Certificates. Records. Documentation.
                    <br />
                    <span className="text-muted-foreground/40">$ find ./appendices/ -type f</span>
                </>}
            />

            <Divider>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-secondary">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
            </Divider>

            <TerminalWindow command="find ./appendices/ -type f">
                <div className="p-6 md:p-10">
                    <p className="text-center text-[11px] tracking-[.25em] uppercase text-secondary font-bold mb-8">
                        Appendix Files
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {APPENDICES_FULL.map((app) => (
                            <div
                                key={app.id}
                                className="group bg-card border border-border rounded-2xl p-4 hover:border-secondary/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                                        {app.label.replace("Appendix ", "")}
                                    </span>
                                    <svg
                                        width="12"
                                        height="12"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="text-muted-foreground/20 group-hover:text-secondary transition-colors"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <p className="text-[12px] text-muted-foreground leading-snug">
                                    {app.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </TerminalWindow>
        </section>
    );
}