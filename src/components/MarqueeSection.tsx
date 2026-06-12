"use client";

interface MarqueeItem {
    text: string;
    italic: boolean;
}

interface MarqueeSectionProps {
    items: MarqueeItem[];
    reverse?: boolean;
}

export default function MarqueeSection({
    items,
    reverse = false,
}: MarqueeSectionProps) {
    const doubled = [...items, ...items];

    return (
        <div className="marquee-section">
            <div
                className="marquee-track"
                style={reverse ? { animationDirection: "reverse" } : undefined}
            >
                {doubled.map((item, i) => (
                    <span className="marquee-item" key={i}>
                        {item.italic ? <em>{item.text}</em> : item.text}
                        <span className="dot" />
                    </span>
                ))}
            </div>
        </div>
    );
}
