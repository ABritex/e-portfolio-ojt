import { PERSON } from "@/data/portfolio";

export default function Hero() {
    return (
        <main
            id="home"
            className="relative flex-1 min-h-0 flex flex-col items-center justify-center px-6 py-8 overflow-hidden"
        >
            {/* Centered content wrapper — badges/labels anchor to this */}
            <div className="relative w-full max-w-4xl flex flex-col items-center">

                {/* Side labels */}
                <p className="hidden lg:block absolute -left-5 top-1/2 -translate-y-1/2 text-[11px] text-muted-foreground leading-relaxed tracking-widest">
                    <span className="text-muted-foreground/40">~</span> /home/{PERSON.name.toLowerCase().replace(/\s+/g, '-')}<br />
                    <span className="text-accent">▸</span> {PERSON.tagline}
                </p>
                <p className="hidden lg:block absolute right-20 top-[42%] -translate-y-1/2 text-[11px] text-muted-foreground leading-relaxed tracking-widest text-right">
                    <span className="text-muted-foreground/40">~</span> /location<br />
                    <span className="text-accent">▸</span> {PERSON.location.toLowerCase()}
                </p>

                {/* Floating terminal badges */}
                <span className="hidden md:inline-flex absolute -top-5 right-10 items-center gap-2 text-[11px] px-3 py-1.5 rounded border border-border bg-card text-muted-foreground animate-[float1_7s_ease-in-out_infinite]">
                    <span className="text-accent">$</span> curl whoami
                    <span className="text-secondary ml-1">→ {PERSON.location.substring(0, 2).toUpperCase()}</span>
                </span>

                <span className="hidden md:inline-flex absolute top-[21%] -right-15 items-center gap-2 text-[11px] px-3 py-1.5 rounded border border-primary/30 bg-primary/10 text-primary animate-[float2_8s_ease-in-out_infinite]">
                    <span className="text-primary/60">$</span> git push origin <span className="text-accent">connect</span>
                </span>

                <span className="hidden md:inline-flex absolute top-[58%] right-10 items-center gap-1.5 text-[11px] px-3 py-1.5 rounded border border-secondary/30 bg-secondary/10 text-secondary animate-[float3_6s_ease-in-out_infinite]">
                    <span className="text-secondary/50">#</span> {PERSON.name.toLowerCase().replace(/\s+/g, '-')}
                </span>

                <span className="hidden md:inline-flex absolute top-[25%] -left-10 items-center gap-2 text-[11px] px-3 py-1.5 rounded border border-border bg-card text-muted-foreground animate-[float2_9s_ease-in-out_infinite]">
                    <span className="text-accent">$</span> uptime <span className="text-secondary ml-1">→ building</span>
                </span>

                <span className="hidden md:inline-flex absolute top-[60%] left-10 items-center gap-2 text-[11px] px-3 py-1.5 rounded border border-accent/30 bg-accent/10 text-accent animate-[float1_7.5s_ease-in-out_infinite]">
                    <span className="text-accent/60">$</span> uname -s <span className="text-foreground ml-1">Linux</span>
                </span>

                {/* Intro text */}
                <div className="z-10 text-center mb-5 animate-[fadeUp_0.6s_cubic-bezier(0.16,1,0.3,1)_both]">
                    <p className="text-[clamp(14px,2vw,20px)] text-muted-foreground leading-snug tracking-wide">
                        I&apos;m{" "}
                        <span className="text-foreground font-bold">{PERSON.name}</span>
                        , and I enjoy
                    </p>
                    <p className="text-[clamp(14px,2vw,20px)] text-muted-foreground leading-snug tracking-wide">
                        designing and ship{" "}
                        <span className="text-primary font-semibold">full-stack systems</span>{" "}
                        that{" "}
                        <span className="text-accent font-semibold">just work</span>.
                    </p>
                </div>

                {/* Headline */}
                <div
                    className="z-10 text-center leading-[0.88] mb-6 animate-[fadeUp_0.8s_0.1s_cubic-bezier(0.16,1,0.3,1)_both]"
                    style={{ letterSpacing: "-0.03em" }}
                >
                    <span
                        className="block font-extrabold text-[clamp(44px,7.5vw,100px)]"
                        style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        FULL-STACK
                    </span>
                    <span className="block font-extrabold text-[clamp(44px,7.5vw,100px)] text-secondary">
                        DEVELOPER
                    </span>
                    <span className="block font-extrabold text-[clamp(36px,6vw,84px)] text-foreground">
                        {"& "}
                        <span
                            style={{
                                background: "linear-gradient(90deg, var(--color-accent) 0%, var(--color-primary) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            BUILDER.
                        </span>
                    </span>
                </div>

                {/* Terminal subtitle */}
                <div className="z-10 text-center animate-[fadeUp_0.9s_0.25s_cubic-bezier(0.16,1,0.3,1)_both] space-y-1 mb-8">
                    <p className="text-[clamp(11px,1.3vw,13px)] text-muted-foreground/50 tracking-widest">
                        <span className="text-accent">$</span> ./whoami.sh
                    </p>
                    <p className="text-[clamp(12px,1.4vw,14px)] text-muted-foreground leading-relaxed">
                        <span className="text-accent">▸</span> quiet builder.{" "}
                        runs <span className="text-secondary">linux</span> on everything.{" "}
                        lives in the <span className="text-primary">terminal</span>.{" "}
                        ships things that <span className="text-accent">work</span>.
                    </p>
                </div>

                {/* Scroll down indicator */}
                <div className="z-10 flex flex-col items-center gap-2 animate-[fadeUp_1s_0.5s_cubic-bezier(0.16,1,0.3,1)_both]">
                    <span className="text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
                        scroll down
                    </span>
                    <div className="flex flex-col items-center gap-0.5 animate-[scrollBounce_1.6s_ease-in-out_infinite]">
                        <div className="w-px h-4 bg-gradient-to-b from-transparent to-accent/60" />
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-accent/60">
                            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

            </div>
        </main>
    );
}