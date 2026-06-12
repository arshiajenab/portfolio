"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, skills } from "@/lib/translations";
import RevealOnScroll from "./RevealOnScroll";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function SkillsSection() {
    const { lang } = useLanguage();
    const s = translations.skills;
    const { ref: gridRef, isVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const cellRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (isVisible) {
            cellRefs.current.forEach((cell, i) => {
                if (cell) {
                    setTimeout(() => {
                        cell.style.opacity = "1";
                        cell.style.transform = "translateY(0)";
                    }, i * 80);
                }
            });
        }
    }, [isVisible]);

    return (
        <section
            className="skills-section bg-diagonal has-bg-image bg-image-faded"
            id="skills"
        >
            <div className="section">
                <RevealOnScroll>
                    <div className="section-header">
                        <span className="section-number">
                            {s.sectionNumber}
                        </span>
                        <div className="section-rule" />
                        <span className="section-title">
                            {s.sectionTitle[lang]}
                        </span>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <div
                        className="big-title"
                        dangerouslySetInnerHTML={{ __html: s.bigTitle[lang] }}
                    />
                </RevealOnScroll>

                <div className="skills-grid" ref={gridRef}>
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="skill-cell"
                            ref={(el) => {
                                cellRefs.current[i] = el;
                            }}
                            style={{
                                opacity: 0,
                                transform: "translateY(20px)",
                                transition:
                                    "opacity 0.5s ease, transform 0.5s ease",
                            }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-name">
                                {skill.name === "And More"
                                    ? lang === "fa"
                                        ? "و بیشتر"
                                        : skill.name
                                    : skill.name}
                            </div>
                            <div className="skill-sub">{skill.sub[lang]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
