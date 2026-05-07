import { About } from "@/features/about";
import Header from "@/components/header";

export default function AppendicesPage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-8 py-10">
                <About />
            </div>
        </div>
    );
}