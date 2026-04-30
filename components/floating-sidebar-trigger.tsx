import { SidebarTrigger } from "@/components/ui/sidebar"

export function FloatingSidebarTrigger() {
    return (
        <div className="sticky top-20 left-0 z-50 ">
            <div className="absolute bg-sidebar rounded-tr-3xl rounded-br-3xl">
                <SidebarTrigger className="h-14 w-14 rounded-tr-3xl rounded-br-3xl" />
            </div>
        </div>
    )
}