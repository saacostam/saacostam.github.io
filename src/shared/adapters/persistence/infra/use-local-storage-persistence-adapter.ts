import { useCallback, useMemo } from "react";
import type { IPersistenceAdapter, IPersistenceAdapterKey } from "../domain";

/**
 * Custom hook that provides a persistence adapter using the browser's `localStorage`.
 *
 * @returns {IPersistenceAdapter} The persistence adapter object.
 */
export function useLocalStoragePersistenceAdapter(): IPersistenceAdapter {
	/**
	 * Retrieves the value associated with the provided key from `localStorage`.
	 * If the key does not exist or an error occurs, it returns `null`.
	 *
	 * @param {IPersistenceAdapterKey} key - The key to retrieve the value for.
	 * @returns {unknown | null} The parsed value from `localStorage`, or `null` if not found or on error.
	 */
	const get: IPersistenceAdapter["get"] = useCallback((key) => {
		try {
			const rawValueString = localStorage.getItem(key);
			if (rawValueString === null) return null;

			return JSON.parse(rawValueString) as unknown;
		} catch {
			return null;
		}
	}, []);

	/**
	 * Stores a value in `localStorage` under the provided key.
	 * The value is stringified before storage.
	 *
	 * @param {IPersistenceAdapterKey} key - The key to store the value under.
	 * @param {unknown} value - The value to store in `localStorage`.
	 * @returns {void} This method does not return a value.
	 */
	const set: IPersistenceAdapter["set"] = useCallback((key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
	}, []);

	/**
	 * Retrieves the value associated with the provided key from `localStorage`
	 * and casts it to the specified type `T`. This is an "unsafe" method
	 * that should be used when the value's type is known and needs to be explicitly typed.
	 * If the key does not exist or an error occurs, it returns `null`.
	 *
	 * @template T
	 * @param {IPersistenceAdapterKey} key - The key to retrieve the value for.
	 * @returns {T | null} The parsed value from `localStorage` cast to type `T`, or `null` if not found or on error.
	 */
	const unsafeGet: IPersistenceAdapter["unsafeGet"] = useCallback(
		<T>(key: IPersistenceAdapterKey) => {
			try {
				const rawValueString = localStorage.getItem(key);
				if (rawValueString === null) return null;

				return JSON.parse(rawValueString) as T;
			} catch {
				return null;
			}
		},
		[],
	);

	return useMemo(
		() => ({
			get,
			set,
			unsafeGet,
		}),
		[get, set, unsafeGet],
	);
}
