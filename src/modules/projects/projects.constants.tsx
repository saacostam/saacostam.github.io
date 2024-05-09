import { Project } from ".";
import { SkillEnum } from "../skills";
import { TagEnum } from "../tags";

export const PROJECTS: Project[] = [
  {
    id: "3d-music-visualizer",
    name: "3D Music Visualizer",
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/3d-music-visualizer/",
      height: 750,
    },
    description: "3D Music Visualizer built using P5.js and Web Audio API",
    longDescription: (
      <>
        <p>
          3D Music Visualizer built using P5.js and Web Audio API. It uses the{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode"
            className="link link-primary"
            target="_blank"
          >
            Analyzer Node
          </a>{" "}
          to break down the music real-time frequency and time-domain
          information and display it in a 3d visualizer. It also offers multiple
          inputs to manage the visualization parameters, enabling a higher level
          of customization
        </p>
      </>
    ),
    responsive: false,
    tags: [TagEnum.audio, TagEnum.graphics],
    skills: [SkillEnum.webgl, SkillEnum.webaudio],
  },
  {
    id: "tunecode",
    name: "TuneCode: Music Programming Language",
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/fuzzy-noteable/#/",
      height: 720,
    },
    description: (
      <>
        <p>
          TuneCode is a <b className="text-primary">web programming language</b>{" "}
          for music creation, oriented towards people with experience with DAWs.
        </p>
      </>
    ),
    longDescription: (
      <>
        <p>
          TuneCode is a <b className="text-primary">web programming language</b>{" "}
          for music creation, oriented towards people with experience with DAWs.
        </p>
      </>
    ),
    responsive: false,
    tags: [TagEnum.audio, TagEnum.graphics, TagEnum.fundamentals],
    skills: [SkillEnum.antlr, SkillEnum.canvasApi, SkillEnum.webaudio],
  },
];
