import { Grid, GridCol, UnstyledButton } from "@mantine/core";
import { Link } from "react-router";
import type { IProject } from "@/features/project/core/domain";
import { ProjectItem } from "@/features/project/core/ui";

export interface TopProjectsContentProps {
	topProjects: IProject[];
}

export function TopProjectsContent({ topProjects }: TopProjectsContentProps) {
	return (
		<Grid gutter="md">
			{topProjects.map((project) => (
				<GridCol key={project.id} span={{ base: 12, sm: 6 }}>
					<UnstyledButton component={Link} to={"#"}>
						<ProjectItem project={project} />
					</UnstyledButton>
				</GridCol>
			))}
		</Grid>
	);
}
