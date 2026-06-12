"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
    const [scrollY, setScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress =
                docHeight > 0 ? (currentScroll / docHeight) * 100 : 0;

            setScrollY(currentScroll);
            setScrollProgress(progress);

            if (currentScroll > lastScroll && currentScroll > 300) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { scrollDirection, scrollY, scrollProgress };
}
