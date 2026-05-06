"use client";
import { FileText, Globe, Heart, Megaphone, Scale, Trophy, CheckCircle, Lock, Star, Ban, BookOpen } from "lucide-react";
import { TerminalWindow } from "@/components/terminal";
import Image from "next/image";

const appendixNImages = [
    "/images/appendices/appendix-n/pre-seminar-1-classmate.png",
    "/images/appendices/appendix-n/pre-seminar-2-classmate.png",
    "/images/appendices/appendix-n/pre-seminar-3-mother-portrait.png",
    "/images/appendices/appendix-n/pre-seminar-4-mother-portrait.png",
];

const appendixOImages = [
    "/images/appendices/appendix-o/office-inside.png",
    "/images/appendices/appendix-o/office-outside.png",
];

export function AppendicesNR() {
    return (
        <section id="appendices-nr" className="w-full flex flex-col gap-12">
            <AppendixNSection />
            <AppendixOSection />
            <AppendixPSection />
            <AppendixQSection />
            <AppendixRSection />
        </section>
    );
}

function AppendixNSection() {
    return (
        <TerminalWindow dataAos="fade-up" command="cat appendices/N.md">
            <div className="p-6 md:p-10 flex flex-col gap-6">
                <div data-aos="fade-right" className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <FileText size={20} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">Appendix N</p>
                        <h3 className="text-[17px] font-bold text-foreground">Pictures during Pre-service Seminar</h3>
                    </div>
                </div>
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background border border-border rounded-xl p-3">
                        <Image
                            src={appendixNImages[0]}
                            alt="Pre-service seminar - classmate"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <p className="text-[11px] text-muted-foreground mt-2 text-center">Classmate during Pre-service Seminar</p>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-3">
                        <Image
                            src={appendixNImages[1]}
                            alt="Pre-service seminar - classmate"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <p className="text-[11px] text-muted-foreground mt-2 text-center">A photo with all my classmates in our section</p>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-3">
                        <Image
                            src={appendixNImages[2]}
                            alt="Pre-service seminar - mother portrait"
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <p className="text-[11px] text-muted-foreground mt-2 text-center">A photo taken before the pre-service seminar</p>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-3">
                        <Image
                            src={appendixNImages[3]}
                            alt="Pre-service seminar - mother portrait"
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <p className="text-[11px] text-muted-foreground mt-2 text-center">A special moment with my mom as she pins my badge</p>
                    </div>
                </div>
            </div>
        </TerminalWindow>
    );
}

function AppendixOSection() {
    return (
        <TerminalWindow dataAos="fade-up" command="cat appendices/O.md">
            <div className="p-6 md:p-10 flex flex-col gap-6">
                <div data-aos="fade-right" className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <FileText size={20} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">Appendix O</p>
                        <h3 className="text-[17px] font-bold text-foreground">Pictures during Office Works</h3>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {appendixOImages.map((img, idx) => (
                            <div key={idx} className="bg-background border border-border rounded-xl p-3">
                                <Image
                                    src={img}
                                    alt={`Office work - image ${idx + 1}`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                                <p className="text-[11px] text-muted-foreground mt-2 text-center">
                                    {idx === 0 ? "Office Inside View" : "Office Outside View"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TerminalWindow>
    );
}


function AppendixPSection() {
    const ethics = [
        { icon: Globe, text: "I will promote public knowledge, understanding, and appreciation of information technology." },
        { icon: Heart, text: "I will consider the general welfare and public good in the performance of my work." },
        { icon: Megaphone, text: "I will advertise goods or professional services in a clear and truthful manner." },
        { icon: Scale, text: "I will comply and strictly abide by intellectual property laws, patent laws, and other related IT laws." },
        { icon: Trophy, text: "I will accept full responsibility for work undertaken and utilize skills with competence and professionalism." },
        { icon: CheckCircle, text: "I will make truthful statements about my areas of competence and the capabilities of my products or services." },
        { icon: Lock, text: "I will not disclose confidential information without consent, unless required by law." },
        { icon: Star, text: "I will strive to attain the highest quality in the products and services I offer." },
        { icon: Ban, text: "I will not participate in systems that promote unlawful or unethical acts." },
        { icon: BookOpen, text: "I will uphold and improve IT professional standards through continuous development." }
    ];

    return (
        <TerminalWindow dataAos="fade-up" command="cat appendices/P.md">
            <div className="p-6 md:p-10 flex flex-col gap-6">
                <div data-aos="fade-right" className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <FileText size={20} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">Appendix P</p>
                        <h3 className="text-[17px] font-bold text-foreground">Code of Ethics for CAST Student Internship</h3>
                        <p className="text-xs text-muted-foreground">Official code of ethics governing student conduct during internship.</p>
                    </div>
                </div>

                <div data-aos="fade-up" className="bg-card border border-border rounded-2xl p-5">
                    <p className="text-sm font-semibold mb-2">Preamble:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        I will use my special knowledge and skills for the benefit of the public.
                        I will serve employees and clients with integrity, subject to an overriding
                        responsibility to the public interest, and strive to enhance the competence
                        and prestige of the profession.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ethics.map((item, index) => (
                        <div data-aos="fade-up" key={index} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-3 hover:bg-primary/5 transition">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                                <item.icon size={16} className="text-primary" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">{index + 1}</span>
                                    <p className="text-[11px] font-semibold text-foreground">Principle {index + 1}</p>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </TerminalWindow>
    );
}
function AppendixQSection() {
    return (
        <TerminalWindow dataAos="fade-up" command="cat appendices/Q.md">
            <div className="p-6 md:p-10 flex flex-col gap-6">
                <div data-aos="fade-right" className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <FileText size={20} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">Appendix Q</p>
                        <h3 className="text-[17px] font-bold text-foreground">Curriculum Vitae</h3>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="bg-card border border-border rounded-2xl p-4 flex items-center justify-center h-40">
                        <p className="text-muted-foreground">Content will be added later</p>
                    </div>
                </div>
            </div>
        </TerminalWindow>
    );
}

function AppendixRSection() {
    return (
        <TerminalWindow dataAos="fade-up" command="cat appendices/R.md">
            <div className="p-6 md:p-10 flex flex-col gap-6">
                <div data-aos="fade-right" className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <FileText size={20} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-[11px] text-primary font-bold tracking-[.2em] uppercase">Appendix R</p>
                        <h3 className="text-[17px] font-bold text-foreground">On-the-Job Training Portfolio Evaluation Form</h3>
                    </div>
                </div>

                <div data-aos="fade-up" className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex gap-2">
                            <strong className="text-muted-foreground">Name:</strong>
                            <span>Abeleda, Nicholas John C.</span>
                        </div>
                        <div className="flex gap-2">
                            <strong className="text-muted-foreground">Course:</strong>
                            <span>BSIT 4F</span>
                        </div>
                        <div className="flex gap-2 sm:col-span-2">
                            <strong className="text-muted-foreground">Agency:</strong>
                            <span>LGU (BAC Office)</span>
                        </div>
                        <div className="flex gap-2">
                            <strong className="text-muted-foreground">Period:</strong>
                            <span>Jan 30, 2026 – May 06, 2026</span>
                        </div>
                        <div className="flex gap-2 sm:col-span-2">
                            <strong className="text-muted-foreground">Address:</strong>
                            <span>Abeleda Compound, 0773, Quirino St., Barangay 6, San Jose, Occidental Mindoro</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                            <thead>
                                <tr className="border-b border-border bg-card/50">
                                    <th className="text-left p-3 font-semibold">Criteria</th>
                                    <th className="text-left p-3 font-semibold">Percent</th>
                                    <th className="text-left p-3 font-semibold">Rating</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-3 font-medium">1. Quality of Content</td>
                                    <td className="p-3">60%</td>
                                    <td className="p-3"></td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-muted-foreground">Grammar</td>
                                    <td className="p-3"></td>
                                    <td className="p-3"></td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-muted-foreground">Organization</td>
                                    <td className="p-3"></td>
                                    <td className="p-3"></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">2. Quality of Format</td>
                                    <td className="p-3">40%</td>
                                    <td className="p-3"></td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-muted-foreground">Spacing</td>
                                    <td className="p-3"></td>
                                    <td className="p-3"></td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-muted-foreground">Margins</td>
                                    <td className="p-3"></td>
                                    <td className="p-3"></td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-muted-foreground">Heading</td>
                                    <td className="p-3"></td>
                                    <td className="p-3"></td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-muted-foreground">Typeset & Paging</td>
                                    <td className="p-3"></td>
                                    <td className="p-3"></td>
                                </tr>
                                <tr>
                                    <td className="p-3 ">Tables and Pictures</td>
                                    <td className="p-3"></td>
                                    <td className="p-3"></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold">General Average</td>
                                    <td className="p-3">100%</td>
                                    <td className="p-3"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-[10px] italic text-muted-foreground/50">
                        Note: The rating shall be the average of sum total of rates.
                    </p>
                </div>
            </div>
        </TerminalWindow >
    );
}