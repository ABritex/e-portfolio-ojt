import { PERSON } from "@/data/portfolio";

export default function About() {
    return (
        <section
            id="about"
            className="w-full flex flex-col gap-12"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            {/* Top: big left text + right note */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <p className="text-[clamp(15px,2vw,18px)] text-muted-foreground leading-relaxed mb-8">
                        I don&apos;t just write code — I build systems that{" "}
                        <span className="text-foreground font-semibold">think, scale, and endure</span>.
                        Every line is intentional. Every deploy is a commitment.
                        I&apos;m not here to fill a role — I&apos;m here to{" "}
                        <span className="text-foreground font-semibold">leave something behind that works.</span>
                    </p>
                    <h2
                        className="text-[clamp(40px,6vw,80px)] font-extrabold leading-[0.92]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Building with Purpose.<br />
                        Shipping with Pride.
                    </h2>
                </div>
                <div className="lg:text-right lg:pt-2 flex items-start justify-end">
                    <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm">
                        My obsession with the terminal, linux, and clean architecture
                        sets me apart. I don&apos;t just use tools — I understand them.
                    </p>
                </div>
            </div>

            {/* Divider with bolt icon */}
            <div className="relative flex items-center w-full">
                <div className="flex-1 border-t border-border" />
                <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-accent">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                </div>
            </div>

            {/* Middle: description + button */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                <p className="text-[clamp(13px,1.5vw,16px)] text-muted-foreground leading-relaxed">
                    I run <span className="text-secondary">Linux</span> on everything. I live in the{" "}
                    <span className="text-primary">terminal</span>. I ship full-stack systems
                    with <span className="text-accent">Next.js</span>, Node, and Postgres — quietly,
                    consistently, without waiting to feel ready.
                </p>
                <div className="flex lg:justify-end">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 border border-border bg-card text-foreground rounded-full px-7 py-3 text-[13px] hover:border-primary/50 hover:text-primary transition-all"
                    >
                        About Me
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Bottom: goal cards */}
            <div className="w-full">
                <p className="text-center text-[11px] tracking-[.25em] uppercase text-primary font-bold mb-8">
                    MY GOALS AS A {PERSON.course.split(' in ')[1]?.toUpperCase() || 'DEVELOPER'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        {
                            iconColor: "bg-accent/10 text-accent",
                            titleColor: "text-accent",
                            title: "Ship Real Systems",
                            desc: "Build full-stack apps that go beyond localhost — production-ready, scalable, and maintainable.",
                            icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
                        },
                        {
                            iconColor: "bg-primary/10 text-primary",
                            titleColor: "text-primary",
                            title: "Master Architecture",
                            desc: "Go beyond features — understand system design, databases, and how everything fits together.",
                            icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
                        },
                        {
                            iconColor: "bg-secondary/10 text-secondary",
                            titleColor: "text-secondary",
                            title: "Open Source",
                            desc: "Give back to the community. Contribute to projects that developers around the world actually use.",
                            icon: <><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="6" y1="9" x2="6" y2="15" /><line x1="9" y1="6" x2="15" y2="15" /></>,
                        },
                        {
                            iconColor: "bg-accent/10 text-accent",
                            titleColor: "text-accent",
                            title: "Build for People",
                            desc: "Create tools that solve real problems. If nobody uses it, it doesn't matter how clean the code is.",
                            icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
                        },
                    ].map(({ iconColor, titleColor, title, desc, icon }) => (
                        <div
                            key={title}
                            className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/30 hover:-translate-y-1 transition-all cursor-default"
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconColor}`}>
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    {icon}
                                </svg>
                            </div>
                            <div className={`text-[13px] font-bold ${titleColor}`}>{title}</div>
                            <div className="text-[11px] text-muted-foreground leading-relaxed">{desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}