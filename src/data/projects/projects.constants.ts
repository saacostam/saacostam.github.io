import { SkillEnum, TagEnum } from '../core';
import { Project } from ".";

export const PROJECTS: Project[] = [
    {
        id: '3d-music-visualizer',
        name: '3D Music Visualizer',
        navigation: {
            type: 'external',
            href: 'https://saacostam.github.io/3d-music-visualizer/',
            height: 720,
        },
        description: '3D Music Visualizer built using P5.js and Web Audio API',
        responsive: false,
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
