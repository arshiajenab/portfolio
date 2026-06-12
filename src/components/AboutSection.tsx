"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations, stats } from "@/lib/translations";
import RevealOnScroll from "./RevealOnScroll";
import StatCounter from "./StatCounter";

function DropCapParagraph({ html }: { html: string }) {
    const { lang } = useLanguage();

    if (lang === "fa") {
        // For Persian: wrap the first WORD as the dropcap
        // This preserves connected letters
        const tempDiv =
            typeof document !== "undefined"
                ? document.createElement("div")
                : null;

        let firstWord = "";
        let rest = html;

        // Simple extraction: grab text before first space
        const plainText = html.replace(/<[^>]*>/g, "");
        const spaceIndex = plainText.indexOf(" ");

        if (spaceIndex > 0) {
            firstWord = plainText.substring(0, spaceIndex);
            // Remove the first word from the html string
            const wordIndex = html.indexOf(firstWord);
            rest = html.substring(wordIndex + firstWord.length);
        }

        return (
            <p className="about-text about-text-dropcap">
                {firstWord && <span className="dropcap-word">{firstWord}</span>}
                <span dangerouslySetInnerHTML={{ __html: rest }} />
            </p>
        );
    }

    // For English: wrap just the first letter
    const firstChar = html.charAt(0);
    const remaining = html.substring(1);

    return (
        <p className="about-text about-text-dropcap">
            <span className="dropcap-letter">{firstChar}</span>
            <span dangerouslySetInnerHTML={{ __html: remaining }} />
        </p>
    );
}

export default function AboutSection() {
    const { lang } = useLanguage();
    const a = translations.about;

    return (
        <section
            className="about-section bg-cross has-bg-image bg-image-justice"
            id="about"
        >
            <div className="section">
                <RevealOnScroll>
                    <div className="section-header">
                        <span className="section-number">
                            {a.sectionNumber}
                        </span>
                        <div className="section-rule" />
                        <span className="section-title">
                            {a.sectionTitle[lang]}
                        </span>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <div
                        className="big-title"
                        dangerouslySetInnerHTML={{ __html: a.bigTitle[lang] }}
                    />
                </RevealOnScroll>

                <div className="about-layout">
                    <RevealOnScroll direction="left" className="about-col">
                        <DropCapParagraph html={a.para1[lang]} />
                        <p
                            className="about-text"
                            dangerouslySetInnerHTML={{ __html: a.para2[lang] }}
                        />
                        <div className="about-pullquote">
                            {a.pullquote[lang]}
                        </div>
                    </RevealOnScroll>

                    <div className="about-vertical-rule" />

                    <RevealOnScroll direction="right" className="about-col">
                        <p
                            className="about-text"
                            dangerouslySetInnerHTML={{ __html: a.para3[lang] }}
                        />
                        <p
                            className="about-text"
                            dangerouslySetInnerHTML={{ __html: a.para4[lang] }}
                        />
                        <div className="about-stats">
                            {stats.map((stat, i) => (
                                <RevealOnScroll key={i} delay={i * 100}>
                                    <div className="stat-item">
                                        <StatCounter value={stat.number} />
                                        <div className="stat-label">
                                            {stat.label[lang]}
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
