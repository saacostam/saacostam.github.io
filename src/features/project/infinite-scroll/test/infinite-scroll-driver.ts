import { screen } from "@testing-library/dom";

class ProjectInfiniteScrollDriver {
	findCategoryButton(name: string) {
		return screen.getByRole("button", { name });
	}

	findClearButton() {
		return screen.queryByRole("button", { name: /clear/i });
	}

	findEmptyState() {
		return screen.findByTestId("empty-query");
	}

	findQueryError() {
		return screen.findByTestId("query-error");
	}
}

export const projectInfiniteScrollDriver = new ProjectInfiniteScrollDriver();
