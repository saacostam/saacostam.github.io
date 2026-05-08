import { Flex, Grid, GridCol, Skeleton } from "@mantine/core";
import { useMemo } from "react";

export function RecommendedProjectsSkeleton() {
	const content = useMemo(
		() =>
			new Array(3).fill(null).map((_, index) => (
				<GridCol key={+index} span={{ base: 12, sm: 4 }}>
					<Skeleton h="300px" />
				</GridCol>
			)),
		[],
	);

	return (
		<Flex direction="column" gap="md">
			<Skeleton h="32px" mx="auto" w="128px" />
			<Grid gutter="md">{content}</Grid>
		</Flex>
	);
}
