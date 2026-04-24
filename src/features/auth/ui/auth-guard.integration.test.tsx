// biome-ignore assist/source/organizeImports: mocks
import { mockNavigate, mockUseLocation } from "@/tests/mocks";

import { screen, waitFor } from "@testing-library/dom";
import type { Location } from "react-router";
import { RouteName } from "@/shared/router/app";
import type { ISession } from "@/shared/adapters/session/domain";
import { mockDi, renderWithProviders } from "@/tests";
import { AuthGuard } from "./auth-guard";
import { genRoute } from "@/shared/router/app";

function setupAuthGuard({
	pathname = "/home",
	sessionState = { type: "unauthenticated" },
}: {
	pathname?: string;
	sessionState?: ISession;
	authError?: Error;
}) {
	mockUseLocation.mockImplementation(
		() => ({ pathname: pathname }) as unknown as Location,
	);

	const di = mockDi({
		adapters: {
			sessionAdapter: {
				session: sessionState,
			},
		},
	});

	return { di };
}

describe("AuthGuard [Integration]", () => {
	beforeEach(() => {
		mockNavigate.mockReset();
		mockUseLocation.mockReset();
	});

	it("should render children if accessing a public route and unauthenticated", () => {
		const { di } = setupAuthGuard({
			pathname: genRoute({
				name: RouteName.LANDING,
			}),
			sessionState: { type: "unauthenticated" },
		});

		renderWithProviders(
			<AuthGuard>
				<div data-testid="content" />
			</AuthGuard>,
			di,
		);

		const content = screen.getByTestId("content");
		expect(content).toBeInTheDocument();
		expect(mockNavigate).not.toHaveBeenCalled();
	});

	it("should render children if accessing a private route and authenticated", () => {
		const { di } = setupAuthGuard({
			pathname: genRoute({
				name: RouteName.HOME,
			}),
			sessionState: { type: "authenticated", token: "token" },
		});

		renderWithProviders(
			<AuthGuard>
				<div data-testid="content" />
			</AuthGuard>,
			di,
		);

		const content = screen.getByTestId("content");
		expect(content).toBeInTheDocument();
		expect(mockNavigate).not.toHaveBeenCalled();
	});

	it("should redirect to landing if unauthenticated on private route", async () => {
		const { di } = setupAuthGuard({
			pathname: genRoute({
				name: RouteName.HOME,
			}),
			sessionState: { type: "unauthenticated" },
		});

		renderWithProviders(
			<AuthGuard>
				<div data-testid="content" />
			</AuthGuard>,
			di,
		);

		expect(screen.getByTestId("suspense-loader")).toBeInTheDocument();
		expect(screen.queryByTestId("content")).not.toBeInTheDocument();

		await waitFor(() => {
			expect(mockNavigate).toHaveBeenCalledWith(
				genRoute({
					name: RouteName.LANDING,
				}),
			);
		});
	});

	it("should redirect to home if authenticated and accessing auth route", async () => {
		const { di } = setupAuthGuard({
			pathname: genRoute({
				name: RouteName.LANDING,
			}),
			sessionState: { type: "authenticated", token: "token" },
		});

		renderWithProviders(
			<AuthGuard>
				<div data-testid="content" />
			</AuthGuard>,
			di,
		);

		expect(screen.getByTestId("suspense-loader")).toBeInTheDocument();
		expect(screen.queryByTestId("content")).not.toBeInTheDocument();

		await waitFor(() => {
			expect(mockNavigate).toHaveBeenCalledWith(
				genRoute({
					name: RouteName.HOME,
				}),
			);
		});
	});
});
