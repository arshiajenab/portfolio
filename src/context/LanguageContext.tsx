"use client";

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
} from "react";
import { Language } from "@/types";

interface LanguageContextType {
    lang: Language;
    toggleLang: () => void;
    t: (en: string, fa: string) => string;
    isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>("en");

    const toggleLang = useCallback(() => {
        setLang((prev) => (prev === "en" ? "fa" : "en"));
    }, []);

    const t = useCallback(
        (en: string, fa: string) => (lang === "en" ? en : fa),
        [lang],
    );

    const isRtl = lang === "fa";

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute("dir", isRtl ? "rtl" : "ltr");
        html.setAttribute("lang", lang);
        document.title =
            lang === "en"
                ? "Arshia Jenab — Full Stack Developer"
                : "عرشیا جناب — دولوپر فول‌استک";
    }, [lang, isRtl]);

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t, isRtl }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context)
        throw new Error("useLanguage must be used within LanguageProvider");
    return context;
}
