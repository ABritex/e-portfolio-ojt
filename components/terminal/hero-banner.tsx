"use client";

import { useEffect, useState } from "react";
import { BackgroundBeams } from "@/components/background-beams";

type QuickFact = {
    label: string;
    value: string;
    color: string;
    border: string;
    bg: string;
    key?: string;
};

type HeroBannerProps = {
    chapter?: string;
    title: React.ReactNode;
    subtitle?: string;
    quickFacts?: QuickFact[];
    description?: string;
    actions?: React.ReactNode;
    primaryColor?: "primary" | "secondary" | "accent";
    secondaryColor?: "primary" | "secondary" | "accent";
};

export function HeroBanner({
    chapter,
    title,
    subtitle,
    quickFacts,
    description,
    actions,
    primaryColor = "primary",
    secondaryColor,
}: HeroBannerProps) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    return (
        <div data-aos="fade-up" className="relative w-full rounded-2xl overflow-hidden border border-border">
            {isDesktop && <BackgroundBeams className="absolute inset-0 -z-10 opacity-60" />}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, var(--color-secondary)/8% 0%, transparent 60%), linear-gradient(225deg, var(--color-primary)/6% 0%, transparent 60%)",
                }}
            />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px)",
                }}
            />
            <div className="relative z-10 px-8 py-14 md:px-16 md:py-20 flex flex-col items-center text-center gap-6">
                {chapter && (
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-${primaryColor}/20 bg-${primaryColor}/5`}>
                        <span className={`w-1.5 h-1.5 rounded-full bg-${primaryColor} animate-pulse`} />
                        <span className={`text-[10px] text-${primaryColor} font-bold tracking-[.25em] uppercase`}>
                            {chapter}
                        </span>
                    </div>
                )}

                <h1
                    className="text-[clamp(42px,8vw,88px)] font-extrabold leading-[0.88]"
                    style={{
                        background: `linear-gradient(135deg, var(--color-${secondaryColor ?? primaryColor}) 0%, var(--color-${primaryColor}) 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-0.03em",
                    }}
                >
                    {title}
                </h1>

                {subtitle && (
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-border" />
                        <p className="text-[13px] text-muted-foreground tracking-wide">{subtitle}</p>
                        <div className="h-px w-12 bg-border" />
                    </div>
                )}

                {quickFacts && quickFacts.length > 0 && (
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                        {quickFacts.map((fact) => (
                            <div
                                key={fact.key ?? fact.label}
                                className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border ${fact.border} ${fact.bg}`}
                            >
                                <span className={`text-[14px] font-extrabold ${fact.color}`}>{fact.value}</span>
                                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                                    {fact.label}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {description && (
                    <p className="text-[12px] text-muted-foreground/50 max-w-lg leading-relaxed">
                        {description}
                    </p>
                )}

                {actions}
            </div>
        </div>
    );
}