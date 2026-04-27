import { useSearchParams } from "react-router-dom";

/**
 * Typed query param hook constrained to a string enum or literal union.
 *
 * Ensures the returned value is always one of the allowed values.
 * Falls back to `defaultValue` if the param is missing or invalid.
 *
 */
export function useEnumSearchParam<T extends string>(
	key: string,
	allowed: readonly T[],
	defaultValue: T,
) {
	const [searchParams, setSearchParams] = useSearchParams();

	const raw = searchParams.get(key);

	const value: T =
		raw && (allowed as readonly string[]).includes(raw)
			? (raw as T)
			: defaultValue;

	const setValue = (next: T) => {
		const nextParams = new URLSearchParams(searchParams);
		nextParams.set(key, next);
		setSearchParams(nextParams);
	};

	return [value, setValue] as const;
}

/**
 * Typed query param hook for multiple values constrained to a string enum
 * or literal union.
 *
 * - Reads all occurrences of `key` (?k=a&k=b)
 * - Filters invalid values
 * - Deduplicates while preserving order
 */
export function useEnumArraySearchParam<T extends string>(
	key: string,
	allowed: readonly T[],
	defaultValue: readonly T[] = [],
) {
	const [searchParams, setSearchParams] = useSearchParams();

	const rawValues = searchParams.getAll(key);

	const values: T[] = [
		...new Set(
			rawValues.filter((v): v is T =>
				(allowed as readonly string[]).includes(v),
			),
		),
	];

	const finalValues = values.length > 0 ? values : [...defaultValue];

	const setValues = (next: readonly T[]) => {
		const nextParams = new URLSearchParams(searchParams);
		nextParams.delete(key);

		for (const v of next) {
			nextParams.append(key, v);
		}

		setSearchParams(nextParams);
	};

	return [finalValues, setValues] as const;
}
