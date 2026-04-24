import { useCallback, useMemo } from "react";
import type { IProjectClient } from "@/features/project/domain";

export function useProjectClient(): IProjectClient {
	const getAll: IProjectClient["getAll"] = useCallback(async ({ limit }) => {
		return {
			page: 1,
			elements: [],
			total: 0,
			limit,
		};
	}, []);

	return useMemo(
		() => ({
			getAll,
		}),
		[getAll],
	);
}
