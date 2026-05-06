import { vi } from "vitest";
import type { IIntersectionObserverAdapter } from "@/shared/adapters/intersection-observer/domain";

export const createIntersectionObserverAdapterMock = () => {
	let callback:
		| ((inView: boolean, entry: IntersectionObserverEntry) => void)
		| null = null;

	const adapter: IIntersectionObserverAdapter = {
		useOnInView: vi.fn((cb) => {
			callback = cb;

			return () => {
				return () => {};
			};
		}),
	};

	const trigger = (
		inView = true,
		element: Element = document.createElement("div"),
	) => {
		if (!callback) {
			throw new Error("IntersectionObserver callback not registered");
		}

		callback(inView, {
			isIntersecting: inView,
			target: element,
		} as IntersectionObserverEntry);
	};

	const reset = () => {
		callback = null;
		vi.clearAllMocks();
	};

	return {
		adapter,
		trigger,
		reset,
	};
};
