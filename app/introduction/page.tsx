"use client";

import { Introduction, Importance, Objectives, TimeAndPlace } from "@/features/introduction";
import Header from "@/components/header";

export default function IntroductionPage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10 gap-16">
                <Introduction />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10 gap-16">
                <Importance />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10 gap-16">
                <Objectives />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10 gap-16">
                <TimeAndPlace />
            </div>
        </div>
    );
}