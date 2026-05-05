"use client"

import * as React from "react"
import {
    BookOpen,
    LayoutDashboard,
    Images,
    Paperclip,
    Link,
    Mail,
    Captions,
    Building2,
    Briefcase,
    ClipboardCheck,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { ThemeToggle } from "@/components/theme-toggle"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

const data = {
    navGroups: [
        {
            label: "General",
            items: [
                {
                    title: "Quick Overview",
                    url: "/",
                    icon: LayoutDashboard,
                },
                {
                    title: "Showcase",
                    url: "/showcase",
                    icon: Images,
                },
            ],
        },
        {
            label: "Portfolio",
            items: [
                {
                    title: "Title Page",
                    url: "/title-page",
                    icon: Captions,
                },
                {
                    title: "I. Introduction",
                    url: "/introduction",
                    icon: BookOpen,
                    items: [
                        { title: "A. Importance of Internship", url: "/introduction#importance" },
                        { title: "B. Objectives of Internship", url: "/introduction#objectives" },
                        { title: "C. Time and Place", url: "/introduction#time-place" },
                    ],
                },
                {
                    title: "II. Company Profile",
                    url: "/company-profile",
                    icon: Building2,
                    items: [
                        { title: "1. Nature of Agency", url: "/company-profile" },
                        { title: "2. Mission / Vision / Goal", url: "/company-profile" },
                        { title: "3. History / Background", url: "/company-profile" },
                        { title: "4. Organizational Structure", url: "/company-profile" },
                    ],
                },
                {
                    title: "III. Work Experiences",
                    url: "/work-experience",
                    icon: Briefcase,
                    items: [
                        { title: "1. Weekly Reports", url: "/work-experience" },
                        { title: "2. Daily Time Record", url: "/work-experience" },
                        { title: "3. Progress Report", url: "/work-experience" },
                        { title: "4. Analysis Report", url: "/work-experience" },
                    ],
                },
                {
                    title: "IV. Assessment",
                    url: "/assessment",
                    icon: ClipboardCheck,
                },
                {
                    title: "Appendices",
                    url: "/appendices",
                    icon: Paperclip,
                },
            ],
        },
    ],

    links: [
        {
            title: "Resume",
            url: "/resume",
            icon: <Link className="h-4 w-4" />,
        },
        {
            title: "Email Me",
            url: "/email",
            icon: <Mail className="h-4 w-4" />,
        },
        // {
        //     title: "GitHub",
        //     url: "#",
        //     icon: <Github className="h-4 w-4" />,
        // },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader className="flex flex-row items-center justify-between font-semibold text-sm px-2 py-2">
                OJT Profile
                <ThemeToggle />
            </SidebarHeader>

            <SidebarContent>
                <NavMain groups={data.navGroups} />
                <NavSecondary
                    items={data.links}
                    className="mt-auto"
                />
            </SidebarContent>

            <SidebarFooter className="text-xs text-muted-foreground px-4 py-3">
                © 2026 Nicholas Abeleda
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}



