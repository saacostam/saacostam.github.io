import { Flex, Paper } from "@mantine/core";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQueryProjectById } from "@/features/project/core/app";
import { useAdapters } from "@/shared/adapters/core/app";
import { useRetry } from "@/shared/async-state";
import { QueryError } from "@/shared/components";
import { isNotFoundError } from "@/shared/errors/domain";
import { genRoute, RouteName } from "@/shared/router/app";
import { ProjectByIdContent } from "./ProjectByIdContent";
import { ProjectByIdSkeleton } from "./ProjectByIdSkeleton";

export interface ProjectByIdProps {
	id: string;
}

export function ProjectById({ id }: ProjectByIdProps) {
	const { notificationAdapter } = useAdapters();

	const nav = useNavigate();

	const queryProjectById = useQueryProjectById({ id }).useQuery();

	const retry = useRetry(queryProjectById.refetch, queryProjectById.isLoading);

	useEffect(() => {
		if (queryProjectById.isError && isNotFoundError(queryProjectById.error)) {
			nav(genRoute({ name: RouteName.PROJECTS }));
			notificationAdapter.notify({
				type: "error",
				title: "Project not found",
				msg: "Project was not found",
			});
		}
	}, [
		queryProjectById.error,
		queryProjectById.isError,
		nav,
		notificationAdapter.notify,
	]);

	return (
		<Flex direction="column" gap="lg">
			<Paper>
				{queryProjectById.isLoading && <ProjectByIdSkeleton />}
				{queryProjectById.isError && (
					<QueryError
						msg="Unable to retrieve project information"
						retry={retry}
						error={queryProjectById.error}
						where="ProjectById.queryProjectById.isError"
					/>
				)}
				{queryProjectById.isSuccess && (
					<ProjectByIdContent project={queryProjectById.data.project} />
				)}
			</Paper>
		</Flex>
	);
}
