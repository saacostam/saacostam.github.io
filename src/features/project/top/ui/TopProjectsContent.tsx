import { Flex } from "@mantine/core";
import type { IProject } from "@/features/project/core/domain";
import { ProjectItem } from "@/features/project/core/ui";

export interface TopProjectsContentProps {
	topProjects: IProject[];
}

export function TopProjectsContent({ topProjects }: TopProjectsContentProps) {
	return (
		<Flex direction="column" gap="xs">
			{topProjects.map((project) => (
				<ProjectItem key={project.id} project={project} />
			))}
		</Flex>
	);
}
