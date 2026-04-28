import { Grid, GridCol, Skeleton } from "@mantine/core";
import { useMemo } from "react";

export function ProjectInfiniteScrollSkeleton() {
	const content = useMemo(
		() =>
			new Array(6).fill(null).map((_, index) => (
				<GridCol key={+index} span={{ base: 12, sm: 6, md: 4 }}>
					<Skeleton h="256px" />
				</GridCol>
			)),
		[],
	);

	return <Grid gutter="md">{content}</Grid>;
}
