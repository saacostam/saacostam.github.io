/**
 * Project, but with the minium data required  to identify and filter it.
 *
 * @export
 * @interface LeanProject
 * @typedef {LeanProject}
 */
export interface LeanProject {
  /**
   * Identifier
   *
   * @type {string}
   */
  id: string;

  /**
   * Name of the project
   *
   * @type {string}
   */
  name: string;

  /**
   * A rating (from 0 to 10) given by me that represents how complex and useful a project is.
   * Ultimately, it prioritizes projects the project that I want to share the most.
   *
   */
  rating: number;

  /**
   * Description for the project
   *
   */
  description: string;

  /**
   * Category of the project. Used for filtering
   *
   * @type {ProjectCategory[]}
   */
  category: ProjectCategory[];

  /**
   * A small-size image (300x150) for a project.
   *
   * @type {?string}
   */
  smImage?: string;
}

/**
 * Project
 *
 * @export
 * @interface Project
 * @typedef {Project}
 * @extends {LeanProject}
 */
export interface Project extends LeanProject {
  /**
   * A medium-size image (1200x600) for a project.
   *
   * @type {?string}
   */
  mdImage?: string;

  /**
   * Project page content
   *
   * @type {string}
   */
  content: ProjectContent[];

  /**
   * Url to project demo
   *
   * @type {string}
   */
  url: string;

  /**
   * Url to project repository
   *
   * @type {string}
   */
  repoUrl: string;

  iframe: {
    isResponsive: boolean;
    width?: number;
    height?: number;
    canBeUsedInMobile?: boolean;
  };
}

export enum ProjectCategory {
  SoftwareEngineering = "Software Engineering",
  MusicSoftware = "Music Software",
  Games = "Games",
}

export interface ProjectDto extends Project {
  similarProjects: LeanProject[];
}

// Project Content
export enum ProjectContentType {
  HEADER = "header",
  TEXT = "text",
  UNORDERED_LIST = "ul",
  ORDERED_LIST = "ol",
}

export interface HeaderContent {
  type: ProjectContentType.HEADER;
  text: string;
}

export interface TextContent {
  type: ProjectContentType.TEXT;
  text: string;
}

export interface UnorderedListContent {
  type: ProjectContentType.UNORDERED_LIST;
  listElements: string[];
}

export interface OrderedListContent {
  type: ProjectContentType.ORDERED_LIST;
  listElements: string[];
}

export type ProjectContent =
  | HeaderContent
  | TextContent
  | UnorderedListContent
  | OrderedListContent;
