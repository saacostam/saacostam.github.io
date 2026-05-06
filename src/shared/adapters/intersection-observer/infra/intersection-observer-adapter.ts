import { useInViewport } from "@mantine/hooks";
import { useMemo } from "react";
import type { IIntersectionObserverAdapter } from "../domain";

const useOnInView: IIntersectionObserverAdapter["useOnInView"] = () => {
	return useInViewport();
};

export function useIntersectionObserverAdapter(): IIntersectionObserverAdapter {
	return useMemo(
		() => ({
			useOnInView,
		}),
		[],
	);
}
