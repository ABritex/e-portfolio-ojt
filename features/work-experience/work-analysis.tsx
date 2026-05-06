"use client";

import { Activity } from "lucide-react";
import { Divider } from "@/components/terminal/divider";
import { TerminalWindow } from "@/components/terminal/terminal-window";

const analysisContent = [
    {
        title: "1. Setting",
        content: "The setting was good because I was able to get used to the environment inside the agency very easily. The setting was limited by the fact that there were only a few technical documents that required processing by the server. My initial analysis of the agency or organization was that the atmosphere is very welcoming and positive."
    },
    {
        title: "2. Site Supervisor",
        content: "The greatest contribution made by the site supervisor was guiding me in learning how the SVP (Small Value Procurement) process works. The general level of supervision was very good, as the supervisor was effective in teaching us what we needed to learn. I needed more from the supervisor in terms of gaining deeper knowledge about the bidding process."
    },
    {
        title: "3. Environmental Conditions or Events",
        content: "The one event or characteristic that really influenced my internship was my overall experience during my OJT at BAC. A trend or issue that really impacted the organization was not observed during my internship. The diversity of co-workers provided an opportunity for me to interact and learn from everyone in the workplace."
    },
    {
        title: "4. Self-Assessment",
        content: "The most important thing I learned is how the bidding process works. I contributed to the organization by segregating and organizing documents related to bidding, such as RFQs and other important papers. I still need more experience in the area of preparing and understanding the rest of the required documents. If I were to repeat this experience, I would focus more on fully understanding the bidding process and learning beyond my assigned tasks."
    },
    {
        title: "5. General",
        content: "The internship experience can be strengthened by being more attentive, continuously learning, and actively listening. Future interns should prioritize every task given to them and ensure that they complete their responsibilities efficiently and accurately."
    }
];

export function AnalysisReport() {
    return (
        <section id="we-analysis" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-primary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-primary/40">Chapter III</span>
                        <span className="text-border">·</span>
                        Section D
                    </p>
                    <h2 data-aos="fade-right"
                        className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Internship<br />Analysis<br />Report.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        Final comprehensive review. Theory vs. practice. Gaps. Recommendations.
                        <br />
                        <span className="text-muted-foreground/30">$ cat chapter3/analysis-report.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<Activity size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter3/analysis-report.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <Activity size={20} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">D.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Internship Analysis Report</h3>
                            <p className="text-[11px] text-muted-foreground/60 mt-0.5">January 30 - May 4, 2026</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {analysisContent.map((item) => (
                            <div key={item.title}>
                                <p data-aos="fade-right" className="text-[13px] font-semibold text-foreground mb-1.5">{item.title}</p>
                                <div data-aos="fade-right" className="border-l-2 border-border/10 pl-5">
                                    <p className="text-[14px] text-muted-foreground leading-[1.8]">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-primary/30">▸</span> Chapter III · Section D
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}