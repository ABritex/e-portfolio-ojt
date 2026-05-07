import { PERSON } from "@/data/portfolio";
import Image from "next/image";

export default function HeroFooter() {
    return (
        <footer className="flex-shrink-0 w-full flex items-center justify-between px-8 py-5 border-t border-border">
            <p className="text-[11px] text-muted-foreground tracking-widest">
                <span className="text-accent">▸</span> / design, code, ship, execute
            </p>
            <div className="flex items-center gap-2">
                {[
                    { label: "Facebook", href: "https://www.facebook.com/abeleda123/" },
                    { label: "GitHub", href: "https://github.com/ABritex" },
                    { label: "YouTube", href: "https://www.youtube.com/@ABr1tex" },
                ].map(({ label, href }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded border border-border bg-card text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all">
                        <Image src={`/icons/${label.toLowerCase()}.svg`} alt={label} width={16} height={16} className="w-4 h-4 dark:invert" />
                    </a>
                ))}
            </div>
            <a href={`mailto:${PERSON.email}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground tracking-widest transition-colors">
                <span className="text-accent">$</span> {PERSON.email}
            </a>
        </footer>
    );
}