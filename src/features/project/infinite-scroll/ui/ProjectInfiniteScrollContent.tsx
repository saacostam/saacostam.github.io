import { Grid, GridCol, Paper, UnstyledButton } from "@mantine/core";
import type { InfiniteData } from "@tanstack/react-query";
import { Link } from "react-router";
import type { IProjectClientPayload } from "@/features/project/core/domain";
import { ProjectItem } from "@/features/project/core/ui";
import { EmptyQuery } from "@/shared/components";

export interface ProjectInfiniteScrollContentProps {
	projects: InfiniteData<IProjectClientPayload["GetAllResponse"]>;
}

export function ProjectInfiniteScrollContent({
	projects,
}: ProjectInfiniteScrollContentProps) {
	const totalItems = projects.pages.reduce(
		(acc, page) => acc + page.elements.length,
		0,
	);

	const isEmpty = totalItems === 0;

	if (isEmpty)
		return (
			<Paper p="md" withBorder>
				<EmptyQuery />
			</Paper>
		);

	return (
		<Grid gutter="md">
			{projects.pages.map((page) =>
				page.elements.map((project) => (
					<GridCol key={project.id} span={{ base: 12, sm: 6, md: 4 }}>
						<UnstyledButton component={Link} to={"#"}>
							<ProjectItem project={project} />
						</UnstyledButton>
					</GridCol>
				)),
			)}
		</Grid>
	);
}
