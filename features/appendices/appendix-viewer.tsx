"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const appendixImages: Record<string, string[]> = {
    appA: ["/images/appendices/appendix-a/evaluation-form.jpg"],
    appB: ["/images/appendices/appendix-b/cor.png"],
    appC: [
        "/images/appendices/appendix-c/id-back.jpg",
        "/images/appendices/appendix-c/id-front.jpg",
        "/images/appendices/appendix-c/validated-id.png",
    ],
    appD: ["/images/appendices/appendix-d/parent-consent.jpg"],
    appE: ["/images/appendices/appendix-e/medical-certificate.png"],
    appF: ["/images/appendices/appendix-f/certification-good-moral.png"],
    appG: ["/images/appendices/appendix-g/application-letter.png"],
    appH: [
        "/images/appendices/appendix-h/0c262d4f-7396-461f-8ee8-b3fb8ca9c079-0.jpg",
        "/images/appendices/appendix-h/0c262d4f-7396-461f-8ee8-b3fb8ca9c079-1.jpg",
    ],
    appI: [
        "/images/appendices/appendix-i/moa-1.jpg",
        "/images/appendices/appendix-i/moa-2.jpg",
        "/images/appendices/appendix-i/moa-3.jpg",
        "/images/appendices/appendix-i/moa-4.jpg",
        "/images/appendices/appendix-i/moa-5.jpg",
        "/images/appendices/appendix-i/moa-6.jpg",
        "/images/appendices/appendix-i/moa-7.jpg",
        "/images/appendices/appendix-i/moa-8.jpg",
    ],
    appJ: [
        "/images/appendices/appendix-j/attendance-january.png",
        "/images/appendices/appendix-j/attendance-february.png",
        "/images/appendices/appendix-j/attendance-march.png",
        "/images/appendices/appendix-j/attendance-april.png",
    ],
    appK: ["/images/appendices/appendix-k/certification-of-completion.jpg"],
    appL: ["/images/appendices/appendix-l/certification-of-clearance.jpg"],
    appM: ["/images/appendices/appendix-m/individual-intern-evaluation.png"],
};

interface AppendixViewerProps {
    appendixId: string;
    label: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function AppendixViewer({
    appendixId,
    label,
    open,
    onOpenChange,
}: AppendixViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = appendixImages[appendixId] || [];
    const hasMultiple = images.length > 1;

    useEffect(() => {
        setCurrentIndex(0);
    }, [appendixId]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onOpenChange(false);
            if (e.key === "ArrowLeft") setCurrentIndex((p) => (p - 1 + images.length) % images.length);
            if (e.key === "ArrowRight") setCurrentIndex((p) => (p + 1) % images.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, images.length, onOpenChange]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    if (!open || images.length === 0) return null;

    const handlePrev = () => setCurrentIndex((p) => (p - 1 + images.length) % images.length);
    const handleNext = () => setCurrentIndex((p) => (p + 1) % images.length);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
        >
            <div
                className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col w-[95vw] max-h-[95vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
                    <span className="text-sm font-medium text-foreground truncate pr-4">{label}</span>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted transition text-muted-foreground hover:text-foreground shrink-0"
                    >
                        <X size={14} />
                    </button>
                </div>

                {/* Image */}
                <div className="flex-1 overflow-auto flex items-center justify-center bg-background p-2">
                    <div className="relative w-full h-full max-h-[75vh]">
                        <Image
                            src={images[currentIndex]}
                            alt={`${label} - image ${currentIndex + 1} of ${images.length}`}
                            fill
                            sizes="95vw"
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>

                {/* Navigation */}
                {hasMultiple && (
                    <div className="flex items-center justify-between px-4 py-3 shrink-0 border-t border-border">
                        <button
                            onClick={handlePrev}
                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-border text-sm hover:bg-muted transition"
                        >
                            <ChevronLeft size={16} />
                            Previous
                        </button>
                        <span className="text-xs text-muted-foreground">
                            {currentIndex + 1} / {images.length}
                        </span>
                        <button
                            onClick={handleNext}
                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-border text-sm hover:bg-muted transition"
                        >
                            Next
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}