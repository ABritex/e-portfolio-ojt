"use client";
import { CheckCircle2 } from "lucide-react";
import { HeroBanner, ChapterStrip } from "@/components/terminal";
import { overall, ratingLabel } from "@/data/portfolio";

export function Assessment() {
    return (
        <section
            id="assessment"
            className="w-full flex flex-col gap-0"
            style={{ fontFamily: "var(--font-mono)" }}
        >
            <HeroBanner
                chapter="Chapter IV"
                title={<>Assessment &<br />Evaluation</>}
                subtitle="Reflecting on the practicum program"
                primaryColor="primary"
                secondaryColor="accent"
                quickFacts={[
                    {
                        label: "Overall Rating",
                        value: overall.toFixed(2),
                        color: "text-accent",
                        border: "border-accent/20",
                        bg: "bg-accent/5",
                        key: "rating",
                    },
                ]}
                description={ratingLabel(overall)}
            />

            <ChapterStrip
                chapter="Chapter IV — Assessment of the Practicum Program"
                sections={2}
                actions={[
                    { label: "Eval Form", href: "#as-form", color: "text-accent border-accent/20 bg-accent/5" },
                    { label: "Ratings Summary", href: "#as-ratings", color: "text-primary border-primary/20 bg-primary/5" },
                ]}
                icon={<CheckCircle2 size={14} className="text-accent" />}
            />
        </section>
    );
}