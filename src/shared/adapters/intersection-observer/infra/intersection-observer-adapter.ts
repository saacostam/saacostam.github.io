import { useMemo } from "react";
import { useOnInView as useExternalOnInView } from "react-intersection-observer";
import type { IIntersectionObserverAdapter } from "../domain";

const useOnInView: IIntersectionObserverAdapter["useOnInView"] = (
	cb,
	options,
) => {
	return useExternalOnInView(cb, options);
};

export function useIntersectionObserverAdapter(): IIntersectionObserverAdapter {
	return useMemo(
		() => ({
			useOnInView,
		}),
		[],
	);
}
