import { Flex, Skeleton } from "@mantine/core";

export function ProjectByIdSkeleton() {
	return (
		<Flex direction="column" gap="lg">
			<Skeleton w="128px" h="32px" />
			<Skeleton h="256px" />
		</Flex>
	);
}
