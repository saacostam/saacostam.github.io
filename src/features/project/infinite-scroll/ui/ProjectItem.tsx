import { Box, Card, Flex, Image, Space, Text, Title } from "@mantine/core";
import type { IProject } from "@/features/project/core/domain";

export interface ProjectItemProps {
	project: IProject;
}

export function ProjectItem({ project }: ProjectItemProps) {
	return (
		<Card withBorder>
			<Flex direction="row" gap="md">
				{project.image && <Image src={project.image} w="360" />}
				<Box flex="1" miw="0">
					<Title c="indigo" size="h4">
						{project.name}
					</Title>
					<Space h="md" />
					<Text size="sm">{project.description}</Text>
				</Box>
			</Flex>
		</Card>
	);
}
