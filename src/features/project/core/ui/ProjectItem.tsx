import {
	Box,
	Flex,
	Image,
	Paper,
	Space,
	Text,
	Title,
	type TitleSize,
} from "@mantine/core";
import type { IProject } from "@/features/project/core/domain";

export interface ProjectItemProps {
	fullHeight?: boolean;
	project: IProject;
	titleSize?: TitleSize;
}

export function ProjectItem({
	fullHeight,
	project,
	titleSize,
}: ProjectItemProps) {
	return (
		<Paper p="md" withBorder h={fullHeight ? "100%" : undefined}>
			<Flex align="center" direction="column" gap="md">
				<Title c="indigo" size={titleSize ?? "h4"} ta="center">
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
