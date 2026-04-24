import { useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import type { IUuidAdapter } from "../domain";

export function useUuidAdapter(): IUuidAdapter {
	const gen: IUuidAdapter["gen"] = useCallback(() => uuidv4(), []);

	return useMemo(
		() => ({
			gen,
		}),
		[gen],
	);
}
