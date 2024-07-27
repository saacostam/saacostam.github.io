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
}
