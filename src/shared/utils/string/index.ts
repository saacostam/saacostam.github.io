export const StringUtils = {
	/**
	 * Returns a new array with duplicate strings removed.
	 */
	dedupe<T extends string>(arr: readonly T[]): T[] {
		return [...new Set(arr)];
	},
};
