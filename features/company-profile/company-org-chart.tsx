"use client";
import { COMPANY_PROFILE } from "@/data/portfolio";
import { Network } from "lucide-react";
import { TerminalWindow, Divider } from "@/components/terminal";

const ORG = {
    chairman: { name: "Joseph E. Salgado", title: "BAC Chairman" },
    viceChairman: {
        name: "Engr. Ronald V. Reyes",
        title: "BAC Vice Chairman",
        twg: [
            "Elisa B. Espinola",
            "Frederick R. Arroyo",
            "Fatima C. Castronuevo",
            "Engr. Jigger U. Reyes",
            "Engr. Kate O. Romero",
            "Rolando R. Ladao III",
        ],
        members: [
            "Noreen Venus R. Mendoza",
            "Fernando G. Leoncito",
            "Virgilio M. Aguilos Jr.",
        ],
    },
    secretariat: {
        head: { name: "Mary Rose S. Cortez", title: "Head, BAC Secretariat" },
        members: [
            { name: "Reynaldo R. Sadiwa Jr.", title: "Member, BAC Secretariat" },
            { name: "Rudilie H. Villangca", title: "Member, BAC Secretariat" },
        ],
        assistants: ["Jhoan Magno", "Ace Añonuevo", "Vergie Estacio", "Monique Galvez", "Johnelyn Fernandez"],
        aides: ["Christian Espiritu", "Tinetine Omugtong", "Noel Ylagan Jr.", "Aizelle Zubiri"],
    },
};

function OrgCard({ name, title, color = "primary" }: { name: string; title: string; color?: string }) {
    const colorMap: Record<string, string> = {
        primary: "border-primary/30 bg-primary/10 text-primary",
        accent: "border-accent/30 bg-accent/10 text-accent",
        secondary: "border-secondary/30 bg-secondary/10 text-secondary",
        muted: "border-border bg-card/60 text-muted-foreground",
    };
    return (
        <div className={`px-4 py-2.5 rounded-xl border text-center ${colorMap[color]}`}>
            <p className="text-[12px] font-bold">{name}</p>
            <p className="text-[10px] opacity-60 mt-0.5">{title}</p>
        </div>
    );
}

function MemberPill({ name }: { name: string }) {
    return (
        <div className="px-3 py-1.5 rounded-lg border border-border bg-card/50 text-center">
            <p className="text-[10px] text-muted-foreground">{name}</p>
        </div>
    );
}

export function CompanyOrgChart() {
    return (
        <section id="cp-org" className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p data-aos="fade-right" className="text-[10px] text-primary font-bold tracking-[.25em] uppercase mb-3 flex items-center gap-2">
                        <span className="text-primary/40">Chapter II</span>
                        <span className="text-border">·</span>
                        Section 4
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
                        Organizational<br />Structure.
                    </h2>
                </div>
                <div data-aos="fade-left" className="hidden lg:flex items-start justify-end pt-1">
                    <p className="text-[12px] text-muted-foreground/50 leading-relaxed max-w-xs text-right">
                        The chain of command that keeps procurement accountable.
                        <br />
                        <span className="text-muted-foreground/30">$ cat org-chart.md</span>
                    </p>
                </div>
            </div>

            <Divider icon={<Network size={18} />} />

            <TerminalWindow dataAos="fade-up" command="cat chapter2/org-chart.md">
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div data-aos="fade-right" className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <Network size={20} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">4.</p>
                            <h3 className="text-[17px] font-bold text-foreground">Organizational Structure</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full overflow-x-auto">
                        <OrgCard name={ORG.chairman.name} title={ORG.chairman.title} color="primary" />
                        <div className="w-px h-5 bg-border" />
                        <div className="relative w-full max-w-xl flex items-start justify-center">
                            <div className="absolute top-0 left-[25%] right-[25%] h-px bg-border" />
                            <div className="w-1/2 flex flex-col items-center">
                                <div className="w-px h-5 bg-border" />
                                <OrgCard name={ORG.viceChairman.name} title={ORG.viceChairman.title} color="accent" />
                                <div className="w-px h-4 bg-border" />
                                <div className="w-full rounded-xl border border-accent/20 bg-accent/5 p-4 flex flex-col gap-2">
                                    <p className="text-[10px] font-bold text-accent tracking-widest uppercase mb-1">Technical Working Group</p>
                                    <div className="grid grid-cols-2 gap-1.5">
                                        {ORG.viceChairman.twg.map((name) => (
                                            <MemberPill key={name} name={name} />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-px h-3 bg-border" />
                                <div className="w-full rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-col gap-2">
                                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">BAC Members</p>
                                    <div className="flex flex-col gap-1.5">
                                        {ORG.viceChairman.members.map((name) => (
                                            <MemberPill key={name} name={name} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <div className="w-px h-5 bg-border" />
                                <OrgCard name={ORG.secretariat.head.name} title={ORG.secretariat.head.title} color="secondary" />
                                <div className="w-px h-4 bg-border" />
                                <div className="w-full rounded-xl border border-secondary/20 bg-secondary/5 p-4 flex flex-col gap-2">
                                    <p className="text-[10px] font-bold text-secondary tracking-widest uppercase mb-1">Secretariat Members</p>
                                    <div className="flex flex-col gap-1.5">
                                        {ORG.secretariat.members.map((m) => (
                                            <MemberPill key={m.name} name={m.name} />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-px h-3 bg-border" />
                                <div className="w-full rounded-xl border border-border bg-card/50 p-4 flex flex-col gap-2">
                                    <p className="text-[10px] font-bold text-muted-foreground/50 tracking-widest uppercase mb-1">Admin Assistants</p>
                                    <div className="grid grid-cols-2 gap-1.5">
                                        {ORG.secretariat.assistants.map((name) => (
                                            <MemberPill key={name} name={name} />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-px h-3 bg-border" />
                                <div className="w-full rounded-xl border border-border bg-card/50 p-4 flex flex-col gap-2">
                                    <p className="text-[10px] font-bold text-muted-foreground/50 tracking-widest uppercase mb-1">Admin Aide II</p>
                                    <div className="grid grid-cols-2 gap-1.5">
                                        {ORG.secretariat.aides.map((name) => (
                                            <MemberPill key={name} name={name} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl border border-border overflow-hidden">
                        <div className="px-4 py-2 border-b border-border bg-card/50 flex items-center gap-2">
                            <span className="text-accent/40 text-[10px]">▸</span>
                            <span className="text-[10px] text-muted-foreground/50 tracking-widest">org-chart.txt</span>
                        </div>
                        <pre className="text-[11px] text-muted-foreground p-5 leading-relaxed overflow-x-auto">
                            <code>{COMPANY_PROFILE.orgChart}</code>
                        </pre>
                    </div>

                    <p data-aos="fade-right" className="text-[10px] text-muted-foreground/25 border-t border-border pt-4">
                        <span className="text-primary/30">▸</span> Chapter II · Section 4
                    </p>
                </div>
            </TerminalWindow>
        </section>
    );
}