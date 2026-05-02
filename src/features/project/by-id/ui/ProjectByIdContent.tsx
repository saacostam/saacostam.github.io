import { Button, Flex, Image, Text, Title } from "@mantine/core";
import type { IProject } from "@/features/project/core/domain";

export interface ProjectByIdContentProps {
	project: IProject;
}

export function ProjectByIdContent({ project }: ProjectByIdContentProps) {
	return (
		<Flex direction="column" gap="lg">
			<Flex
				align="end"
				direction="row"
				gap="md"
				justify="space-between"
				wrap="wrap"
			>
				<Title size="h3">{project.name}</Title>
				<Flex direction="row" gap="md">
					{project.url && (
						<Button component="a" href={project.url} target="_blank">
							Demo
						</Button>
					)}
					{project.repoUrl && (
						<Button
							component="a"
							href={project.repoUrl}
							target="_blank"
							variant="outline"
						>
							Code
						</Button>
					)}
				</Flex>
			</Flex>
			<Text size="sm">{project.description}</Text>
			{project.image && (
				<Flex justify="center">
					<Image maw="512px" radius="md" src={project.image} />
				</Flex>
			)}
		</Flex>
	);
}
