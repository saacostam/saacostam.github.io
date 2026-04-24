/**
 * Asserts that the current route matches the expected path.
 *
 * This abstracts away the underlying router implementation (e.g. HashRouter),
 * allowing tests to remain stable if routing strategy changes.
 */
export function expectRoute(expectedPath: string) {
	expect(window.location.pathname).toBe(expectedPath);
}
