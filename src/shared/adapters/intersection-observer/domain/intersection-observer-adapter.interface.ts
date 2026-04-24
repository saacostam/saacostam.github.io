export interface IIntersectionObserverAdapter {
	useOnInView: (
		cb: (inView: boolean, entry: IntersectionObserverEntry) => void,
		options: {
			root: Element | null | undefined;
			rootMargin: string;
			threshold: number;
		},
	) => (element: Element | null | undefined) => (() => void) | undefined;
}
