import { waitFor } from "@testing-library/dom";
import type { ILoginClientPayload } from "@/features/login/domain";
import { loginDriver } from "@/features/login/test";
import { genRoute, RouteName } from "@/shared/router/app";
import { expectRoute, mockDi, renderAppRoot } from "@/tests/utils";

describe("Login", () => {
	it("should navigate to app after successful login", async () => {
		const di = mockDi({
			adapters: {
				sessionAdapter: {
					session: {
						type: "unauthenticated",
					},
				},
			},
		});

		renderAppRoot({
			...di,
			route: genRoute({
				name: RouteName.LANDING,
			}),
		});

		const mockUsername = "test-username";
		const mockPassword = "test-password";
		const mockToken = "test-token";

		// Login will succeed
		const loginResponse: ILoginClientPayload["LoginOut"] = {
			token: mockToken,
		};
		di.clients.loginClient.login.mockResolvedValue(loginResponse);

		// Login container is visible
		const container = await loginDriver.findLoginContainer();
		expect(container).toBeInTheDocument();

		// Fill in the form
		await loginDriver.fillForm({
			username: mockUsername,
			password: mockPassword,
		});

		// Submit the form
		await loginDriver.submitForm();

		// Mock session update
		di.adapters.sessionAdapter.session = {
			type: "authenticated",
			token: mockToken,
		};

		// Expect re-direct
		await waitFor(() => {
			const loginRequest: ILoginClientPayload["LoginIn"] = {
				username: mockUsername,
				password: mockPassword,
			};
			expect(di.clients.loginClient.login).toHaveBeenCalledExactlyOnceWith(
				loginRequest,
			);
		});

		await waitFor(() => {
			expect(
				di.adapters.sessionAdapter.setToken,
			).toHaveBeenCalledExactlyOnceWith(mockToken);
		});

		await waitFor(() => {
			expectRoute(genRoute({ name: RouteName.HOME }));
		});
	});
});
