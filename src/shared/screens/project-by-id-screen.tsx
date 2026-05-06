import { Anchor, Breadcrumbs, Divider, Flex, Text } from "@mantine/core";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ProjectById } from "@/features/project/by-id/ui";
import { RelatedProjects } from "@/features/project/related-projects/ui";
import { useAdapters } from "@/shared/adapters/core/app";
import { SuspenseLoader } from "@/shared/components";
import { genRoute, RouteName } from "@/shared/router/app";

export default function ProjectByIdScreen() {
	const { notificationAdapter } = useAdapters();

	const { id } = useParams();
	const nav = useNavigate();

	useEffect(() => {
		if (!id) {
			nav(genRoute({ name: RouteName.PROJECTS }));
			notificationAdapter.notify({
				type: "error",
				title: "Unable to open project",
				msg: "The project link is incomplete",
			});
		}
	}, [id, nav, notificationAdapter.notify]);

	if (!id) return <SuspenseLoader />;

	return (
		<Flex direction="column" gap="lg">
			<Breadcrumbs>
				<Anchor component={Link} to={genRoute({ name: RouteName.HOME })}>
					Home
				</Anchor>
				<Anchor component={Link} to={genRoute({ name: RouteName.PROJECTS })}>
					Projects
				</Anchor>
				<Text c="indigo">Project</Text>
			</Breadcrumbs>
			<ProjectById
				id={id}
				onNotFoundHref={genRoute({ name: RouteName.PROJECTS })}
			/>
			<Divider />
			<RelatedProjects id={id} />
		</Flex>
	);
}
