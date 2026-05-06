"use client";
import { COMPANY_PROFILE } from "@/data/portfolio";
import { Compass } from "lucide-react";
import { Divider, TerminalWindow } from "@/components/terminal";

export function CompanyMission() {
    return (
        <section id="cp-mission" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-accent font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-accent/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Section 2
                    </p>
                    <h2 data-aos="fade-right"
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Vision &<br />Mission.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        The guiding principles of San Jose, Occidental Mindoro.
                        <br />
                        <span className="text-muted-foreground/30">$ cat mission.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<Compass size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter2/mission.md">
                <div className="p-6 md:p-10 flex flex-col gap-6">

                    {/* Section Header Row */}
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <Compass size={20} className="text-accent" />
                        </div>
                        <div>
                            <p className="text-[11px] text-accent font-bold tracking-[.2em] uppercase">2.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Vision / Mission</h3>
                        </div>
                    </div>

                    {/* Language note */}
                    <div data-aos="fade-up" className="flex items-center gap-2 px-1">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-[10px] text-muted-foreground/30 tracking-widest uppercase px-2">Wikang Filipino</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    {/* Vision */}
                    <div data-aos="fade-up" className="rounded-xl border border-accent/20 bg-accent/5 p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <p className="text-[11px] font-bold text-accent tracking-[.2em] uppercase">Vision</p>
                        </div>
                        <p className="text-[14px] text-muted-foreground leading-[1.85] italic">
                            &ldquo;{COMPANY_PROFILE.vision}&rdquo;
                        </p>
                        {/* Translation hint */}
                        <div className="border-t border-accent/10 pt-3 mt-1">
                            <p className="text-[11px] text-muted-foreground/40 leading-relaxed">
                                <span className="text-accent/50 font-bold tracking-widest uppercase text-[10px]">In brief · </span>
                                San Jose as a progressive agro-tourism city — a peaceful, God-fearing, and safe community proud of its culture and nature.
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div data-aos="fade-up" className="rounded-xl border border-primary/20 bg-primary/5 p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <p className="text-[11px] font-bold text-primary tracking-[.2em] uppercase">Mission</p>
                        </div>
                        <p className="text-[14px] text-muted-foreground leading-[1.85] italic">
                            &ldquo;{COMPANY_PROFILE.mission}&rdquo;
                        </p>
                        {/* Translation hint */}
                        <div className="border-t border-primary/10 pt-3 mt-1">
                            <p className="text-[11px] text-muted-foreground/40 leading-relaxed">
                                <span className="text-primary/50 font-bold tracking-widest uppercase text-[10px]">In brief &middot; </span>
                                A government serving with integrity &mdash; advancing agriculture, growing the economy, and maintaining social order with the people&apos;s unity.
                            </p>
                        </div>
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-accent/30">▸</span> Chapter II · Section 2
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}