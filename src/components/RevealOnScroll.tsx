"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ReactNode } from "react";

interface RevealOnScrollProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "left" | "right";
    delay?: number;
}

export default function RevealOnScroll({
    children,
    className = "",
    direction = "up",
    delay = 0,
}: RevealOnScrollProps) {
    const { ref, isVisible } = useIntersectionObserver();

    const baseClass =
        direction === "left"
            ? "reveal-left"
            : direction === "right"
              ? "reveal-right"
              : "reveal";

    return (
        <div
            ref={ref}
            className={`${baseClass} ${isVisible ? "visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
