// biome-ignore assist/source/organizeImports: tests
import { mockNavigate } from "@/tests/mocks";

import { DomainError, DomainErrorType } from "@/shared/errors/domain";
import { mockDi, renderWithProviders } from "@/tests";
import { ProjectById } from "@/features/project/by-id/ui/ProjectById";
import { waitFor } from "@testing-library/dom";
import type { IProjectClientPayload } from "@/features/project/core/domain";
import type { INotificationAdapterPayload } from "@/shared/adapters/notification/domain";

describe("ProjectById [Integration]", () => {
	it("should redirect to onNotFoundHref if project by id rejects on not found error", async () => {
		const di = mockDi();

		di.clients.project.getById.mockRejectedValue(
			new DomainError({
				msg: "Not Found",
				type: DomainErrorType.NOT_FOUND,
				userMsg: "Not Found",
			}),
		);

		const mockId = "test-id";
		const mockOnNotFoundHref = "test-href";

		renderWithProviders(
			<ProjectById id={mockId} onNotFoundHref={mockOnNotFoundHref} />,
			di,
		);

		await waitFor(() => {
			expect(mockNavigate).toHaveBeenCalledExactlyOnceWith(mockOnNotFoundHref);
		});

		expect(di.clients.project.getById).toHaveBeenCalledExactlyOnceWith<
			[IProjectClientPayload["GetByIdRequest"]]
		>({
			id: mockId,
		});
		expect(
			di.adapters.notificationAdapter.notify,
		).toHaveBeenCalledExactlyOnceWith<
			[INotificationAdapterPayload["NotifyIn"]]
		>({
			type: "error",
			title: "Project not found",
			msg: "Project was not found",
		});
	});
});
