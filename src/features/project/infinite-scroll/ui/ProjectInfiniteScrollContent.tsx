import { Flex, UnstyledButton } from "@mantine/core";
import type { InfiniteData } from "@tanstack/react-query";
import { Link } from "react-router";
import type { IProjectClientPayload } from "@/features/project/core/domain";
import { ProjectItem } from "./ProjectItem";

export interface ProjectInfiniteScrollContentProps {
	projects: InfiniteData<IProjectClientPayload["GetAllResponse"]>;
}

export function ProjectInfiniteScrollContent({
	projects,
}: ProjectInfiniteScrollContentProps) {
	return (
		<Flex direction="column" gap="md">
			{projects.pages.map((page) =>
				page.elements.map((project) => (
					<UnstyledButton key={project.id} component={Link} to={"#"}>
						<ProjectItem project={project} />
					</UnstyledButton>
				)),
			)}
		</Flex>
	);
}
