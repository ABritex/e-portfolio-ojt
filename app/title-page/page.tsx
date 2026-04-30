"use client";

import { TitleCard, TableOfContents, Acknowledgement, StudentPrayer, PersonalPhilosophy, CareerPlan } from "@/features/title-page";
import Header from "@/components/header";

export default function TitlePageRoute() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <TitleCard />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <TableOfContents />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <Acknowledgement />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <StudentPrayer />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <PersonalPhilosophy />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <CareerPlan />
            </div>
        </div>
    );
}