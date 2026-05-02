import { Box, Button, Flex, Text, Title } from "@mantine/core";
import { Link } from "react-router";
import { useQueryTopProjects } from "@/features/project/core/app";
import { useRetry } from "@/shared/async-state";
import { QueryError } from "@/shared/components";
import { PuzzlePieceIcon } from "@/shared/icons";
import { genRoute, RouteName } from "@/shared/router/app";
import { TopProjectsContent } from "./TopProjectsContent";
import { TopProjectsSkeleton } from "./TopProjectsSkeleton";

export function TopProjects() {
	const queryTopProjects = useQueryTopProjects().useQuery();

	const retry = useRetry(queryTopProjects.refetch, queryTopProjects.isLoading);

	return (
		<Flex direction="column" gap="lg">
			<Box>
				<Title size="h3">Top Projects</Title>
				<Text c="dimmed" size="sm">
					Selected projects that highlight my approach to building and
					problem-solving.
				</Text>
			</Box>
			<Box>
				{queryTopProjects.isError && (
					<QueryError
						msg="Unable to retrieve top projects information"
						retry={retry}
						error={queryTopProjects.error}
						where="TopProjects.queryTopProjects.isError"
					/>
				)}
				{queryTopProjects.isLoading && <TopProjectsSkeleton />}
				{queryTopProjects.isSuccess && (
					<TopProjectsContent topProjects={queryTopProjects.data} />
				)}
			</Box>
			<Button
				component={Link}
				leftSection={<PuzzlePieceIcon height="1.2rem" width="1.2rem" />}
				size="sm"
				to={genRoute({ name: RouteName.PROJECTS })}
			>
				More Projects
			</Button>
		</Flex>
	);
}
