"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function ScrollProgress() {
    const { scrollProgress } = useScrollDirection();

    return (
        <div
            className="scroll-progress"
            style={{ width: `${scrollProgress}%` }}
        />
    );
}
