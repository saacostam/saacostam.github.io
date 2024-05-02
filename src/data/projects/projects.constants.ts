import { SkillEnum, TagEnum } from '../core';
import { Project } from ".";

export const PROJECTS: Project[] = [
    {
        id: '',
        name: '',
        navigation: {
            type: 'external',
            href: 'https://saacostam.github.io/3d-music-visualizer/',
        },
        tags: [
            TagEnum.audio,
            TagEnum.graphics,
        ],
        skills: [
            SkillEnum.webgl,
            SkillEnum.webaudio,
        ],
    }
];
