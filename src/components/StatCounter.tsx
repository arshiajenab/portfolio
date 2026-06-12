"use client";

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface StatCounterProps {
    value: string;
}

export default function StatCounter({ value }: StatCounterProps) {
    const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
    const [displayValue, setDisplayValue] = useState(value);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isVisible || hasAnimated.current) return;

        const num = parseInt(value);
        if (isNaN(num) || num <= 0 || num >= 100) {
            hasAnimated.current = true;
            return;
        }

        hasAnimated.current = true;
        let current = 0;
        const increment = num / 30;
        const suffix = value.includes("+")
            ? "+"
            : value.includes("%")
              ? "%"
              : "";

        const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
                setDisplayValue(value);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(current) + suffix);
            }
        }, 40);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <div className="stat-number" ref={ref}>
            {displayValue}
        </div>
    );
}
