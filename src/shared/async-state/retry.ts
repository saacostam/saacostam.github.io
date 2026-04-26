import { useMemo } from "react";

export interface IRetry {
	onClick: () => void;
	isLoading: boolean;
}

export function useRetry(onClick: () => void, isLoading: boolean): IRetry {
	return useMemo(() => ({ onClick, isLoading }), [onClick, isLoading]);
}
