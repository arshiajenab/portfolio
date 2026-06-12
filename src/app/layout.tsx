// src/app/layout.tsx
import type { Metadata } from "next";
import {
    Playfair_Display,
    Inter,
    Space_Mono,
    Cormorant_Garamond,
} from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "Arshia Jenab — Full Stack Developer",
    description:
        "18 years old. Full-stack developer. I build complete web apps with Next.js — from the first component to the deployed product.",
    keywords: [
        "Full Stack Developer",
        "Next.js",
        "React",
        "TypeScript",
        "MongoDB",
        "Prisma",
        "Web Developer",
        "Arshia Jenab",
    ],
    authors: [{ name: "Arshia Jenab" }],
    openGraph: {
        title: "Arshia Jenab — Full Stack Developer",
        description:
            "I build complete web apps with Next.js — from the first component to the deployed product.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" dir="ltr">
            <head>
                {/* Vazirmatn for Persian/Arabic script — not available in next/font/google so we use a link */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                style={
                    {
                        "--font-playfair": playfair.style.fontFamily,
                        "--font-inter": inter.style.fontFamily,
                        "--font-space-mono": spaceMono.style.fontFamily,
                        "--font-cormorant": cormorant.style.fontFamily,
                    } as React.CSSProperties
                }
            >
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
