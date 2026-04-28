import { Box, Flex, Image, Paper, Space, Text, Title } from "@mantine/core";
import type { IProject } from "@/features/project/core/domain";

export interface ProjectItemProps {
	project: IProject;
}

export function ProjectItem({ project }: ProjectItemProps) {
	return (
		<Paper p="md" withBorder>
			<Flex align="center" direction="column" gap="md">
				<Title c="indigo" size="h4">
					{project.name}
				</Title>
				{project.image && <Image src={project.image} maw="360" mah="180" />}
				<Box flex="1" miw="0">
					<Space h="sm" />
					<Text c="dimmed" lineClamp={3} size="sm">
						{project.description}
					</Text>
				</Box>
			</Flex>
		</Paper>
	);
}
