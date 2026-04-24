import { Box, Flex, Paper, Text, Title } from "@mantine/core";
import { useQueryAllProjects } from "@/features/project/core/app";
import { useAdapters } from "@/shared/adapters/core/app";
import { ProjectInfiniteScrollContent } from "./ProjectInfiniteScrollContent";
import { ProjectInfiniteScrollSkeleton } from "./ProjectInfiniteScrollSkeleton";

export function ProjectInfiniteScroll() {
	const {
		intersectionObserver: { useOnInView },
	} = useAdapters();

	const queryAllProjects = useQueryAllProjects();

	const loadMoreRef = useOnInView(
		(inView, entry) => {
			if (!queryAllProjects.hasNextPage || queryAllProjects.isFetchingNextPage)
				return;

			if (inView && entry.isIntersecting) {
				queryAllProjects.fetchNextPage();
			}
		},
		{ root: null, rootMargin: "50px", threshold: 0.05 },
	);

	return (
		<Flex direction="column" gap="lg">
			<Box>
				<Title size="h2">Projects</Title>
				<Text c="dimmed" size="sm">
					All my projects
				</Text>
			</Box>
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
