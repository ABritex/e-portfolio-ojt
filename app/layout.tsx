import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { FloatingSidebarTrigger } from "@/components/floating-sidebar-trigger";
import { Providers } from "@/components/providers";
import Footer from "@/components/footer"
import { AOSInit } from '@/components/AosInit';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "OJT PORTFOLIO",
    description: "Portfolio of Nicholas Abeleda",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable)} suppressHydrationWarning>
            <body className="min-h-full flex flex-col">
                <Providers>
                    <SidebarProvider
                        style={
                            {
                                "--sidebar-width": "calc(var(--spacing) * 72)",
                                "--header-height": "calc(var(--spacing) * 12)",
                            } as React.CSSProperties
                        }
                    >
                        <AppSidebar variant="inset" />
                        <SidebarInset>
                            <FloatingSidebarTrigger />
                            <AOSInit />
                            {children}
                            <Footer />
                        </SidebarInset>
                    </SidebarProvider>
                </Providers>
            </body>
        </html>
    );
}
