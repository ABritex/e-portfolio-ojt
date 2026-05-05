import { PERSON } from "@/data/portfolio";

export default function Header() {
    return (
        <header className="flex-shrink-0 w-full flex items-center justify-between px-8 py-5 border-b border-border">
            <div className="flex items-center gap-2 text-[13px] tracking-widest text-foreground">
                <span className="text-accent">▸</span>
                <span className="font-bold">{PERSON.name.toLowerCase().replace(/\s+/g, '-')}</span>
                <span className="text-muted-foreground/40">~</span>
            </div>

            <nav className="hidden md:flex items-center gap-1 border border-border rounded px-2 py-1 bg-card">
                {[
                    { label: "", cmd: "~/" },
                    { label: "title-page", cmd: "~/title-page" },
                    { label: "about", cmd: "~/about" },
                ].map(({ label, cmd }) => (
                    <a
                        key={label}
                        href={`${label}`}
                        className="group flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground px-3 py-1.5 rounded transition-colors hover:bg-muted"
                    >
                        <span className="text-accent/50 group-hover:text-accent transition-colors">$</span>
                        {cmd}
                    </a>
                ))}
            </nav>

            <a
                href="#contact"
                className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 bg-card hover:bg-primary/5 px-4 py-2 rounded transition-all"
            >
                <span className="text-accent">$</span> contact me
            </a>
        </header>
    );
}