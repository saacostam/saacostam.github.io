import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);

// Polyfill matchMedia for Mantine / libraries relying on it
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (!window.matchMedia) {
	window.matchMedia = () => ({
		matches: false,
		media: "",
		onchange: null,
		addListener: () => {
			/* empty */
		},
		removeListener: () => {
			/* empty */
		},
		addEventListener: () => {
			/* empty */
		},
		removeEventListener: () => {
			/* empty */
		},
		dispatchEvent: () => false,
	});
}

// @ts-expect-error: Test Setup
global.ResizeObserver = class {
	observe() {
		/* empty */
	}
	unobserve() {
		/* empty */
	}
	disconnect() {
		/* empty */
	}
};

window.HTMLElement.prototype.scrollIntoView = () => {
	/* empty */
};
