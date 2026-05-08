import {
	type IProject,
	IProjectCategory,
} from "@/features/project/core/domain";

export const _PROJECTS: Omit<IProject, "rating">[] = [
	{
		id: "home-resource-manager",
		name: "Home Resource Manager",
		category: [IProjectCategory.SoftwareEngineering],
		description:
			"🏡 A home organization tool that centralizes tasks, notes, inventory, and categories into a single clean interface. Built with a vertically-sliced, scalable architecture and powered by React Query, the project showcases thoughtful UX, reusable components, and full CRUD workflows across the app. While still evolving, it already provides a calm, structured way to manage everyday home life, with future updates planned for smarter automation, richer insights, and expanded resource-tracking features.",
		image: "/project/home-resource-manager.png",
		url: "https://saacostam.github.io/home-resource-manager/",
		iframe: {
			isResponsive: true,
			canBeUsedInMobile: true,
		},
		repoUrl: "https://github.com/saacostam/home-resource-manager",
	},
	{
		id: "sonarah",
		name: "Sonarah",
		category: [
			IProjectCategory.SoftwareEngineering,
			IProjectCategory.MusicSoftware,
		],
		description:
			"Sonarah is a Spotify-powered playlist matching tool for people who care about flow, mood, and intent — not just collections of tracks. Instead of generating playlists automatically, Sonarah helps you curate by comparison: you take a playlist you trust and match it track-by-track with new music that feels right in the same position. ",
		image: "/project/sonarah.jpeg",
		url: "https://saacostam.github.io/sonarah/",
		iframe: {
			isResponsive: true,
			canBeUsedInMobile: true,
		},
		repoUrl: "https://github.com/saacostam/sonarah",
	},
	{
		id: "chord-visualizer",
		name: "Chord Visualizer",
		category: [IProjectCategory.MusicSoftware],
		description:
			"Chord Visualizer is a web app designed to help musicians and music enthusiasts learn chords through an interactive and engaging experience. The app features a real-time chord visualizer that syncs seamlessly with audio sources like YouTube videos, providing a dynamic way to follow along with music. Users can see chords displayed as they play, enhancing their learning experience by combining visual cues with auditory input. Whether you're practicing a song or learning new chords, Chord Visualizer makes the process intuitive and fun.",
		image: "/project/chord-visualizer.png",
		url: "https://saacostam.github.io/fuzzy-noteable/",
		iframe: {
			isResponsive: true,
		},
		repoUrl: "https://github.com/saacostam/fuzzy-noteable",
	},
	{
		id: "tune-code",
		name: "TuneCode: Musical Programming Language",
		category: [IProjectCategory.MusicSoftware],
		description:
			"TuneCode is a web-based programming language tailored for music creation, designed for users familiar with Digital Audio Workstations (DAWs). By using familiar DAW-like concepts, TuneCode enables users to create and manipulate music directly through code. It allows the playback of melodies using basic oscillators, the scheduling of audio samples, and the application of effects to craft rich soundscapes. TuneCode bridges the gap between music production and coding, offering a new, flexible way to explore musical creativity.",
		image: "/project/tune-code.png",
		url: "https://saacostam.github.io/music-dsl",
		iframe: {
			isResponsive: false,
		},
		repoUrl: "https://github.com/saacostam/music-dsl",
	},
	{
		id: "lalu",
		name: "Lalu: Spotify Clone - FE App",
		category: [
			IProjectCategory.MusicSoftware,
			IProjectCategory.SoftwareEngineering,
		],
		description:
			"Lalu is a frontend application inspired by Spotify, designed to allow users to stream music, explore artist profiles, and enjoy curated playlists. Originally developed as a class project, the app was built to interface with a complex backend powered by distributed microservices using various programming languages and components. In its current state, the frontend relies on mock data to simulate the original functionality, providing an engaging music streaming experience without the need for a full backend infrastructure.",
		image: "/project/lalu.png",
		url: "https://saacostam.github.io/lalu/",
		iframe: {
			isResponsive: true,
		},
		repoUrl: "https://github.com/saacostam/lalu",
	},
	{
		id: "3d-tower-defense",
		name: "3D Tower Defense",
		category: [IProjectCategory.Games],
		description:
			"🛡️ A strategy game where players defend against waves of enemies by strategically placing towers on a dynamic 3D map. Built with a classic game loop architecture, the game uses Three.js for seamless 3D WebGL rendering. While still a work in progress, it showcases complex game logic, a variety of enemy types, and advanced rendering techniques. Future updates will introduce level-based gameplay for increasingly difficult challenges and resource management mechanics to add strategic depth.",
		image: "/project/3d-tower-defense.png",
		url: "https://saacostam.github.io/3d-tower-defense/",
		iframe: {
			isResponsive: false,
			canBeUsedInMobile: false,
		},
		repoUrl: "https://github.com/saacostam/3d-tower-defense",
	},
	{
		id: "crossy-road",
		name: "Crossy Road - Game Clone",
		category: [IProjectCategory.Games],
		description:
			"This is a 3D recreation of the popular game Crossy Road, developed using BabylonJs as the game engine. The project's architecture and class structure closely follow the ExcaliburJs framework, while leveraging BabylonJs's 3D primitives to bring the game world to life. This project showcases the implementation of core gameplay mechanics in a 3D environment, providing a modern twist on a familiar classic.",
		image: "/project/crossy-road.png",
		url: "https://saacostam.github.io/3d-crossy-road/",
		iframe: {
			isResponsive: false,
			canBeUsedInMobile: false,
			width: 1000,
			height: 500,
		},
		repoUrl: "https://github.com/saacostam/3d-crossy-road/",
	},
	{
		id: "3d-music-visualizer",
		name: "3D Music Visualizer",
		category: [IProjectCategory.MusicSoftware],
		description:
			"3D Music Visualizer is a web application that generates attractive 3D visualizations of audio files, using the AnalyserNode from the JavaScript Audio API combined with p5.js and WEBGL for rendering. Users can upload their own audio tracks, customize various visual parameters, and select from different visualization modes to create a personalized experience. This project provides an engaging and dynamic way to explore the connection between sound and visuals.",
		image: "/project/3d-music-visualizer.png",
		url: "https://saacostam.github.io/3d-music-visualizer/",
		iframe: {
			isResponsive: false,
			canBeUsedInMobile: false,
		},
		repoUrl: "https://github.com/saacostam/3d-music-visualizer",
	},
	{
		id: "bio-rastro",
		name: "BioRastro - Game",
		category: [IProjectCategory.Games],
		description:
			"BioRastro is a Pokémon-inspired game where players explore the Chingaza páramo, discovering its unique fauna. The game's goal is to educate players about the rich biodiversity of this Colombian ecosystem and Colombia 🇨🇴 as a whole. Built using Excalibur.js, BioRastro combines adventure and learning, offering an engaging way to raise awareness about environmental conservation.",
		image: "/project/bio-rastro.png",
		url: "https://saacostam.github.io/bio-rastro/",
		iframe: {
			isResponsive: false,
			canBeUsedInMobile: false,
			width: 1000,
			height: 500,
		},
		repoUrl: "https://github.com/saacostam/bio-rastro",
	},
	{
		id: "piano-roll",
		name: "Piano Roll",
		category: [IProjectCategory.MusicSoftware],
		description:
			"Piano Roll is a functional web-based tool for music prototyping, designed to resemble the piano rolls found in music production software (DAWs). It allows users to visually compose and edit melodies by placing notes on a grid, providing an intuitive interface for creating music in a browser environment. This tool is ideal for quick music sketching and experimentation.",
		image: "/project/piano-roll.png",
		url: "https://saacostam.github.io/piano-roll/",
		iframe: {
			isResponsive: false,
			canBeUsedInMobile: false,
		},
		repoUrl: "https://github.com/saacostam/piano-roll",
	},
	{
		id: "fake-store",
		name: "Fake Store API - FE App",
		category: [IProjectCategory.SoftwareEngineering],
		description:
			"Fake Store API - FE App is a front-end application that uses mock data from the fake-store-api to simulate an e-commerce website. Developed as a personal project, it focuses on applying and deepening knowledge of Vue, Axios, and Vuex.",
		image: "/project/fake-store.png",
		url: "https://saacostam.github.io/fake-store",
		iframe: {
			isResponsive: true,
		},
		repoUrl: "https://github.com/saacostam/fake-store",
	},
	{
		id: "trivia",
		name: "Trivia API - FE App",
		category: [IProjectCategory.SoftwareEngineering],
		description:
			"This is a web application that utilizes the public trivia API to fetch trivia questions and track user performance. Built with React, Vite, and React Query, the app provides an interactive trivia experience, allowing users to test their knowledge while monitoring their progress and stats.",
		image: "/project/trivia.png",
		url: "https://saacostam.github.io/trivia/",
		iframe: {
			isResponsive: true,
			height: 850,
		},
		repoUrl: "https://github.com/saacostam/trivia",
	},
	{
		id: "slippery-slope",
		name: "Slippery Slope",
		category: [IProjectCategory.Games],
		description:
			"Slippery Slope is a platform game developed using the HTML Canvas element. The game's unique challenge comes from its slippery mechanics, a result of experimenting with friction physics during development. Players navigate through various levels, dealing with the game's intentionally slippery surfaces, which add a distinctive twist to the platforming experience.",
		image: "/project/slippery-slope.png",
		url: "https://saacostam.github.io/slippery-slope/",
		iframe: {
			isResponsive: true,
			canBeUsedInMobile: false,
			height: 435,
			width: 830,
		},
		repoUrl: "https://github.com/saacostam/slippery-slope",
	},
	{
		id: "music-visualizer",
		name: "2D Music Visualizer",
		category: [IProjectCategory.MusicSoftware],
		description:
			"2D Music Visualizer is a web application that leverages the AnalyserNode from the JavaScript Audio API to produce a 3-band frequency-based visualization. Users can customize parameters and choose from a selection of preloaded songs to visualize their music. This project was developed to explore the Canvas API, providing a hands-on approach to creating dynamic audio visualizations.",
		image: "/project/music-visualizer.png",
		url: "https://saacostam.github.io/music-visualizer/",
		iframe: {
			isResponsive: true,
		},
		repoUrl: "https://github.com/saacostam/music-visualizer",
	},
	{
		id: "tetris",
		name: "Tetris - Game Clone",
		category: [IProjectCategory.Games],
		description:
			"Tetris - Game Clone is a Vue-based recreation of the classic Tetris game, developed with inspiration from javidx9's Tetris video tutorial 🙌. The project faithfully replicates the core gameplay mechanics and block-dropping challenges of the original, offering an engaging experience.",
		image: "/project/tetris.png",
		url: "https://saacostam.github.io/tetris-vue/",
		iframe: {
			isResponsive: false,
			canBeUsedInMobile: false,
			height: 550,
			width: 1000,
		},
		repoUrl: "https://github.com/saacostam/tetris-vue",
	},
	{
		id: "sudoku",
		name: "Sudoku",
		category: [IProjectCategory.Games],
		description:
			"Sudoku is a traditional sudoku game built using the HTML Canvas element. It features random level generation, a pencil tool for notes, cell highlighting, answer validation, and a timer. This project provides a comprehensive sudoku experience with interactive and dynamic gameplay elements.",
		image: "/project/sudoku.png",
		url: "https://saacostam.github.io/static-websites/sudoku/",
		iframe: {
			isResponsive: true,
			canBeUsedInMobile: false,
		},
		repoUrl: "https://github.com/saacostam/static-websites/",
	},
	{
		id: "signal-grid",
		name: "Signal Grid - Game",
		category: [IProjectCategory.Games],
		description:
			"Signal Grid is a puzzle game developed in vanilla TypeScript, inspired by traditional pipe puzzles. The objective is to connect all the pipes in the grid to the source, ensuring a continuous flow throughout the network. Players must strategically arrange the pipes to complete the circuit and solve each level's challenge, emphasizing logical thinking and spatial reasoning.",
		image: "/project/signal-grid.png",
		url: "https://saacostam.github.io/static-websites/signal-grid/",
		iframe: {
			isResponsive: false,
			canBeUsedInMobile: false,
		},
		repoUrl: "https://github.com/saacostam/signal-grid",
	},
];

export const PROJECTS: IProject[] = _PROJECTS.map((p, index, arr) => {
	const n = arr.length;
	const percentage = n - index - index;

	const rating = 5 * percentage;

	return { ...p, rating };
});
