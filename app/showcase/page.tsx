"use client";

import { Achievements, TechStack, ToolsGrid, WebcamPixelGridDemo } from "@/features/showcase";
import Header from "@/components/header";

export default function Showcase() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <TechStack />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <ToolsGrid />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <Achievements />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <WebcamPixelGridDemo />
            </div>
        </div>
    );
}