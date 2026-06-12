"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations, projects } from "@/lib/translations";
import RevealOnScroll from "./RevealOnScroll";

export default function ProjectsSection() {
    const { lang, isRtl } = useLanguage();
    const p = translations.projects;

    return (
        <section
            className="projects-section bg-blueprint has-bg-image bg-image-statues"
            id="projects"
        >
            <div className="section">
                <RevealOnScroll>
                    <div className="section-header">
                        <span className="section-number">
                            {p.sectionNumber}
                        </span>
                        <div className="section-rule" />
                        <span className="section-title">
                            {p.sectionTitle[lang]}
                        </span>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <div
                        className="big-title"
                        dangerouslySetInnerHTML={{ __html: p.bigTitle[lang] }}
                    />
                </RevealOnScroll>

                <div className="projects-list">
                    {projects.map((project, i) => (
                        <RevealOnScroll key={i} delay={i * 100}>
                            <div className="project-item">
                                <div className="project-inner">
                                    <div className="project-number">
                                        {project.number}
                                    </div>
                                    <div className="project-content">
                                        <span className="project-category">
                                            {project.category[lang]}
                                        </span>
                                        <h3 className="project-title">
                                            {project.title[lang]}
                                        </h3>
                                        <p className="project-desc">
                                            {project.description[lang]}
                                        </p>
                                        <div className="project-tags">
                                            {project.tags.map((tag, j) => (
                                                <span
                                                    className="project-tag"
                                                    key={j}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <span
                                        className="project-arrow"
                                        style={
                                            isRtl
                                                ? { transform: "scaleX(-1)" }
                                                : undefined
                                        }
                                    >
                                        →
                                    </span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
