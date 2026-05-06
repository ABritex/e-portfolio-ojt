"use client";

import { CompanyProfile, CompanyNature, CompanyMission, CompanyHistory, CompanyOrgChart } from "@/features/company-profile";
import Header from "@/components/header";
import FooterBtn from "@/components/footer-btn";

export default function CompanyProfilePage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <CompanyProfile />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <CompanyNature />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <CompanyMission />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <CompanyHistory />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <CompanyOrgChart />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10 gap-16">
                <FooterBtn
                    prev={{ text: "Introduction", href: "/introduction" }}
                    next={{ text: "Work Experience", href: "/work-experience" }}
                />
            </div>
        </div>
    );
}