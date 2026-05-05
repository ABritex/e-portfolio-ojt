"use client";

import { Appendices, } from "@/features/appendices";
import Header from "@/components/header";

export default function AppendicesPage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <Appendices />
            </div>

        </div>
    );
}