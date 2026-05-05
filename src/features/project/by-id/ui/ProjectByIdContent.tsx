import {
	Alert,
	Box,
	Button,
	Divider,
	Flex,
	Image,
	List,
	ListItem,
	Paper,
	Text,
	Title,
} from "@mantine/core";
import { type PropsWithChildren, useCallback } from "react";
import type { IProject } from "@/features/project/core/domain";
import { BrowserMockup } from "@/shared/components";

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

	const height = project.iframe.height || 750;
	const width = project.iframe.width;

	const viewPortIssues = [
		...(project.iframe.canBeUsedInMobile === false
			? ["No Mobile Controls"]
			: []),
		...(project.iframe.isResponsive === false ? ["Not Responsive"] : []),
	];

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
				<Flex align="center" direction="column" gap="md">
					<Paper radius="md" withBorder>
						<ImageClickWrapper>
							<Image maw="512px" radius="md" src={project.image} />
						</ImageClickWrapper>
					</Paper>
					<Text c="dimmed" size="sm">
						• Screenshot from {project.name} •
					</Text>
				</Flex>
			)}
			{project.url && (
				<>
					<Divider />
					<Flex
						align="end"
						direction="row"
						gap="md"
						justify="space-between"
						wrap="wrap"
					>
						<Box>
							<Title size="h4">Demo (IFrame)</Title>
							<Text c="dimmed" size="sm">
								Test the demo in the iframe, or click the “View Live Demo”
								button for a better user experience.
							</Text>
						</Box>
						{project.url && (
							<Button component="a" href={project.url} target="_blank">
								View Live Demo
							</Button>
						)}
					</Flex>
					<BrowserMockup>
						<iframe
							src={project.url}
							height={height}
							width={width}
							title={project.name}
						/>
					</BrowserMockup>
					{viewPortIssues.length > 0 && (
						<Alert title="Some features may not work as expected">
							<List size="sm">
								{viewPortIssues.map((issue, index) => (
									<ListItem key={+index}>{issue}</ListItem>
								))}
							</List>
						</Alert>
					)}
				</>
			)}
		</Flex>
	);
}
