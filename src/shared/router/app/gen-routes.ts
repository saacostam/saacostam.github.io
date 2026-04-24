/**
 * Represents all valid application route identifiers.
 *
 * This enum acts as the single source of truth for route names,
 * decoupling navigation logic from hardcoded path strings.
 */
export enum RouteName {
	HOME = "HOME",
	LANDING = "Landing",
}

/**
 * Action used to generate a route path.
 *
 * This is modeled as a discriminated union (expandable),
 * allowing each route to define its own required parameters.
 */
export type GenerateRouteAction =
	| {
			name: RouteName.LANDING;
	  }
	| {
			name: RouteName.HOME;
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
			return "/app";
		}
		case RouteName.LANDING: {
			return "/";
		}
	}
}
