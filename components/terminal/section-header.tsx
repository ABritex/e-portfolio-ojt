"use client";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
    subtitle: React.ReactNode;
    title: React.ReactNode;
    note?: React.ReactNode;
    subtitleClassName?: string;
    titleClassName?: string;
    titleStyle?: React.CSSProperties;
    aos?: boolean;
};

export function SectionHeader({
    subtitle,
    title,
    note,
    subtitleClassName,
    titleClassName,
    titleStyle,
    aos = true,
}: SectionHeaderProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
                <p
                    data-aos={aos ? "fade-right" : undefined}
                    className={cn(
                        "text-[clamp(13px,1.6vw,16px)] text-muted-foreground leading-relaxed mb-5",
                        subtitleClassName
                    )}
                >
                    {subtitle}
                </p>
                <h2
                    data-aos={aos ? "fade-right" : undefined}
                    className={cn(
                        "text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[0.92]",
                        titleClassName
                    )}
                    style={{
                        background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-0.02em",
                        ...titleStyle,
                    }}
                >
                    {title}
                </h2>
            </div>
            {note && (
                <div
                    data-aos={aos ? "fade-left" : undefined}
                    className="hidden lg:flex items-start justify-end pt-1"
                >
                    <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm text-right">
                        {note}
                    </p>
                </div>
            )}
        </div>
    );
}