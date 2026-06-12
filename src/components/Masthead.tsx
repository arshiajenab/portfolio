// src/components/Masthead.tsx
"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { translations } from "@/lib/translations";
import MobileNav from "./MobileNav";
import { Translation } from "@/types";

export default function Masthead() {
    const { lang, toggleLang } = useLanguage();
    const { scrollDirection, scrollY } = useScrollDirection();
    const scrollTo = useSmoothScroll();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isScrolled = scrollY > 100;
    const isHidden = scrollDirection === "down" && scrollY > 300;

    const navItems: { id: string; label: Translation }[] = [
        { id: "about", label: translations.nav.about },
        { id: "skills", label: translations.nav.skills },
        { id: "projects", label: translations.nav.projects },
        { id: "experience", label: translations.nav.experience },
        { id: "contact", label: translations.nav.contact },
    ];

    const handleNavClick = (id: string) => {
        scrollTo(id);
        setMobileOpen(false);
    };

    const formattedDate = (() => {
        const now = new Date();
        try {
            return now.toLocaleDateString(lang === "fa" ? "fa-IR" : "en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        } catch {
            return now.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        }
    })();

    return (
        <>
            <header
                className={`masthead ${isScrolled ? "scrolled" : ""} ${isHidden ? "hide" : ""}`}
            >
                <div className="masthead-inner">
                    <div className="masthead-top">
                        <span className="masthead-date">{formattedDate}</span>
                        <a
                            href="#hero"
                            className="masthead-logo"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollTo("hero");
                            }}
                        >
                            {translations.masthead.logo[lang]}
                        </a>
                        <span className="masthead-edition">
                            {translations.masthead.edition[lang]}
                        </span>
                    </div>
                    <nav className="masthead-nav">
                        {navItems.map((item, i) => (
                            <React.Fragment key={item.id}>
                                {i > 0 && <div className="nav-dot" />}
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.id);
                                    }}
                                >
                                    {item.label[lang]}
                                </a>
                            </React.Fragment>
                        ))}
                        <div className="nav-dot" />
                        <button className="lang-btn" onClick={toggleLang}>
                            {lang === "en" ? "فارسی" : "English"}
                        </button>
                    </nav>
                    <button
                        className={`hamburger ${mobileOpen ? "active" : ""}`}
                        aria-label="Menu"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>
            <MobileNav
                isOpen={mobileOpen}
                navItems={navItems}
                onNavClick={handleNavClick}
                onToggleLang={toggleLang}
                lang={lang}
            />
        </>
    );
}
