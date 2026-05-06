import { waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { IProjectCategory } from "@/features/project/core/domain";
import { projectClientMockFactory } from "@/features/project/core/test";
import { projectInfiniteScrollDriver } from "@/features/project/infinite-scroll/test";
import { ProjectInfiniteScroll } from "@/features/project/infinite-scroll/ui/ProjectInfiniteScroll";
import type { IIntersectionObserverAdapter } from "@/shared/adapters/intersection-observer/domain";
import { mockDi, renderWithProviders } from "@/tests";

const mockUseOnView =
	(inViewport: boolean): IIntersectionObserverAdapter["useOnInView"] =>
	() => ({
		inViewport,
		ref: vi.fn(),
	});

function setup(args?: {
	categories?: IProjectCategory[];
	response?: ReturnType<typeof projectClientMockFactory.getAllResponse>;
}) {
	const di = mockDi();
	const user = userEvent.setup();

	const setCategories = vi.fn();

	const response =
		args?.response ??
		projectClientMockFactory.getAllResponse({
			elements: [projectClientMockFactory.getProjectMock()],
		});

	di.clients.project.getAll.mockResolvedValue(response);

	di.adapters.intersectionObserver.useOnInView.mockImplementation(
		mockUseOnView(false),
	);

	const utils = renderWithProviders(
		<ProjectInfiniteScroll
			categories={args?.categories ?? []}
			setCategories={setCategories}
		/>,
		di,
	);

	return { di, user, setCategories, ...utils };
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

			const { di, rerender, setCategories } = setup({
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
			di.adapters.intersectionObserver.useOnInView.mockImplementation(
				mockUseOnView(true),
			);
			rerender(
				<ProjectInfiniteScroll categories={[]} setCategories={setCategories} />,
			);

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

			const { di, rerender, setCategories } = setup({
				response,
			});

			await expectInitialFetch(di, []);

			// ensure query settled
			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(1);
			});

			// trigger intersection
			di.adapters.intersectionObserver.useOnInView.mockImplementation(
				mockUseOnView(true),
			);
			rerender(
				<ProjectInfiniteScroll categories={[]} setCategories={setCategories} />,
			);

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

			const { di, rerender, setCategories } = setup({
				response,
			});

			await expectInitialFetch(di, []);

			// ensure query settled
			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(1);
			});

			// trigger but NOT intersecting
			di.adapters.intersectionObserver.useOnInView.mockImplementation(
				mockUseOnView(false),
			);
			rerender(
				<ProjectInfiniteScroll categories={[]} setCategories={setCategories} />,
			);

			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(1);
			});
		});

		it("should reset to page 1 when category changes", async () => {
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

			const di = mockDi();
			const user = userEvent.setup();

			di.adapters.intersectionObserver.useOnInView.mockImplementation(
				mockUseOnView(false),
			);

			di.clients.project.getAll
				.mockResolvedValueOnce(firstPage)
				.mockResolvedValueOnce(secondPage);

			const setCategories = vi.fn();

			const { rerender } = renderWithProviders(
				<ProjectInfiniteScroll categories={[]} setCategories={setCategories} />,
				di,
			);

			await expectInitialFetch(di, []);

			// ensure initial fetch settled
			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(1);
			});

			// simulate entering viewport → load next page
			di.adapters.intersectionObserver.useOnInView.mockImplementation(
				mockUseOnView(true),
			);
			rerender(
				<ProjectInfiniteScroll categories={[]} setCategories={setCategories} />,
			);

			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenCalledTimes(2);
			});

			// change category
			const category = IProjectCategory.Games;

			await user.click(
				projectInfiniteScrollDriver.findCategoryButton(category),
			);

			expect(setCategories).toHaveBeenCalledWith([category]);

			// next call after category change should be page 1 again
			di.clients.project.getAll.mockResolvedValueOnce(firstPage);

			// simulate external state update (router / parent)
			rerender(
				<ProjectInfiniteScroll
					categories={[category]}
					setCategories={setCategories}
				/>,
			);

			await waitFor(() => {
				expect(di.clients.project.getAll).toHaveBeenLastCalledWith(
					expect.objectContaining({
						categories: [category],
						page: 1,
					}),
				);
			});
		});

		it("should render empty state when no projects are returned", async () => {
			const response = projectClientMockFactory.getAllResponse({
				elements: [],
				page: 1,
				total: 0,
				limit: 6,
			});

			const { di } = setup({ response });

			await expectInitialFetch(di, []);

			// empty state should be visible
			const empty = await projectInfiniteScrollDriver.findEmptyState();
			expect(empty).toBeInTheDocument();
		});

		it("should render error state and report error when query fails", async () => {
			const error = new Error("Boom");

			const { di } = setup();

			di.clients.project.getAll.mockRejectedValueOnce(error);

			renderWithProviders(
				<ProjectInfiniteScroll categories={[]} setCategories={vi.fn()} />,
				di,
			);

			// error UI
			const queryError = await projectInfiniteScrollDriver.findQueryError();
			expect(queryError).toBeInTheDocument();

			// error reported
			expect(di.adapters.errorMonitoringAdapter.report).toHaveBeenCalledWith(
				error,
				expect.objectContaining({
					where: "ProjectInfiniteScroll.queryAllProjects.isError",
				}),
			);
		});
	});
});
