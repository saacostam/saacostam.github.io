import {
	useQuery as queryHook,
	type UseQueryOptions,
	useQueryClient,
} from "@tanstack/react-query";
import { useCallback } from "react";

export type OptimDataSetter<TData> = (
	updated: (prev: TData | undefined) => TData | undefined,
) => void;

export function useMetaQuery<TData, TError = unknown>(
	options: UseQueryOptions<TData, TError, TData>,
) {
	const { queryKey, queryFn } = options;
	const queryClient = useQueryClient();

	const setOptimisticData: OptimDataSetter<TData> = useCallback(
		(updated) => {
			if (queryKey) {
				queryClient.setQueryData<TData>(queryKey, updated);
			}
		},
		[queryClient, queryKey],
	);

	return {
		useQuery: (
			queryOptions?: Omit<
				UseQueryOptions<TData, TError, TData>,
				"queryKey" | "queryFn"
			>,
		) => {
			return queryHook({
				...options,
				...queryOptions,
				queryKey,
				queryFn,
			});
		},
		setOptimisticData,
	};
}
