"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeader, Divider, TerminalWindow } from "@/components/terminal";
import { Mail, Send, Terminal, MapPin, Clock, CheckCircle2, XCircle } from "lucide-react";
import { PERSON } from "@/data/portfolio";

// ── EmailJS config — replace these ──────────────────────────────────────────
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;   // e.g. "abcDEFghiJKL"
// ────────────────────────────────────────────────────────────────────────────




// ── Edit these ───────────────────────────────────────────────────────────────
const CONTACT_LINKS = [
    {
        label: "Email",
        value: "nicholasabeleda.bsit@gmail.com",
        href: "mailto:nicholasabeleda.bsit@gmail.com",
        icon: <Mail size={15} />,
        color: "primary" as const,
        command: "mailto",
    },
    {
        label: "GitHub",
        value: "github.com/ABritex",
        href: "https://github.com/ABritex",
        icon: "/icons/github.svg",
        color: "accent" as const,
        command: "open github",
    },
    {
        label: "YouTube",
        icon: "/icons/youtube.svg",
        href: "https://www.youtube.com/@ABr1tex",
    },
    {
        label: "Facebook",
        icon: "/icons/facebook.svg",
        href: "https://www.facebook.com/abeleda123/",
    },
];

const META = [
    { label: "Location", value: PERSON.location ?? "Philippines", icon: <MapPin size={12} />, color: "text-primary" },
    { label: "Response Time", value: "Within 24–48 hrs", icon: <Clock size={12} />, color: "text-accent" },
    { label: "Status", value: "Open to opportunities", icon: <Terminal size={12} />, color: "text-secondary" },
];
// ────────────────────────────────────────────────────────────────────────────

const COLOR = {
    primary: {
        text: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/25",
        hoverBorder: "hover:border-primary/50",
        ring: "focus:ring-primary/30",
        inputBorder: "focus:border-primary/60",
    },
    accent: {
        text: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/25",
        hoverBorder: "hover:border-accent/50",
        ring: "focus:ring-accent/30",
        inputBorder: "focus:border-accent/60",
    },
    secondary: {
        text: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/25",
        hoverBorder: "hover:border-secondary/50",
        ring: "focus:ring-secondary/30",
        inputBorder: "focus:border-secondary/60",
    },
} as const;

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [state, setState] = useState<FormState>("idle");
    const [lines, setLines] = useState<string[]>([]);

    const pushLine = (line: string) =>
        setLines((prev) => [...prev, line]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState("loading");
        setLines([]);

        // Simulate terminal feedback
        pushLine(`$ send-mail --to ${form.email}`);
        await delay(400);
        pushLine(`> Validating fields...`);
        await delay(500);
        pushLine(`> Composing payload...`);
        await delay(600);
        pushLine(`> Connecting to mail server...`);
        await delay(700);

        // TODO: replace with your actual form submission logic (e.g. Resend, EmailJS, etc.)
        // DELETE this:
        const ok = true; // stub — swap with real fetch/action

        // REPLACE with this:
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            pushLine(`✓ Message delivered successfully.`);
            setState("success");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            pushLine(`✗ Delivery failed. Try again or email directly.`);
            setState("error");
        }

        // if (ok) {
        //     pushLine(`✓ Message delivered successfully.`);
        //     setState("success");
        //     setForm({ name: "", email: "", subject: "", message: "" });
        // } else {
        //     pushLine(`✗ Delivery failed. Try again or email directly.`);
        //     setState("error");
        // }
    };

    const isLoading = state === "loading";

    return (
        <section id="contact" className="w-full flex flex-col gap-12">
            <SectionHeader
                subtitle={
                    <>
                        Got a project, opportunity, or just want to say hi?{" "}
                        <span className="text-foreground font-semibold">Let&apos;s talk.</span>
                    </>
                }
                title={<>Get In<br />Touch.</>}
                note={
                    <>
                        {PERSON.course} · {PERSON.academicYear}
                        <br />
                        <span className="text-muted-foreground/40">$ open contact.sh</span>
                    </>
                }
            />

            <Divider icon={<Mail size={18} className="text-primary" />} />

            {/* Meta bar */}
            <div data-aos="fade-up" className="flex flex-wrap gap-3">
                {META.map((m) => (
                    <div
                        key={m.label}
                        className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[11px]"
                    >
                        <span className={`${m.color} opacity-70`}>{m.icon}</span>
                        <span className="text-muted-foreground/40 tracking-widest uppercase">{m.label}:</span>
                        <span className={`${m.color} font-semibold`}>{m.value}</span>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">

                {/* ── Contact form ─────────────────────────────────────── */}
                <TerminalWindow dataAos="fade-up" command="./contact.sh --interactive">
                    <form onSubmit={handleSubmit} className="p-6 md:p-10 flex flex-col gap-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field
                                label="name"
                                type="text"
                                placeholder="Your full name"
                                value={form.name}
                                required
                                onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                            />
                            <Field
                                label="email"
                                type="email"
                                placeholder="you@domain.com"
                                value={form.email}
                                required
                                onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                            />
                        </div>

                        <Field
                            label="subject"
                            type="text"
                            placeholder="What&apos;s this about?"
                            value={form.subject}
                            required
                            onChange={(v) => setForm((p) => ({ ...p, subject: v }))}
                        />

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] tracking-[.2em] uppercase text-muted-foreground/40">
                                <span className="text-accent">▸</span> message
                            </label>
                            <textarea
                                placeholder="Write your message here..."
                                value={form.message}
                                required
                                rows={6}
                                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-[13px] text-foreground placeholder:text-muted-foreground/30 outline-none resize-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all duration-150"
                            />
                        </div>

                        {/* Terminal output */}
                        {lines.length > 0 && (
                            <div className="rounded-xl border border-border bg-background/70 px-5 py-4 flex flex-col gap-1 font-mono text-[11px]">
                                {lines.map((line, i) => (
                                    <p
                                        key={i}
                                        className={
                                            line.startsWith("✓")
                                                ? "text-secondary"
                                                : line.startsWith("✗")
                                                    ? "text-destructive"
                                                    : line.startsWith("$")
                                                        ? "text-primary"
                                                        : "text-muted-foreground/60"
                                        }
                                    >
                                        {line}
                                    </p>
                                ))}
                                {isLoading && (
                                    <span className="inline-block w-2 h-3 bg-primary animate-pulse rounded-sm" />
                                )}
                            </div>
                        )}

                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group flex items-center gap-2.5 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/60 px-6 py-3 text-[13px] font-semibold text-primary transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <span className="w-3.5 h-3.5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {state === "success" && (
                                <div className="flex items-center gap-1.5 text-[12px] text-secondary">
                                    <CheckCircle2 size={14} />
                                    Message sent!
                                </div>
                            )}
                            {state === "error" && (
                                <div className="flex items-center gap-1.5 text-[12px] text-destructive">
                                    <XCircle size={14} />
                                    Something went wrong.
                                </div>
                            )}
                        </div>
                    </form>
                </TerminalWindow>

                {/* ── Sidebar: contact links ────────────────────────────── */}
                <div className="flex flex-col gap-4">
                    {CONTACT_LINKS.map((link) => {
                        const c = link.color ? COLOR[link.color] : COLOR.primary;
                        const isSvgIcon = typeof link.icon === "string";
                        return (
                            <a
                                key={link.label}
                                data-aos="fade-left"
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className={`group flex flex-col gap-3 rounded-xl border border-border bg-card px-5 py-4 ${c.hoverBorder} hover:bg-muted/30 transition-all duration-150`}
                            >
                                <div className="flex items-center gap-2.5">
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${c.bg}`}>
                                        {isSvgIcon ? (
                                            <Image src={link.icon as string} alt={link.label} width={16} height={16} className="w-4 h-4" />
                                        ) : (
                                            <span className={c.text}>{link.icon}</span>
                                        )}
                                    </div>
                                    <span className={`text-[10px] font-bold tracking-[.2em] uppercase ${c.text}`}>
                                        {link.label}
                                    </span>
                                </div>
                                {link.command && link.value && (
                                    <div className="flex flex-col gap-0.5 pl-9">
                                        <span className="text-[10px] text-muted-foreground/30 font-mono">$ {link.command}</span>
                                        <span className={`text-[12px] font-semibold ${c.text} group-hover:underline underline-offset-2`}>
                                            {link.value}
                                        </span>
                                    </div>
                                )}
                            </a>
                        );
                    })}

                    {/* Decorative availability card */}
                    <div data-aos="fade-left" className="mt-2 rounded-xl border border-border bg-card px-5 py-5 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <span className="relative flex w-2 h-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                            </span>
                            <span className="text-[10px] font-bold tracking-[.2em] uppercase text-secondary">
                                Available
                            </span>
                        </div>
                        <p className="text-[12px] text-muted-foreground leading-relaxed">
                            Currently open to{" "}
                            <span className="text-foreground font-semibold">internship roles</span>,{" "}
                            <span className="text-foreground font-semibold">freelance projects</span>, and{" "}
                            <span className="text-foreground font-semibold">entry-level positions</span>.
                        </p>
                        <p className="text-[10px] text-muted-foreground/30 font-mono border-t border-border pt-3">
                            $ status --check<br />
                            <span className="text-secondary">▸ open_to_work: true</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function Field({
    label,
    type,
    placeholder,
    value,
    required,
    onChange,
}: {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    required?: boolean;
    onChange: (v: string) => void;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-[.2em] uppercase text-muted-foreground/40">
                <span className="text-primary">▸</span> {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                required={required}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-[13px] text-foreground placeholder:text-muted-foreground/30 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-all duration-150"
            />
        </div>
    );
}

function delay(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
}