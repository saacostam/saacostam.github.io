import { Grid, GridCol, UnstyledButton } from "@mantine/core";
import type { InfiniteData } from "@tanstack/react-query";
import { Link } from "react-router";
import type { IProjectClientPayload } from "@/features/project/core/domain";
import { ProjectItem } from "@/features/project/core/ui";

export interface ProjectInfiniteScrollContentProps {
	projects: InfiniteData<IProjectClientPayload["GetAllResponse"]>;
}

export function ProjectInfiniteScrollContent({
	projects,
}: ProjectInfiniteScrollContentProps) {
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
