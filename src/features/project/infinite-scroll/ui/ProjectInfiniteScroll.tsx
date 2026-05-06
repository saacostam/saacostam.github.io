import { Box, Button, Flex, Paper, Space, Text, Title } from "@mantine/core";
import { useCallback } from "react";
import { useQueryAllProjects } from "@/features/project/core/app";
import { IProjectCategory } from "@/features/project/core/domain";
import { useAdapters } from "@/shared/adapters/core/app";
import { useRetry } from "@/shared/async-state";
import { QueryError } from "@/shared/components";
import { AdjustmentsVertical } from "@/shared/icons";
import { ProjectInfiniteScrollContent } from "./ProjectInfiniteScrollContent";
import { ProjectInfiniteScrollSkeleton } from "./ProjectInfiniteScrollSkeleton";

export interface ProjectInfiniteScrollProps {
	categories: IProjectCategory[];
	setCategories: (next: IProjectCategory[]) => void;
}

export function ProjectInfiniteScroll({
	categories,
	setCategories,
}: ProjectInfiniteScrollProps) {
	const {
		intersectionObserver: { useOnInView },
	} = useAdapters();

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
	const retry = useRetry(queryAllProjects.refetch, queryAllProjects.isLoading);

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
			<Box>
				<Title size="h3">Projects</Title>
				<Text c="dimmed" size="sm">
					Projects showcasing my work across different technologies and domains.
				</Text>
			</Box>
			<Paper p="md" withBorder>
				<Flex align="center" direction="row" gap="0.25rem">
					<AdjustmentsVertical height="1.25rem" width="1.25rem" />
					<Text fw="bold" size="md">
						<span>Categories:</span>
					</Text>
				</Flex>
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
								size="sm"
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
							size="sm"
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
				{queryAllProjects.isError && (
					<QueryError
						msg="Unable to retrieve projects information"
						retry={retry}
						error={queryAllProjects.error}
						where="ProjectInfiniteScroll.queryAllProjects.isError"
					/>
				)}
				{/* Sentinel */}
				<div ref={loadMoreRef} style={{ height: "1px" }} />
			</Paper>
		</Flex>
	);
}
