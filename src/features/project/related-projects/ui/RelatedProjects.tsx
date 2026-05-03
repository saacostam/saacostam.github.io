import { useQueryRelatedProjects } from "@/features/project/core/app";
import { useRetry } from "@/shared/async-state";
import { QueryError } from "@/shared/components";
import { RelatedProjectsContent } from "./RelatedProjectsContent";
import { RelatedProjectsSkeleton } from "./RelatedProjectsSkeleton";

export interface RelatedProjectsProps {
	id: string;
}

export function RelatedProjects({ id }: RelatedProjectsProps) {
	const queryRelatedProjects = useQueryRelatedProjects({ id }).useQuery();

	const retry = useRetry(
		queryRelatedProjects.refetch,
		queryRelatedProjects.isLoading,
	);

	return (
		<>
			{queryRelatedProjects.isLoading && <RelatedProjectsSkeleton />}
			{queryRelatedProjects.isError && (
				<QueryError
					msg="Unable to retrieve related projects"
					retry={retry}
					error={queryRelatedProjects.error}
					where="RelatedProjects.queryRelatedProjects.isError"
					// Not a essential feature, so we keep the error feedback hidden
					hidden
				/>
			)}
			{queryRelatedProjects.isSuccess && (
				<RelatedProjectsContent
					relatedProjects={queryRelatedProjects.data.relatedProjects}
				/>
			)}
		</>
	);
}
