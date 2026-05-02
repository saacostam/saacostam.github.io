import type { IProjectCategory } from "@/features/project/core/domain";

/**
 * Represents all valid application route identifiers.
 *
 * This enum acts as the single source of truth for route names,
 * decoupling navigation logic from hardcoded path strings.
 */
export enum RouteName {
	HOME = "HOME",
	PROJECTS = "PROJECTS",
	PROJECT_BY_ID = "PROJECT_BY_ID",
}

/**
 * Action used to generate a route path.
 *
 * This is modeled as a discriminated union (expandable),
 * allowing each route to define its own required parameters.
 */
export type GenerateRouteAction =
	| {
			name: RouteName.HOME;
	  }
	| {
			name: RouteName.PROJECTS;
			payload?: {
				categories?: IProjectCategory[] | null;
			};
	  }
	| {
			name: RouteName.PROJECT_BY_ID;
			payload: {
				id: string;
			};
	  };

/**
 * Generates a URL path from a route action.
 *
 * This function centralizes route construction logic,
 * ensuring consistency and type safety across the app.
 *
 * @param action - Route generation input describing the target route
 * @returns The corresponding URL path as a string
 *
 * @example
 * ```ts
 * genRoute({ name: RouteName.HOME }); // "/app"
 * ```
 */
export function genRoute(action: GenerateRouteAction): string {
	switch (action.name) {
		case RouteName.HOME: {
			return "/";
		}
		case RouteName.PROJECTS: {
			const params = new URLSearchParams();

			action.payload?.categories?.forEach((cat) => {
				params.append("category", cat);
			});

			return "/projects";
		}
		case RouteName.PROJECT_BY_ID: {
			return `/p/${action.payload.id}`;
		}
	}
}
