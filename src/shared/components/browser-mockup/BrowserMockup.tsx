import { Divider, Flex, Indicator, Paper } from "@mantine/core";
import { type PropsWithChildren, useMemo } from "react";

export function BrowserMockup({ children }: PropsWithChildren) {
	const mockWindowControlContent = useMemo(
		() =>
			new Array(3)
				.fill(null)
				.map((_, index) => <Indicator key={+index} color="gray" />),
		[],
	);

	return (
		<Paper withBorder>
			<Flex direction="column">
				<Flex direction="row" p="md">
					<Flex direction="row" gap="md">
						{mockWindowControlContent}
					</Flex>
				</Flex>
				<Divider />
				{children}
			</Flex>
		</Paper>
	);
}
