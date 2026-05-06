"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen) setCurrentIndex(0);
        onOpenChange(newOpen);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent showCloseButton={false} className="p-0 gap-0 border-border bg-card overflow-hidden transition-all duration-300 max-w-[85rem] w-[100vw] max-h-[100vh] rounded-2xl">
                <DialogDescription className="sr-only">
                    Appendix viewer for {label}
                </DialogDescription>
                <div className="border-b border-border px-3 py-2 flex items-center justify-between shrink-0">
                    <DialogTitle className="text-sm font-medium">
                        {label}
                    </DialogTitle>

                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => onOpenChange(false)}>
                        <X size={14} />
                    </Button>
                </div>
                <div className="px-1 py-1 overflow-auto flex flex-col gap-1 max-h-[calc(100vh-4rem)]">
                    <div className="relative bg-background border border-border rounded-xl p-0 flex-1 flex items-center justify-center">
                        <Image
                            src={images[currentIndex]}
                            alt={`${label} - image ${currentIndex + 1} of ${images.length}`}
                            className="max-w-full max-h-full object-contain"
                            style={{ maxHeight: "95vh" }}
                            width={1920}
                            height={1080}
                        />
                    </div>
                    {hasMultiple && (
                        <div className="flex items-center justify-between shrink-0">
                            <Button variant="outline" className="h-10 px-6" onClick={handlePrev}>
                                <ChevronLeft size={18} className="mr-2" />
                                Previous
                            </Button>

                            <div className="text-xs text-muted-foreground bg-card border border-border px-4 py-2 rounded-lg">
                                {currentIndex + 1} / {images.length}
                            </div>

                            <Button variant="outline" className="h-10 px-6" onClick={handleNext}>
                                Next
                                <ChevronRight size={18} className="ml-2" />
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}