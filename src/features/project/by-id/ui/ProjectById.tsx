import { Flex, Paper } from "@mantine/core";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQueryProjectById } from "@/features/project/core/app";
import { useAdapters } from "@/shared/adapters/core/app";
import { useRetry } from "@/shared/async-state";
import { QueryError } from "@/shared/components";
import { isNotFoundError } from "@/shared/errors/domain";
import { ProjectByIdContent } from "./ProjectByIdContent";
import { ProjectByIdSkeleton } from "./ProjectByIdSkeleton";

export interface ProjectByIdProps {
	id: string;
	onNotFoundHref: string;
}

export function ProjectById({ id, onNotFoundHref }: ProjectByIdProps) {
	const { notificationAdapter } = useAdapters();

	const nav = useNavigate();

	const queryProjectById = useQueryProjectById({ id }).useQuery();

	const retry = useRetry(queryProjectById.refetch, queryProjectById.isLoading);

	useEffect(() => {
		if (queryProjectById.isError && isNotFoundError(queryProjectById.error)) {
			nav(onNotFoundHref);
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
		onNotFoundHref,
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
