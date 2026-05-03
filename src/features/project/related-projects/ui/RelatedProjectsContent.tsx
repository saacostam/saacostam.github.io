import { Flex, Grid, GridCol, Title, UnstyledButton } from "@mantine/core";
import { Link } from "react-router";
import type { IProject } from "@/features/project/core/domain";
import { ProjectItem } from "@/features/project/core/ui";
import { genRoute, RouteName } from "@/shared/router/app";

export interface RelatedProjectsContentProps {
	relatedProjects: IProject[];
}

export function RelatedProjectsContent({
	relatedProjects,
}: RelatedProjectsContentProps) {
	return (
		<Flex direction="column" gap="md">
			<Title size="h4" ta="center">
				Related Projects
			</Title>
			<Grid gutter="md">
				{relatedProjects.map((p) => (
					<GridCol key={p.id} span={{ base: 12, sm: 4 }}>
						<UnstyledButton
							component={Link}
							to={genRoute({
								name: RouteName.PROJECT_BY_ID,
								payload: { id: p.id },
							})}
						>
							<ProjectItem project={p} />
						</UnstyledButton>
					</GridCol>
				))}
			</Grid>
		</Flex>
	);
}
