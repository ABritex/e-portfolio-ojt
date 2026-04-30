import Link from "next/link";

const socials = [
    { label: "LinkedIn", icon: "in", color: "bg-[#0a66c2]", href: "#" },
    { label: "Behance", icon: "Bē", color: "bg-[#1769ff]", href: "#" },
    { label: "Dribbble", icon: "◉", color: "bg-[#ea4c89]", href: "#" },
    { label: "Discord", icon: "⌥", color: "bg-[#5865f2]", href: "#" },
    { label: "Github", icon: "⌘", color: "bg-[#24292e] border border-border", href: "#" },
];

const ctas = [
    { title: "Contact Me", sub: "Say Hello !", href: "/contact" },
    { title: "My Projects", sub: "Explore Projects", href: "/projects" },
];

export default function Footer() {
    return (
        <footer className="bg-background px-4 pb-4 pt-0">
            {/* ── Outer terminal card ── */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">

                {/* Terminal title-bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/30">
                    <span className="w-3 h-3 rounded-full bg-destructive/60" />
                    <span className="w-3 h-3 rounded-full bg-secondary/60" />
                    <span className="w-3 h-3 rounded-full bg-accent/60" />
                    <span className="ml-3 text-[11px] tracking-widest text-muted-foreground/50 select-none">
                        nicholas-abeleda ~ footer.sh
                    </span>
                </div>

                {/* Top content grid */}
                <div className="grid grid-cols-1 gap-10 px-6 pt-8 pb-6 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Tagline */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[11px] tracking-[.2em] text-muted-foreground/40 uppercase mb-1">
                            <span className="text-accent">$</span> ./tagline.sh
                        </p>
                        <p className="text-sm font-semibold leading-relaxed text-foreground">
                            Where{" "}
                            <span className="text-primary">aesthetics</span>{" "}
                            &amp;{" "}
                            <span className="text-accent">functionality</span>{" "}
                            meet
                        </p>
                    </div>

                    {/* Explore */}
                    <div>
                        <p className="text-[11px] tracking-[.2em] text-muted-foreground/40 uppercase mb-3">
                            <span className="text-accent">$</span> ls ./explore
                        </p>
                        <nav className="flex flex-col gap-2">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About Me", href: "/about" },
                                { label: "Contact", href: "/contact" },
                            ].map(({ label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                                >
                                    <span className="text-accent/40 group-hover:text-accent transition-colors">▸</span>
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Follow Me */}
                    <div>
                        <p className="text-[11px] tracking-[.2em] text-muted-foreground/40 uppercase mb-3">
                            <span className="text-accent">$</span> curl --socials
                        </p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {socials.map(({ label, icon, color, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black text-white shrink-0 ${color}`}>
                                        {icon}
                                    </span>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div>
                        <p className="text-[11px] tracking-[.2em] text-muted-foreground/40 uppercase mb-1">
                            <span className="text-accent">$</span> ./connect.sh
                        </p>
                        <div className="flex flex-col divide-y divide-border">
                            {ctas.map(({ title, sub, href }) => (
                                <Link
                                    key={title}
                                    href={href}
                                    className="flex items-center justify-between py-3 group"
                                >
                                    <div>
                                        <p className="text-sm font-bold text-foreground">{title}</p>
                                        <p className="text-xs text-muted-foreground">{sub}</p>
                                    </div>
                                    <span className="text-accent text-lg group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Big brand name — inside the card, clipped */}
                <div className="px-5 leading-none select-none pointer-events-none border-t border-border/40 pt-4" aria-hidden="true">
                    <span
                        className="block font-black tracking-tight text-foreground/90"
                        style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", lineHeight: 0.88, letterSpacing: "-0.03em" }}
                    >
                        nicholas-abeleda
                    </span>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between px-6 py-3 border-t border-border text-xs text-muted-foreground/50">
                    <p>
                        <span className="text-accent">▸</span>{" "}
                        nicholas-abeleda ©2025 ·{" "}
                        <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                    </p>
                    <p>
                        <span className="text-accent">$</span> uname -l{" "}
                        <span className="text-secondary ml-1">→ Philippines</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}