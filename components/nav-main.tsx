"use client"

import { useState } from "react"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react"

type SubItem = {
    title: string
    url: string
}

type NavItem = {
    title: string
    url: string
    icon?: React.ElementType
    items?: SubItem[]
}

type NavGroup = {
    label: string
    items: NavItem[]
}

export function NavMain({ groups }: { groups: NavGroup[] }) {
    // Track open state per group per item: key = `${groupIdx}-${itemIdx}`
    const [openMap, setOpenMap] = useState<Record<string, boolean>>({})

    const toggle = (key: string) =>
        setOpenMap(prev => ({ ...prev, [key]: !prev[key] }))

    return (
        <>
            {groups.map((group, gi) => (
                <SidebarGroup key={group.label}>
                    <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {group.items.map((item, ii) => {
                                const key = `${gi}-${ii}`
                                const isOpen = !!openMap[key]
                                const hasChildren = !!item.items?.length

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            tooltip={item.title}
                                            onClick={() => {
                                                if (hasChildren) toggle(key)
                                            }}
                                            asChild={!hasChildren}
                                        >
                                            {hasChildren ? (
                                                <>
                                                    {item.icon && <item.icon />}
                                                    <span>{item.title}</span>
                                                    {isOpen ? (
                                                        <ChevronDownIcon className="ml-auto h-4 w-4" />
                                                    ) : (
                                                        <ChevronRightIcon className="ml-auto h-4 w-4" />
                                                    )}
                                                </>
                                            ) : (
                                                <a href={item.url}>
                                                    {item.icon && <item.icon />}
                                                    <span>{item.title}</span>
                                                </a>
                                            )}
                                        </SidebarMenuButton>

                                        {hasChildren && isOpen && (
                                            <SidebarMenuSub>
                                                {item.items!.map(sub => (
                                                    <SidebarMenuSubItem key={sub.title}>
                                                        <SidebarMenuSubButton asChild>
                                                            <a href={sub.url}>
                                                                <span>{sub.title}</span>
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        )}
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            ))}
        </>
    )
}