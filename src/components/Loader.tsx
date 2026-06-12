"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface LoaderProps {
    onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
    const [hidden, setHidden] = useState(false);
    const { lang } = useLanguage();

    useEffect(() => {
        const timer = setTimeout(() => {
            setHidden(true);
            onComplete();
        }, 2200);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const letters = "Arshia Jenab".split("");

    return (
        <div className={`loader ${hidden ? "hidden" : ""}`}>
            <div className="loader-text">
                {letters.map((letter, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </div>
            <div className="loader-line" />
            <div className="loader-sub">{translations.loader.sub[lang]}</div>
        </div>
    );
}
