"use client";

import { WorkExperience, WeeklyReport, DailyTimeRecord, ProgressReport, AnalysisReport } from "@/features/work-experience";
import Header from "@/components/header";
import FooterBtn from "@/components/footer-btn";

export default function WorkExperiencePage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <WorkExperience />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <WeeklyReport />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <DailyTimeRecord />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <ProgressReport />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <AnalysisReport />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10 gap-16">
                <FooterBtn
                    prev={{ text: "Work profile", href: "/work-profile" }}
                    next={{ text: "Assessment", href: "/assessment" }}
                />
            </div>
        </div>
    );
}