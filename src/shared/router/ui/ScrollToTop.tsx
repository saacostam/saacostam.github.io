import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = new Map<string, number>();

export function ScrollToTop() {
	const location = useLocation();
	const prevKey = useRef<string | null>(null);

	useEffect(() => {
		const key = location.key;

		const saved = scrollPositions.get(key);
		if (saved != null) {
			window.scrollTo(0, saved);
		} else {
			window.scrollTo(0, 0);
		}

		return () => {
			if (prevKey.current) {
				scrollPositions.set(prevKey.current, window.scrollY);
			}
			prevKey.current = key;
		};
	}, [location]);

	return null;
}
