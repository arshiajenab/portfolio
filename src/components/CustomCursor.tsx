"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    useEffect(() => {
        const isTouch =
            window.matchMedia("(hover: none)").matches ||
            window.matchMedia("(max-width: 768px)").matches;
        setIsTouchDevice(isTouch);

        if (isTouch) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        let isHovering = false;
        let animFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        };

        const handleMouseLeave = () => {
            dot.style.opacity = "0";
            ring.style.opacity = "0";
        };

        const handleMouseEnter = () => {
            if (!isHovering) dot.style.opacity = "1";
            ring.style.opacity = "1";
        };

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;
            animFrameId = requestAnimationFrame(animateRing);
        };

        const handleHoverEnter = () => {
            isHovering = true;
            dot.classList.add("hovering");
            ring.classList.add("hovering");
        };

        const handleHoverLeave = () => {
            isHovering = false;
            dot.classList.remove("hovering");
            ring.classList.remove("hovering");
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);
        animFrameId = requestAnimationFrame(animateRing);

        const hoverSelectors =
            "a, button, .skill-cell, .project-item, .stat-item, .social-link, .contact-cta, .masthead-logo";
        const hoverEls = document.querySelectorAll(hoverSelectors);
        hoverEls.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverEnter);
            el.addEventListener("mouseleave", handleHoverLeave);
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            cancelAnimationFrame(animFrameId);
            hoverEls.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverEnter);
                el.removeEventListener("mouseleave", handleHoverLeave);
            });
        };
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <>
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
}
