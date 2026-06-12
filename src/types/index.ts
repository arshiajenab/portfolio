export type Language = "en" | "fa";

export interface Translation {
    en: string;
    fa: string;
}

export interface ProjectData {
    number: string;
    category: Translation;
    title: Translation;
    description: Translation;
    tags: string[];
}

export interface TimelineData {
    date: Translation;
    title: Translation;
    company: Translation;
    text: Translation;
}

export interface SkillData {
    icon: string;
    name: string;
    sub: Translation;
}

export interface StatData {
    number: string;
    label: Translation;
}
