import { Button, Flex, Image, Paper, Text, Title } from "@mantine/core";
import { type PropsWithChildren, useCallback } from "react";
import type { IProject } from "@/features/project/core/domain";

export interface ProjectByIdContentProps {
	project: IProject;
}

export function ProjectByIdContent({ project }: ProjectByIdContentProps) {
	const ImageClickWrapper = useCallback(
		({ children }: PropsWithChildren) =>
			project.url ? (
				<a href={project.url} target="_blank">
					{children}
				</a>
			) : (
				children
			),
		[project.url],
	);

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
							View Live Demo
						</Button>
					)}
					{project.repoUrl && (
						<Button
							component="a"
							href={project.repoUrl}
							target="_blank"
							variant="light"
						>
							Code
						</Button>
					)}
				</Flex>
			</Flex>
			<Text size="sm">{project.description}</Text>
			{project.image && (
				<Flex justify="center">
					<Paper radius="md" withBorder>
						<ImageClickWrapper>
							<Image maw="512px" radius="md" src={project.image} />
						</ImageClickWrapper>
					</Paper>
				</Flex>
			)}
		</Flex>
	);
}
