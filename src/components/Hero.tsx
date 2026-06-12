"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface HeroProps {
    loaded: boolean;
}

export default function Hero({ loaded }: HeroProps) {
    const { lang } = useLanguage();
    const [animated, setAnimated] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);

    const h = translations.hero;

    useEffect(() => {
        if (loaded && !animated) {
            setAnimated(true);
        }
    }, [loaded, animated]);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const headline = headlineRef.current;
            if (headline && scrolled < window.innerHeight) {
                headline.style.transform = `translateY(${scrolled * 0.15}px)`;
                headline.style.opacity = String(
                    1 - scrolled / (window.innerHeight * 0.8),
                );
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className="hero has-bg-image bg-image-rome"
            id="hero"
            ref={heroRef}
        >
            <div className="hero-container">
                <div
                    className="hero-eyebrow"
                    style={
                        animated
                            ? {
                                  transition:
                                      "opacity 0.6s ease, transform 0.6s ease",
                                  opacity: 1,
                                  transform: "translateY(0)",
                              }
                            : {}
                    }
                >
                    {h.eyebrow[lang]}
                </div>

                <h1 className="hero-headline" ref={headlineRef}>
                    <span className="line">
                        <span
                            style={
                                animated
                                    ? {
                                          transition:
                                              "transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)",
                                          transform: "translateY(0)",
                                          transitionDelay: "0ms",
                                      }
                                    : {}
                            }
                        >
                            {h.line1[lang]}
                        </span>
                    </span>
                    <span className="line">
                        <span
                            className="line-italic"
                            style={
                                animated
                                    ? {
                                          transition:
                                              "transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)",
                                          transform: "translateY(0)",
                                          transitionDelay: "150ms",
                                      }
                                    : {}
                            }
                        >
                            {h.line2[lang]}
                        </span>
                    </span>
                    <span className="line">
                        <span
                            className="line-outline"
                            style={
                                animated
                                    ? {
                                          transition:
                                              "transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)",
                                          transform: "translateY(0)",
                                          transitionDelay: "300ms",
                                      }
                                    : {}
                            }
                        >
                            {h.line3[lang]}
                        </span>
                    </span>
                </h1>

                <div
                    className="hero-divider"
                    style={
                        animated
                            ? { transition: "opacity 0.6s ease", opacity: 1 }
                            : {}
                    }
                >
                    <div className="hero-divider-line" />
                    <div className="hero-divider-diamond" />
                    <div className="hero-divider-line" />
                </div>

                <div className="hero-columns">
                    <div
                        className="hero-description"
                        dangerouslySetInnerHTML={{
                            __html: h.description[lang],
                        }}
                        style={
                            animated
                                ? {
                                      transition:
                                          "opacity 0.8s ease, transform 0.8s ease",
                                      transitionDelay: "600ms",
                                      opacity: 1,
                                      transform: "translateY(0)",
                                  }
                                : {}
                        }
                    />
                    <div
                        className="hero-meta"
                        style={
                            animated
                                ? {
                                      transition:
                                          "opacity 0.8s ease, transform 0.8s ease",
                                      transitionDelay: "800ms",
                                      opacity: 1,
                                      transform: "translateY(0)",
                                  }
                                : {}
                        }
                    >
                        <div className="hero-meta-item">
                            <span className="hero-meta-label">
                                {h.metaLabels.basedIn[lang]}
                            </span>
                            <span className="hero-meta-value">
                                {h.metaLabels.basedInValue[lang]}
                            </span>
                        </div>
                        <div className="hero-meta-item">
                            <span className="hero-meta-label">
                                {h.metaLabels.specialization[lang]}
                            </span>
                            <span className="hero-meta-value">
                                {h.metaLabels.specializationValue[lang]}
                            </span>
                        </div>
                        <div className="hero-meta-item">
                            <span className="hero-meta-label">
                                {h.metaLabels.status[lang]}
                            </span>
                            <span
                                className="hero-meta-value"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                }}
                            >
                                <span
                                    className="status-dot"
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                        borderRadius: "50%",
                                        background: "#2B9348",
                                        display: "inline-block",
                                        flexShrink: 0,
                                    }}
                                />
                                {h.metaLabels.statusValue[lang]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <span className="hero-scroll-text">{h.scroll[lang]}</span>
                <div className="hero-scroll-line" />
            </div>
        </section>
    );
}
