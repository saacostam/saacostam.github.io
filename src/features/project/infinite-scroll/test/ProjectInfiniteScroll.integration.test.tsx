import { waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { IProjectCategory } from "@/features/project/core/domain";
import { projectClientMockFactory } from "@/features/project/core/test";
import { projectInfiniteScrollDriver } from "@/features/project/infinite-scroll/test";
import { ProjectInfiniteScroll } from "@/features/project/infinite-scroll/ui/ProjectInfiniteScroll";
import { createIntersectionObserverAdapterMock } from "@/shared/adapters/intersection-observer/test";
import { mockDi, renderWithProviders } from "@/tests";

function setup(args?: {
	categories?: IProjectCategory[];
	response?: ReturnType<typeof projectClientMockFactory.getAllResponse>;
}) {
	const di = mockDi();
	const user = userEvent.setup();

	const setCategories = vi.fn();

	const intersectionObserverMock = createIntersectionObserverAdapterMock();

	di.adapters.intersectionObserver =
		intersectionObserverMock.adapter as typeof di.adapters.intersectionObserver;

	const response =
		args?.response ??
		projectClientMockFactory.getAllResponse({
			elements: [projectClientMockFactory.getProjectMock()],
		});

	di.clients.project.getAll.mockResolvedValue(response);

	renderWithProviders(
		<ProjectInfiniteScroll
			categories={args?.categories ?? []}
			setCategories={setCategories}
		/>,
		di,
	);

	return { di, user, setCategories, intersectionObserverMock };
}

async function expectInitialFetch(
	di: ReturnType<typeof mockDi>,
	categories: IProjectCategory[],
) {
	await waitFor(() => {
		expect(di.clients.project.getAll).toHaveBeenCalledWith({
			categories,
			limit: 6,
			page: 1,
		});
	});
}

describe("ProjectInfiniteScroll [Integration]", () => {
	describe("filtering logic", () => {
		it("should render projects and call setCategories when category is selected", async () => {
			const { di, user, setCategories } = setup();

			await expectInitialFetch(di, []);

			const category = IProjectCategory.Games;

			await user.click(
				projectInfiniteScrollDriver.findCategoryButton(category),
			);

			expect(setCategories).toHaveBeenCalledWith([category]);
		});

		it("should remove category if already selected", async () => {
			const category = IProjectCategory.Games;

			const { di, user, setCategories } = setup({
				categories: [category],
			});

			await expectInitialFetch(di, [category]);

			await user.click(
				projectInfiniteScrollDriver.findCategoryButton(category),
			);

			expect(setCategories).toHaveBeenCalledWith([]);
		});

		it("should show clear button and reset categories when clicked", async () => {
			const category = IProjectCategory.Games;

			const { di, user, setCategories } = setup({
				categories: [category],
			});

			await expectInitialFetch(di, [category]);

			const clearButton = projectInfiniteScrollDriver.findClearButton();
			expect(clearButton).toBeInTheDocument();

			// biome-ignore lint/style/noNonNullAssertion: test
			await user.click(clearButton!);

			expect(setCategories).toHaveBeenCalledWith([]);
		});
	});

	describe("fetching", () => {
		it("should fetch next page when sentinel enters viewport", async () => {
			const firstPage = projectClientMockFactory.getAllResponse({
				elements: [projectClientMockFactory.getProjectMock()],
				page: 1,
				total: 12,
				limit: 6,
			});

			const secondPage = projectClientMockFactory.getAllResponse({
				elements: [projectClientMockFactory.getProjectMock({ id: "p2" })],
				page: 2,
				total: 12,
				limit: 6,
			});

			const { di, intersectionObserverMock } = setup({
				response: firstPage,
			});

			di.clients.project.getAll
				.mockResolvedValueOnce(firstPage)
				.mockResolvedValueOnce(secondPage);

			await expectInitialFetch(di, []);

			// 🔑 wait for React Query to settle (NOT just call)
			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(1);
			});

			// now trigger intersection AFTER state is ready
			intersectionObserverMock.trigger(true);

			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(2);
			});

			expect(di.clients.project.getAll).toHaveBeenLastCalledWith({
				categories: [],
				limit: 6,
				page: 2,
			});
		});

		it("should NOT fetch next page when there is no next page", async () => {
			const response = projectClientMockFactory.getAllResponse({
				elements: [projectClientMockFactory.getProjectMock()],
				page: 1,
				total: 1, // no next page
				limit: 6,
			});

			const { di, intersectionObserverMock } = setup({
				response,
			});

			await expectInitialFetch(di, []);

			// ensure query settled
			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(1);
			});

			// trigger intersection
			intersectionObserverMock.trigger(true);

			// assert no additional fetch
			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(1);
			});
		});

		it("should NOT fetch next page when sentinel is not intersecting", async () => {
			const response = projectClientMockFactory.getAllResponse({
				elements: [projectClientMockFactory.getProjectMock()],
				page: 1,
				total: 12, // has next page
				limit: 6,
			});

			const { di, intersectionObserverMock } = setup({
				response,
			});

			await expectInitialFetch(di, []);

			// ensure query settled
			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(1);
			});

			// trigger but NOT intersecting
			intersectionObserverMock.trigger(false);

			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(1);
			});
		});
	});
});
