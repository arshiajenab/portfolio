"use client";

import { Language, Translation } from "@/types";

interface MobileNavProps {
    isOpen: boolean;
    navItems: { id: string; label: Translation }[];
    onNavClick: (id: string) => void;
    onToggleLang: () => void;
    lang: Language;
}

export default function MobileNav({
    isOpen,
    navItems,
    onNavClick,
    onToggleLang,
    lang,
}: MobileNavProps) {
    return (
        <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        onNavClick(item.id);
                    }}
                >
                    {item.label[lang]}
                </a>
            ))}
            <button className="lang-btn" onClick={onToggleLang}>
                {lang === "en" ? "فارسی" : "English"}
            </button>
        </nav>
    );
}
