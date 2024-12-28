"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface PulsatingButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    pulseColor?: string;
    duration?: string;
}

export default function PulsatingButton({
    className,
    children,
    pulseColor = "#2f4cdd",
    duration = "1.5s",
    ...props
}: PulsatingButtonProps) {
    return (
        <button
            className={cn(
                "relative text-center  cursor-pointer flex justify-center items-center rounded-full text-white dark:text-black bg-blue-500 dark:bg-blue-500 px-4 py-2",
                className
            )}
            style={
                {
                    "--pulse-color": pulseColor,
                    "--duration": duration,
                } as React.CSSProperties
            }
            {...props}
        >
            <div className="relative z-10">{children}</div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 size-full bg-inherit animate-pulse" />
        </button>
    );
}
