/**
 * Defines the valid keys that can be used with the persistence adapter.
 */
export enum IPersistenceAdapterKey {
	TOKEN = "token",
}

/**
 * Interface representing a persistence adapter.
 */
export interface IPersistenceAdapter {
	/**
	 * Retrieves the value associated with the provided key from the persistent storage.
	 * If the key does not exist, it returns `null`.
	 *
	 * @param {IPersistenceAdapterKey} key - The key to retrieve the value for.
	 * @returns {unknown | null} The value associated with the key, or `null` if not found.
	 */
	get(key: IPersistenceAdapterKey): unknown | null;

	/**
	 * Stores a value in persistent storage under the provided key.
	 *
	 * @param {IPersistenceAdapterKey} key - The key to store the value under.
	 * @param {unknown} value - The value to store.
	 * @returns {void} This method does not return a value.
	 */
	set(key: IPersistenceAdapterKey, value: unknown): void;

	/**
	 * Retrieves the value associated with the provided key from the persistent storage
	 * and casts it to the specified type `T`.
	 * This method should be used when the type of the value is known and needs to be explicitly typed.
	 * If the key does not exist, it returns `null`.
	 *
	 * @template T
	 * @param {IPersistenceAdapterKey} key - The key to retrieve the value for.
	 * @returns {T | null} The value associated with the key, or `null` if not found.
	 */
	unsafeGet<T>(key: IPersistenceAdapterKey): T | null;
}
