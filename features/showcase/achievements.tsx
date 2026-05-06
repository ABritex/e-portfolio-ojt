import { ACHIEVEMENTS } from "@/data/portfolio";
import { SectionHeader, Divider } from "@/components/terminal";

const ACHIEVEMENT_ICONS: Record<string, React.ReactNode> = {
    "Dean's Lister": (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    "Capstone Best in Presentation": (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
        </svg>
    ),
    "Open Source Contributor": (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
            <line x1="6" y1="9" x2="6" y2="15" /><line x1="9" y1="6" x2="15" y2="15" />
        </svg>
    ),
    "300+ Hours OJT Certified": (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
    ),
};

export function Achievements() {
    return (
        <section
            id="achievements"
            className="w-full flex flex-col gap-12"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <SectionHeader
                subtitle={
                    <>
                        Not a badge collector — a{" "}
                        <span className="text-foreground font-semibold">proof of execution</span>.
                        Every milestone here came from shipping, not studying.
                    </>
                }
                title={<>Achievements<br />& Recognition.</>}
                note="Four semesters of Dean's List. Best capstone presentation. Open source commits. 300+ hours certified OJT. No participation trophies — just results."
            />

            <Divider iconClassName="text-secondary">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            </Divider>

            <div>
                <p data-aos="fade-up" className="text-center text-[11px] tracking-[.25em] uppercase text-secondary font-bold mb-8">
                    Achievements & Recognition
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ACHIEVEMENTS.map((a) => (
                        <div data-aos="fade-up"
                            key={a.title}
                            className={`bg-card border ${a.borderColor} rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300 cursor-default`}
                        >
                            <div className="flex items-start justify-between">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${a.bgColor} ${a.color}`}>
                                    {ACHIEVEMENT_ICONS[a.title]}
                                </div>
                                <span className="text-[10px] text-muted-foreground/40 tracking-widest mt-1">{a.period}</span>
                            </div>
                            <div>
                                <p className={`text-[13px] font-bold ${a.color} mb-1`}>{a.title}</p>
                                <p className="text-[11px] text-muted-foreground leading-relaxed">{a.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}