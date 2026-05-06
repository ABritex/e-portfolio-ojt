import { Appendices, AppendicesAM, AppendicesNR } from "@/features/appendices";
import Header from "@/components/header";
import FooterBtn from "@/components/footer-btn";

export default function AppendicesPage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <Appendices />
            </div>

            <div className="flex flex-col items-center justify-center px-8 py-10">
                <AppendicesAM />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <AppendicesNR />
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10 gap-16">
                <FooterBtn
                    prev={{ text: "Assessment", href: "/assessment" }}
                    next={{ text: "Go back to Title Page", href: "/title-page" }}
                />
            </div>
        </div>
    );
}