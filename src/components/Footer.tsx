"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { translations } from "@/lib/translations";

export default function Footer() {
    const { lang } = useLanguage();
    const scrollTo = useSmoothScroll();
    const f = translations.footer;

    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="footer-text">{f.rights[lang]}</span>
                <a
                    href="#hero"
                    className="footer-back-top"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollTo("hero");
                    }}
                >
                    {f.backToTop[lang]}
                </a>
                <span className="footer-text">{f.credit[lang]}</span>
            </div>
        </footer>
    );
}
