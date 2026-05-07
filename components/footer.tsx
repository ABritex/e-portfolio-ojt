import Link from "next/link";

const socials = [
    { label: "GitHub", icon: "/icons/github.svg", href: "https://github.com/ABritex" },
    { label: "YouTube", icon: "/icons/youtube.svg", href: "https://www.youtube.com/@ABr1tex" },
    { label: "Facebook", icon: "/icons/facebook.svg", href: "https://www.facebook.com/abeleda123/" },
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
                    <div className="flex flex-col gap-2" data-aos="fade-right"
                        data-aos-duration="500">
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
                    <div data-aos="fade-right"
                        data-aos-duration="750">
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
                    <div data-aos="fade-right"
                        data-aos-duration="1000" >
                        <p className="text-[11px] tracking-[.2em] text-muted-foreground/40 uppercase mb-3">
                            <span className="text-accent">$</span> curl --socials
                        </p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {socials.map(({ label, icon, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {icon === "/icons/github.svg" && (
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.499.09.68-.217.68-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.09-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.011 2.415-.011 2.743 0 .267.177.578.687.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor" />
                                        )}
                                        {icon === "/icons/youtube.svg" && (
                                            <>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" fill="currentColor" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z" fill="currentColor" />
                                            </>
                                        )}
                                        {icon === "/icons/facebook.svg" && (
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="currentColor" />
                                        )}
                                    </svg>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div data-aos="fade-right"
                        data-aos-duration="1250">
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
                <div data-aos="fade-right"
                    data-aos-duration="500" className="px-5 leading-none select-none pointer-events-none border-t border-border/40 pt-4" aria-hidden="true">
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
                        nicholas-abeleda ©2026 ·{" "}
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