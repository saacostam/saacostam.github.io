import { useMemo } from "react";

export interface IRetry {
	onClick: () => void;
	isPending: boolean;
}

export function useRetry(onClick: () => void, isPending: boolean): IRetry {
	return useMemo(() => ({ onClick, isPending }), [onClick, isPending]);
}
