"use client";

import { WorkExperience } from "@/features/work-experience";
import Header from "@/components/header";

export default function WorkExperiencePage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <WorkExperience />
            </div>
        </div>
    );
}