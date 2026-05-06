import { screen } from "@testing-library/dom";

class ProjectInfiniteScrollDriver {
	findCategoryButton(name: string) {
		return screen.getByRole("button", { name });
	}

	findClearButton() {
		return screen.queryByRole("button", { name: /clear/i });
	}
}

export const projectInfiniteScrollDriver = new ProjectInfiniteScrollDriver();
