"use client";

import { Assessment, } from "@/features/assessment";
import Header from "@/components/header";

export default function AssessmentPage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <Assessment />
            </div>

        </div>
    );
}