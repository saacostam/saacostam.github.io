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
    },
    {
        id: 'tunecode',
        name: 'TuneCode: Music Programming Language',
        navigation: {
            type: 'external',
            href: 'https://saacostam.github.io/music-dsl/#/',
            height: 720,
        },
        description: (<>
            <p>TuneCode is a <b className='text-primary'>web programming language</b> for music creation, oriented towards people with experience in the use of software dedicated to music production (DAW: Digital Audio Workstations).</p>
            <p>Using analogous concepts to DAW's, TuneCode allows the playback of melodies through basic oscillators, the scheduling of samples and the application of effects.</p>
        </>),
        responsive: false,
        tags: [
            TagEnum.audio,
            TagEnum.graphics,
            TagEnum.fundamentals
        ],
        skills: [
            SkillEnum.antlr,
            SkillEnum.canvasApi,
            SkillEnum.webaudio,
        ],
    }
];
