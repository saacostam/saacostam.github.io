import { Button, Flex, Paper, Space, Text, Title } from "@mantine/core";
import { useCallback } from "react";
import { useQueryAllProjects } from "@/features/project/core/app";
import { IProjectCategory } from "@/features/project/core/domain";
import { useAdapters } from "@/shared/adapters/core/app";
import { AdjustmentsVertical } from "@/shared/icons";
import { useEnumArraySearchParam } from "@/shared/router/app";
import { ProjectInfiniteScrollContent } from "./ProjectInfiniteScrollContent";
import { ProjectInfiniteScrollSkeleton } from "./ProjectInfiniteScrollSkeleton";

export function ProjectInfiniteScroll() {
	const {
		intersectionObserver: { useOnInView },
	} = useAdapters();

	const [categories, setCategories] = useEnumArraySearchParam(
		"category",
		Object.values(IProjectCategory),
		[],
	);

	const onClickCategoryFilter = useCallback(
		(category: IProjectCategory) => {
			const isIncluded = categories.includes(category);
			const newCategories = isIncluded
				? categories.filter((c) => c !== category)
				: [...categories, category];
			setCategories(newCategories);
		},
		[categories, setCategories],
	);

	const onClickResetCategoryFilter = useCallback(() => {
		setCategories([]);
	}, [setCategories]);

	const queryAllProjects = useQueryAllProjects({ categories });

	const loadMoreRef = useOnInView(
		(inView, entry) => {
			if (!queryAllProjects.hasNextPage || queryAllProjects.isFetchingNextPage)
				return;

			if (inView && entry.isIntersecting) {
				queryAllProjects.fetchNextPage();
			}
		},
		{ root: null, rootMargin: "200px", threshold: 0.1 },
	);

	return (
		<Flex direction="column" gap="lg">
			<Title size="h3">Projects</Title>
			<Paper p="md" withBorder>
				<Text size="sm">
					<Flex align="center" direction="row" gap="0.25rem">
						<AdjustmentsVertical height="1rem" width="1rem" />
						<span>Categories:</span>
					</Flex>
				</Text>
				<Space h="xs" />
				<Flex direction="row" gap="xs" justify="space-between" wrap="wrap">
					{/* TODO: Move to Scroller when Mantine is updated to v9 */}
					<Flex
						direction="row"
						gap="xs"
						style={{
							overflowX: "auto",
							whiteSpace: "nowrap",
							scrollbarWidth: "none",
							msOverflowStyle: "none",
						}}
					>
						{Object.values(IProjectCategory).map((c) => (
							<Button
								key={c}
								onClick={() => onClickCategoryFilter(c)}
								size="xs"
								style={{ flexShrink: 0 }}
								variant={categories.includes(c) ? "filled" : "outline"}
							>
								{c}
							</Button>
						))}
					</Flex>
					{categories.length > 0 && (
						<Button
							color="red"
							onClick={onClickResetCategoryFilter}
							size="xs"
							variant="subtle"
						>
							Clear
						</Button>
					)}
				</Flex>
			</Paper>
			<Paper>
				{queryAllProjects.isLoading && <ProjectInfiniteScrollSkeleton />}
				{queryAllProjects.isSuccess && (
					<ProjectInfiniteScrollContent projects={queryAllProjects.data} />
				)}
				{/* Sentinel */}
				<div ref={loadMoreRef} style={{ height: "1px" }} />
			</Paper>
		</Flex>
	);
}
