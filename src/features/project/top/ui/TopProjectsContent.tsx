import { Flex, UnstyledButton } from "@mantine/core";
import { Link } from "react-router";
import type { IProject } from "@/features/project/core/domain";
import { ProjectItem } from "@/features/project/core/ui";

export interface TopProjectsContentProps {
	topProjects: IProject[];
}

export function TopProjectsContent({ topProjects }: TopProjectsContentProps) {
	return (
		<Flex direction="column" gap="xs">
			{topProjects.map((project) => (
				<UnstyledButton key={project.id} component={Link} to={"#"}>
					<ProjectItem key={project.id} project={project} />
				</UnstyledButton>
			))}
		</Flex>
	);
}
