"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations, timeline } from "@/lib/translations";
import RevealOnScroll from "./RevealOnScroll";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function TimelineItem({
    item,
    index,
}: {
    item: (typeof timeline)[0];
    index: number;
}) {
    const { lang } = useLanguage();
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <div
            ref={ref}
            className={`timeline-item ${isVisible ? "visible" : ""}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ease ${index * 200}ms, transform 0.8s ease ${index * 200}ms`,
            }}
        >
            <div className="timeline-date">{item.date[lang]}</div>
            <div className="timeline-title">{item.title[lang]}</div>
            <div className="timeline-company">{item.company[lang]}</div>
            <div className="timeline-text">{item.text[lang]}</div>
        </div>
    );
}

export default function ExperienceSection() {
    const { lang } = useLanguage();
    const e = translations.experience;

    return (
        <section
            className="experience-section bg-grid has-bg-image bg-image-rome-soft"
            id="experience"
        >
            <div className="section">
                <RevealOnScroll>
                    <div className="section-header">
                        <span className="section-number">
                            {e.sectionNumber}
                        </span>
                        <div className="section-rule" />
                        <span className="section-title">
                            {e.sectionTitle[lang]}
                        </span>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <div
                        className="big-title"
                        dangerouslySetInnerHTML={{ __html: e.bigTitle[lang] }}
                    />
                </RevealOnScroll>

                <div className="timeline">
                    {timeline.map((item, i) => (
                        <TimelineItem key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
