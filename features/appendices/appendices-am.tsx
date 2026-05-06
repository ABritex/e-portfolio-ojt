"use client";
import { FileText } from "lucide-react";
import { APPENDICES_FULL } from "@/data/portfolio";
import { TerminalWindow, SectionHeader, Divider } from "@/components/terminal";
import { AppendixViewer } from "./appendix-viewer";
import { useState } from "react";

export function AppendicesAM() {
    const appendicesAM = APPENDICES_FULL.slice(0, 13);
    const [viewerOpen, setViewerOpen] = useState(false);
    const [activeAppendix, setActiveAppendix] = useState<{ id: string; label: string } | null>(null);

    const handleAppendixClick = (id: string, label: string) => {
        setActiveAppendix({ id, label });
        setViewerOpen(true);
    };

    return (
        <section id="appendices-am" className="w-full flex flex-col gap-8">
            <SectionHeader
                title="Supporting Documentation"
                subtitle="This page contains all official documents relevant to the On-the-Job Training experience, including official forms, certifications, and visual documentation of the internship."
            />
            <Divider />
            <TerminalWindow dataAos="fade-up" command="cat appendices/A-M.md">
                <div className="p-6 md:p-10 flex flex-col gap-6">
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                            <FileText size={20} className="text-secondary" />
                        </div>
                        <div>
                            <p className="text-[11px] text-secondary font-bold tracking-[.2em] uppercase">1.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Appendices A - M</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {appendicesAM.map((app) => (
                            <div data-aos="fade-up"
                                key={app.id}
                                className="group bg-card border border-border rounded-2xl p-4 hover:border-secondary/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                                onClick={() => handleAppendixClick(app.id, app.label)}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                                        {app.label.replace("Appendix ", "")}
                                    </span>
                                </div>
                                <p className="text-[12px] text-muted-foreground leading-snug">
                                    {app.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-secondary/30">▸</span> Chapter V · Section 1
                    </p>
                </div>
            </TerminalWindow>
            {activeAppendix && (
                <AppendixViewer
                    appendixId={activeAppendix.id}
                    label={activeAppendix.label}
                    open={viewerOpen}
                    onOpenChange={setViewerOpen}
                />
            )}
        </section>
    );
}