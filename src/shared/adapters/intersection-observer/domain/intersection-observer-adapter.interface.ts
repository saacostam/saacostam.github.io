export interface IIntersectionObserverAdapter {
	// biome-ignore lint/suspicious/noExplicitAny: generic
	useOnInView: <T extends HTMLElement = any>() => {
		inViewport: boolean;
		ref: React.RefCallback<T | null>;
	};
}
