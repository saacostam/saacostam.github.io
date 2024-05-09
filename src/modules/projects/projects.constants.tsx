import { Project } from ".";
import { SkillEnum } from "../skills";
import { TagEnum } from "../tags";

export const PROJECTS: Project[] = [
  {
    id: "3d-music-visualizer",
    name: "3D Music Visualizer",
    rating: 4,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/3d-music-visualizer/",
      height: 750,
    },
    description: "3D Music Visualizer built using P5.js and Web Audio API",
    longDescription: (
      <>
        <p className="text-center">
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
    tags: [TagEnum.audio, TagEnum.graphics, TagEnum.web],
    skills: [SkillEnum.webgl, SkillEnum.webaudio],
  },
  {
    id: "tunecode",
    name: "TuneCode: Music Programming Language",
    rating: 6,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/music-dsl/#/",
      height: 720,
    },
    description: (
      <>
        <p>
          TuneCode is a <b className="text-primary">web programming language</b>{" "}
          for music creation, oriented towards people with experience with DAWs
        </p>
      </>
    ),
    longDescription: (
      <>
        <p className="mb-4">
          TuneCode is a <b className="text-primary">web programming language</b>{" "}
          for music creation, oriented towards people with experience with DAWs.
          Using analogous concepts to DAW's, TuneCode allows the playback of
          melodies through basic oscillators, the scheduling of samples and the
          application of effects.
        </p>
        <p>
          You can quickly check the functioning of the application by running
          the previously prepared scripts in the "Load Examples" drop-down menu
          at the top of the editor. A documentation (in spanish) is also
          available
        </p>
      </>
    ),
    responsive: false,
    tags: [TagEnum.audio, TagEnum.graphics, TagEnum.fundamentals, TagEnum.web],
    skills: [SkillEnum.antlr, SkillEnum.canvasApi, SkillEnum.webaudio],
  },
  {
    id: "fake-store",
    name: "FakeStore",
    rating: 3,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/fake-store/#/explore",
      height: 720,
    },
    description:
      "A front-end application that uses mock-data from fakestoreapi.com",
    longDescription: (
      <>
        <p className="text-center">
          A front-end application that uses mock-data from fakestoreapi.com. It
          was one of my initial projects, used to practice fetching data from a
          server
        </p>
      </>
    ),
    responsive: true,
    tags: [TagEnum.web, TagEnum.api],
    skills: [SkillEnum.vue, SkillEnum.bootstrap],
  },
  {
    id: "sudoku",
    name: "Sudoku",
    rating: 3.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/static-websites/sudoku",
      height: 720,
    },
    description: "A sudoku game built using the canvas element",
    longDescription: (
      <>
        <p className="text-center">
          A sudoku game built using the canvas element with:{" "}
          <span className="text-primary">random level generation</span>,{" "}
          <span className="text-primary">highlighting </span>,{" "}
          <span className="text-primary">answer validation </span>and{" "}
          <span className="text-primary">timer</span>
        </p>
      </>
    ),
    responsive: false,
    tags: [TagEnum.graphics, TagEnum.web, TagEnum.game],
    skills: [SkillEnum.vue, SkillEnum.bootstrap],
  },
  {
    id: "music-visualizer",
    name: "2D Music Visualizer",
    rating: 2.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/music-visualizer/",
      height: 720,
    },
    description:
      "2D Music Visualizer built using the Canvas API and the Web Audio API",
    longDescription: (
      <p className="text-center">
        2D Music Visualizer built using the Canvas API and the Web Audio API. It
        uses the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode"
          className="link link-primary"
          target="_blank"
        >
          Analyzer Node
        </a>{" "}
        to break down the music real-time frequency and time-domain information
        and display it in a 2d visualizer. It also offers multiple inputs to
        manage the visualization parameters, enabling a higher level of
        customization
      </p>
    ),
    responsive: false,
    tags: [TagEnum.graphics, TagEnum.audio, TagEnum.graphics, TagEnum.web],
    skills: [
      SkillEnum.vue,
      SkillEnum.bootstrap,
      SkillEnum.canvasApi,
      SkillEnum.webaudio,
    ],
  },
  {
    id: "lalu",
    name: "Lalu",
    rating: 4.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/lalu/#/",
      height: 720,
    },
    description:
      "Spotify clone application that allows users to listen to music, view artist profiles and listen to playlists",
    longDescription: (
      <p className="text-center">
        Spotify clone application that allows users to listen to music, view
        artist profiles and listen to playlists. It was originally created as a
        class project, which used a distributed microservices backend with
        multiple programming languages and components. Currently, the frontend
        application uses mock-data to achieve the original behavior
      </p>
    ),
    responsive: true,
    tags: [TagEnum.web, TagEnum.api, TagEnum.responsive],
    skills: [SkillEnum.vue, SkillEnum.bootstrap, SkillEnum.webaudio],
  },
  {
    id: "signal-grid",
    name: "Signal Grid",
    rating: 2.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/static-websites/signal-grid/",
      height: 760,
    },
    description: "Game similar to classis piping puzzles",
    longDescription: (
      <p className="text-center">Game similar to classis piping puzzles</p>
    ),
    responsive: false,
    tags: [TagEnum.graphics, TagEnum.web, TagEnum.fundamentals, TagEnum.game],
    skills: [SkillEnum.canvasApi, SkillEnum.dsa],
  },
  {
    id: "bio-rastro",
    name: "Bio Rastro: Biodiversity Discovery Game",
    rating: 4.2,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/bio-rastro",
      height: 575,
    },
    description:
      "Game created to bring visibility to the biodiversity of the Chingaza paramo",
    longDescription: (
      <p className="text-center">
        A game presented as the final project for the UNAL class TIC 2023-II. It
        is a pokemon-like game where the objective is to discover the fauna of
        the chingaza paramo. It's purpose is educating the player in the
        biodiversity of this paramo and Colombia 🇨🇴 in general. It was built
        using excalibur JS.
      </p>
    ),
    responsive: false,
    tags: [TagEnum.graphics, TagEnum.web, TagEnum.game, TagEnum.audio],
    skills: [SkillEnum.canvasApi, SkillEnum.webaudio, SkillEnum.excaliburJs],
  },
  {
    id: "old-portfolio",
    name: "[Archived] Portfolio",
    rating: 1,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/portfolio",
      height: 575,
    },
    description: "My old portfolio website",
    longDescription: <p className="text-center">My old portfolio website</p>,
    responsive: true,
    tags: [TagEnum.web, TagEnum.responsive],
    skills: [SkillEnum.vue],
  },
  {
    id: "sudoku-book-generator",
    name: "Sudoku Book Generator",
    rating: 1,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/sudoku-book-generator",
      height: 575,
    },
    description: "Web tool for generating a set of sudokus in book format",
    longDescription: (
      <p className="text-center">
        Web tool for generating a set of sudokus in book format. The program
        uses the{" "}
        <a
          href="https://www.npmjs.com/package/sudoku-core"
          target="_blank"
          className="link link-primary"
        >
          npm sudoku-core package
        </a>{" "}
        to manage the difficulty, generation and solution of the puzzles.
      </p>
    ),
    responsive: false,
    tags: [TagEnum.web],
    skills: [SkillEnum.tool],
  },
  {
    id: "3d-crossy-road",
    name: "Crossy Road Clone",
    rating: 4.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/3d-crossy-road",
      height: 700,
    },
    description:
      "Crossy Road clone built using BabylonJs as the 3D game engine",
    longDescription: (
      <p className="text-center">
        Crossy Road clone built using BabylonJs as the 3D game engine. The
        project and class structure mirrors the ExcaliburJs framework, but using
        the 3D primitives provided by BabylonJs.
      </p>
    ),
    responsive: false,
    tags: [TagEnum.game, TagEnum.graphics, TagEnum.web],
    skills: [SkillEnum.excaliburJs, SkillEnum.webgl, SkillEnum.canvasApi],
  },
  {
    id: "fuzzy-noteable",
    name: "Guitar Chords Viewer",
    rating: 6,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/fuzzy-noteable",
      height: 700,
    },
    description:
      "Platform for leaning chords with a real-time interactive visualizer",
    longDescription: (
      <>
        <p className="text-center mb-4">
          Platform for leaning chords with a real-time interactive visualizer
          that syncs to a audio source (Youtube video). It was built using nx
          monorepo, <span className="text-primary">NestJs</span> for the backend
          service and <span className="text-primary">React</span> for the front
          end app. Also it uses a <span className="text-primary">MongoDB</span>{" "}
          instance with <span className="text-primary">Prisma</span> for
          storage.
        </p>
        <p className="text-center">
          The demo has over 30 of the most popular songs in guitar learning
          websites. This data is statically hosted for demo purposes.
        </p>
      </>
    ),
    responsive: true,
    tags: [TagEnum.audio, TagEnum.graphics, TagEnum.game, TagEnum.web],
    skills: [
      SkillEnum.webaudio,
      SkillEnum.excaliburJs,
      SkillEnum.canvasApi,
      SkillEnum.react,
      SkillEnum.tool,
    ],
  },
];
