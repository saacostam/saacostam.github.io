import { useQueryRecommendedProjects } from "@/features/project/core/app";
import { useRetry } from "@/shared/async-state";
import { QueryError } from "@/shared/components";
import { RecommendedProjectsContent } from "./RecommendedProjectsContent";
import { RecommendedProjectsSkeleton } from "./RecommendedProjectsSkeleton";

export interface RecommendedProjectsProps {
	id: string;
}

export function RecommendedProjects({ id }: RecommendedProjectsProps) {
	const queryRecommendedProjects = useQueryRecommendedProjects({
		id,
	}).useQuery();

	const retry = useRetry(
		queryRecommendedProjects.refetch,
		queryRecommendedProjects.isLoading,
	);

	return (
		<>
			{queryRecommendedProjects.isLoading && <RecommendedProjectsSkeleton />}
			{queryRecommendedProjects.isError && (
				<QueryError
					msg="Unable to retrieve recommended projects"
					retry={retry}
					error={queryRecommendedProjects.error}
					where="RecommendedProjects.queryRecommendedProjects.isError"
					// Not a essential feature, so we keep the error feedback hidden
					hidden
				/>
			)}
			{queryRecommendedProjects.isSuccess && (
				<RecommendedProjectsContent
					projects={queryRecommendedProjects.data.projects}
				/>
			)}
		</>
	);
}
