"use client";

import { cn } from "@/lib/utils";
import { Edit3 } from "lucide-react";

type DividerProps = {
    icon?: React.ReactNode;
    className?: string;
    iconClassName?: string;
    children?: React.ReactNode;
};

const DefaultIcon = () => <Edit3 size={18} />;

export function Divider({ icon, className, iconClassName = "text-accent", children }: DividerProps) {
    return (
        <div className={cn("relative flex items-center w-full", className)}>
            <div className="flex-1 border-t border-border" />
            <div className="ml-4 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center shrink-0">
                <div className={iconClassName}>
                    {children || icon || <DefaultIcon />}
                </div>
            </div>
        </div>
    );
}