import type { NavigateFunction, useLocation } from "react-router";
import { vi } from "vitest";

export const mockNavigate = vi.fn<NavigateFunction>();
export const mockUseLocation = vi.fn<typeof useLocation>();

vi.mock("react-router", async () => {
	const actual =
		await vi.importActual<typeof import("react-router")>("react-router");

	return {
		...actual,
		useNavigate: () => mockNavigate,
		useLocation: mockUseLocation,
	};
});
