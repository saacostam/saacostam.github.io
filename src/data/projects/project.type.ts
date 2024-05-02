import { SkillEnum, TagEnum } from "../core";

export interface Navigation{
    type: 'external' | 'relative';
    href: string;
}

export interface Project{
    id: string;
    name: string;
    navigation: Navigation;

    tags: TagEnum[];
    skills: SkillEnum[];
}
