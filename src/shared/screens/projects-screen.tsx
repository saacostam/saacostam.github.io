import { Anchor, Breadcrumbs, Flex, Text } from "@mantine/core";
import { Link } from "react-router";
import { ProjectInfiniteScroll } from "@/features/project/infinite-scroll/ui";
import { genRoute, RouteName } from "@/shared/router/app";

export default function ProjectsScreen() {
	return (
		<Flex direction="column" gap="lg">
			<Breadcrumbs>
				<Anchor component={Link} to={genRoute({ name: RouteName.HOME })}>
					Home
				</Anchor>
				<Text c="indigo">Projects</Text>
			</Breadcrumbs>
			<ProjectInfiniteScroll />
		</Flex>
	);
}
