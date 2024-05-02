import { ReactNode } from "react";
import { SkillEnum, TagEnum } from "../core";

export type ProjectNavigation = {
    type: 'component';
    component: ReactNode;
} | {
    type: 'external';
    href: string;
    height?: number;
}

export interface Project{
    id: string;
    name: string;
    navigation: ProjectNavigation;
    description: ReactNode;
    
    responsive: boolean;
    imgSrc?: string;

    tags: TagEnum[];
    skills: SkillEnum[];
}
