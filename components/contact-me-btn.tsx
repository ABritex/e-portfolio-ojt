"use client";
import { useState } from "react";
import { Send, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

const contacts = [
    { icon: Mail, label: "Send an email", sub: "nicholasabeleda.bsit@gmail.com", cls: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400" },
    { icon: "/icons/github.svg", label: "GitHub", sub: "@ABritex", cls: "bg-muted text-foreground" },
];

export default function ContactMeButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <a data-aos="fade-left" data-aos-duration="2000"
            href="contact"
            onMouseEnter={() => setHovered(true)
            }
            onMouseLeave={() => setHovered(false)}
            className="group relative inline-flex items-center gap-2.5 border border-border bg-card text-foreground rounded-full px-5 py-2 text-[13px] hover:border-primary/50 hover:text-primary transition-all duration-300 self-start"
        >
            <div className="pointer-events-none absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[230px] origin-bottom scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-card border border-border rounded-xl overflow-hidden z-10">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-muted border-b border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 text-[10px] tracking-widest text-muted-foreground font-mono">contact</span>
                </div>

                <div className="px-3.5 py-3 flex flex-col gap-2.5">
                    {contacts.map(({ icon: Icon, label, sub, cls }, i) => (
                        <div
                            key={label}
                            className="flex items-center gap-2.5"
                            style={{
                                opacity: hovered ? 1 : 0,
                                transform: hovered ? "translateY(0)" : "translateY(5px)",
                                transition: hovered ? `opacity 0.3s ease ${0.15 + i * 0.13}s, transform 0.3s ease ${0.15 + i * 0.13}s` : "none",
                            }}
                        >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${cls}`}>
                                {typeof Icon === 'string' ? (
                                    <Image src={Icon} alt={label} width={13} height={13} />
                                ) : (
                                    <Icon size={13} />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-medium text-foreground">{label}</span>
                                <span className="text-[10px] text-muted-foreground">{sub}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Send size={14} className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
            <span>Contact Me</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a >
    );
}
