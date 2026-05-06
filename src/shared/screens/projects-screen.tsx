import { Anchor, Breadcrumbs, Flex, Text } from "@mantine/core";
import { Link } from "react-router";
import { IProjectCategory } from "@/features/project/core/domain";
import { ProjectInfiniteScroll } from "@/features/project/infinite-scroll/ui";
import {
	genRoute,
	RouteName,
	useEnumArraySearchParam,
} from "@/shared/router/app";

export default function ProjectsScreen() {
	const [categories, setCategories] = useEnumArraySearchParam(
		"category",
		Object.values(IProjectCategory),
		[],
	);

	return (
		<Flex direction="column" gap="lg">
			<Breadcrumbs>
				<Anchor component={Link} to={genRoute({ name: RouteName.HOME })}>
					Home
				</Anchor>
				<Text c="indigo">Projects</Text>
			</Breadcrumbs>
			<ProjectInfiniteScroll
				categories={categories}
				setCategories={setCategories}
			/>
		</Flex>
	);
}
