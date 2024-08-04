import { ReactNode } from "react";
import { ProjectCategory } from "./project.type";
import { CodeIcon, MusicalNoteIcon, PuzzleIcon } from "../../icons";

export const PROJECT_CATEGORIES = [
  ProjectCategory.SoftwareEngineering,
  ProjectCategory.Games,
  ProjectCategory.MusicSoftware,
];

export const mapCategoryToLabel = new Map([
  [ProjectCategory.SoftwareEngineering, "Software Engineering"],
  [ProjectCategory.Games, "Game Development"],
  [ProjectCategory.MusicSoftware, "Music"],
]);

export const mapCategoryToIcon = new Map<ProjectCategory, ReactNode>([
  [ProjectCategory.SoftwareEngineering, <CodeIcon />],
  [ProjectCategory.MusicSoftware, <MusicalNoteIcon />],
  [ProjectCategory.Games, <PuzzleIcon />],
]);
