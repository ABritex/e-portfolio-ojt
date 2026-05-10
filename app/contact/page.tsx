"use client";

import { Contact } from "@/features/contact";
import Header from "@/components/header";

export default function CompanyProfilePage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <Contact />
            </div>
        </div>
    );
}