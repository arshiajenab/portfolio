"use client";

import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { marqueeItems1, marqueeItems2 } from "@/lib/translations";

export default function Home() {
    const [loaded, setLoaded] = useState(false);

    const handleLoaderComplete = useCallback(() => {
        setLoaded(true);
    }, []);

    return (
        <>
            <Loader onComplete={handleLoaderComplete} />
            <CustomCursor />
            <ScrollProgress />
            <Masthead />

            <main>
                <Hero loaded={loaded} />
                <MarqueeSection items={marqueeItems1} />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <MarqueeSection items={marqueeItems2} reverse />
                <ExperienceSection />
                <ContactSection />
            </main>

            <Footer />
        </>
    );
}
