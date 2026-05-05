"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
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

function isActiveUrl(currentPath: string, itemUrl: string): boolean {
    const pathWithoutHash = currentPath.split("#")[0]
    const urlWithoutHash = itemUrl.split("#")[0]
    return pathWithoutHash === urlWithoutHash || pathWithoutHash.startsWith(urlWithoutHash + "/")
}

export function NavMain({ groups }: { groups: NavGroup[] }) {
    const pathname = usePathname()
    const [openMap, setOpenMap] = React.useState<Record<string, boolean>>({})
    const initializedRef = React.useRef(false)

    React.useEffect(() => {
        if (!initializedRef.current) {
            const saved = localStorage.getItem("sidebar-open-map")
            if (saved) {
                try {
                    setOpenMap(JSON.parse(saved))
                } catch {}
            }
            initializedRef.current = true
        }
    }, [])

    React.useEffect(() => {
        if (!initializedRef.current) return

        let hasChanges = false
        const newState: Record<string, boolean> = {}

        groups.forEach((group, gi) => {
            group.items.forEach((item, ii) => {
                if (item.items) {
                    const key = `${gi}-${ii}`
                    if (openMap[key] === undefined) {
                        const hasActiveChild = item.items.some(sub => isActiveUrl(pathname, sub.url))
                        if (hasActiveChild) {
                            newState[key] = true
                            hasChanges = true
                        }
                    }
                }
            })
        })

        if (hasChanges) {
            setOpenMap(prev => {
                const next = { ...prev, ...newState }
                localStorage.setItem("sidebar-open-map", JSON.stringify(next))
                return next
            })
        }
    }, [pathname, openMap])

    const toggle = (key: string) => {
        setOpenMap(prev => {
            const next = { ...prev, [key]: !prev[key] }
            localStorage.setItem("sidebar-open-map", JSON.stringify(next))
            return next
        })
    }

    return (
        <>
            {groups.map((group, gi) => (
                <SidebarGroup key={group.label}>
                    <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {group.items.map((item, ii) => {
                                const key = `${gi}-${ii}`
                                const hasChildren = !!item.items?.length
                                const isActive = isActiveUrl(pathname, item.url)
                                const isOpen = !!openMap[key]

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            tooltip={item.title}
                                            onClick={() => {
                                                if (hasChildren) toggle(key)
                                            }}
                                            asChild={!hasChildren}
                                            isActive={isActive}
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
                                                {item.items!.map(sub => {
                                                    const isSubActive = isActiveUrl(pathname, sub.url)
                                                    return (
                                                        <SidebarMenuSubItem key={sub.title}>
                                                            <SidebarMenuSubButton asChild isActive={isSubActive}>
                                                                <a href={sub.url}>
                                                                    <span>{sub.title}</span>
                                                                </a>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    )
                                                })}
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