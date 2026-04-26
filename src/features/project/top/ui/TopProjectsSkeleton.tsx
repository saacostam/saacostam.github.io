import { Flex, Skeleton } from "@mantine/core";
import { useMemo } from "react";

export function TopProjectsSkeleton() {
	const content = useMemo(
		() =>
			new Array(4)
				.fill(null)
				.map((_, index) => <Skeleton key={+index} h="200px" />),
		[],
	);

	return (
		<Flex direction="column" gap="xs">
			{content}
		</Flex>
	);
}
