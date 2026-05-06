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
    const [pathWithoutHash, pathHash] = currentPath.split("#")
    const [urlWithoutHash, urlHash] = itemUrl.split("#")
    const pathMatches = pathWithoutHash === urlWithoutHash || pathWithoutHash.startsWith(urlWithoutHash + "/")
    if (!pathMatches) return false
    if (urlHash) return pathHash === urlHash
    return true
}

export function NavMain({ groups }: { groups: NavGroup[] }) {
    const pathname = usePathname()
    const [openMap, setOpenMap] = React.useState<Record<string, boolean>>(() => {
        try {
            const saved = localStorage.getItem("sidebar-open-map")
            return saved ? JSON.parse(saved) : {}
        } catch {
            return {}
        }
    })

    const computedOpenMap = React.useMemo(() => {
        const result = { ...openMap }
        groups.forEach((group, gi) => {
            group.items.forEach((item, ii) => {
                if (item.items && result[`${gi}-${ii}`] === undefined) {
                    const hasActiveChild = item.items.some(sub => isActiveUrl(pathname, sub.url))
                    if (hasActiveChild) {
                        result[`${gi}-${ii}`] = true
                    }
                }
            })
        })
        return result
    }, [openMap, pathname, groups])

    React.useEffect(() => {
        localStorage.setItem("sidebar-open-map", JSON.stringify(computedOpenMap))
    }, [computedOpenMap])

    const toggle = (key: string) => {
        setOpenMap(prev => ({ ...prev, [key]: !prev[key] }))
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
                                const isOpen = !!computedOpenMap[key]

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