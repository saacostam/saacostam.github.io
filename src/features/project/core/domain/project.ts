/**
 * Project, but with the minium data required  to identify and filter it.
 */
export interface IProject {
	/**
	 * Identifier
	 */
	id: string;
	/**
	 * Name of the project}
	 */
	name: string;
	/**
	 * A rating (from 0 to 10) given by me that represents how complex and useful a project is.
	 */
	rating: number;
	/**
	 * Description for the project
	 */
	description: string;
	/**
	 * Category of the project. Used for filtering
	 */
	category: ProjectCategory[];

	/**
	 * A small-size image (300x150) for a project.
	 *
	 * @type {?string}
	 */
	image?: string;

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
