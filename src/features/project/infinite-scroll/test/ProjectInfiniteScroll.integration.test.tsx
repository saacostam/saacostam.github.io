import { waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { IProjectCategory } from "@/features/project/core/domain";
import { projectClientMockFactory } from "@/features/project/core/test";
import { projectInfiniteScrollDriver } from "@/features/project/infinite-scroll/test";
import { ProjectInfiniteScroll } from "@/features/project/infinite-scroll/ui/ProjectInfiniteScroll";
import { mockDi, renderWithProviders } from "@/tests";

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

	renderWithProviders(
		<ProjectInfiniteScroll
			categories={args?.categories ?? []}
			setCategories={setCategories}
		/>,
		di,
	);

	return { di, user, setCategories };
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
	it("should render projects and call setCategories when category is selected", async () => {
		const { di, user, setCategories } = setup();

		await expectInitialFetch(di, []);

		const category = IProjectCategory.Games;

		await user.click(projectInfiniteScrollDriver.findCategoryButton(category));

		expect(setCategories).toHaveBeenCalledWith([category]);
	});

	it("should remove category if already selected", async () => {
		const category = IProjectCategory.Games;

		const { di, user, setCategories } = setup({
			categories: [category],
		});

		await expectInitialFetch(di, [category]);

		await user.click(projectInfiniteScrollDriver.findCategoryButton(category));

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
