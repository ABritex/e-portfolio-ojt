"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

function isActiveUrl(currentPath: string, itemUrl: string): boolean {
    const pathWithoutHash = currentPath.split("#")[0]
    const urlWithoutHash = itemUrl.split("#")[0]
    return pathWithoutHash === urlWithoutHash || pathWithoutHash.startsWith(urlWithoutHash + "/")
}

export function NavSecondary({
    items,
    ...props
}: {
    items: {
        title: string
        url: string
        icon: React.ReactNode
        download?: boolean
    }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
    const pathname = usePathname()

    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive = isActiveUrl(pathname, item.url)
                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild isActive={isActive}>
                                    <a href={item.url} {...(item.download && { download: "" })}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
