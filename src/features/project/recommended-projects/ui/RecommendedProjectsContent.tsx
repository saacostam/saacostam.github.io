import { Flex, Grid, GridCol, Title, UnstyledButton } from "@mantine/core";
import { Link } from "react-router";
import type { IProject } from "@/features/project/core/domain";
import { ProjectItem } from "@/features/project/core/ui";
import { genRoute, RouteName } from "@/shared/router/app";

export interface RecommendedProjectsContentProps {
	projects: IProject[];
}

export function RecommendedProjectsContent({
	projects,
}: RecommendedProjectsContentProps) {
	return (
		<Flex direction="column" gap="md">
			<Title size="h4" ta="center">
				Recommended Projects
			</Title>
			<Grid gutter="md">
				{projects.map((p) => (
					<GridCol key={p.id} span={{ base: 12, sm: 4 }}>
						<UnstyledButton
							component={Link}
							to={genRoute({
								name: RouteName.PROJECT_BY_ID,
								payload: { id: p.id },
							})}
						>
							<ProjectItem fullHeight project={p} />
						</UnstyledButton>
					</GridCol>
				))}
			</Grid>
		</Flex>
	);
}
