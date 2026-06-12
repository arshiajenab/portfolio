"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import RevealOnScroll from "./RevealOnScroll";

export default function ContactSection() {
    const { lang } = useLanguage();
    const c = translations.contact;

    const socials = [
        { label: "GitHub", title: "GitHub", href: "https://github.com/arshiajenab/portfolio" },
        { label: "Telegram", title: "Telegram", href: "https://t.me/Arshia_7030" },
    ];

    return (
        <section
            className="contact-section has-bg-image bg-image-justice-dark"
            id="contact"
        >
            <div className="section">
                <RevealOnScroll>
                    <div className="section-header">
                        <span
                            className="section-number"
                            style={{ color: "var(--blue-light)" }}
                        >
                            {c.sectionNumber}
                        </span>
                        <div
                            className="section-rule"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                        />
                        <span
                            className="section-title"
                            style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                            {c.sectionTitle[lang]}
                        </span>
                    </div>
                </RevealOnScroll>

                <div className="contact-grid">
                    <RevealOnScroll direction="left">
                        <h2
                            className="contact-headline"
                            dangerouslySetInnerHTML={{
                                __html: c.headline[lang],
                            }}
                        />
                        <p className="contact-text">{c.text[lang]}</p>
                        <a
                            href="https://mail.google.com/"
                            
                            className="contact-cta"
                        >
                            <span>{c.cta[lang]}</span>
                        </a>
                    </RevealOnScroll>

                    <RevealOnScroll direction="right">
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <span className="contact-info-label">
                                    {c.emailLabel[lang]}
                                </span>
                                <span className="contact-info-value">
                                    ArshiaJenab@gmail.com
                                </span>
                            </div>
                            <div className="contact-info-item">
                                <span className="contact-info-label">
                                    {c.locationLabel[lang]}
                                </span>
                                <span className="contact-info-value">
                                    {c.locationValue[lang]}
                                </span>
                            </div>
                            <div className="contact-info-item">
                                <span className="contact-info-label">
                                    {c.availabilityLabel[lang]}
                                </span>
                                <span className="contact-info-value">
                                    {c.availabilityValue[lang]}
                                </span>
                            </div>
                            <div className="contact-socials">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        className="social-link"
                                        title={s.title}
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
