"use client";

import { Assessment, EvaluationForm } from "@/features/assessment";
import Header from "@/components/header";
import FooterBtn from "@/components/footer-btn";

export default function AssessmentPage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <Assessment />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <EvaluationForm />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10 gap-16">
                <FooterBtn
                    prev={{ text: "Work Experience", href: "/work-experience" }}
                    next={{ text: "Appendices", href: "/appendices" }}
                />
            </div>
        </div>
    );
}