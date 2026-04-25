import { Flex } from "@mantine/core";
import { Hero } from "@/features/hero/ui";

export default function HomeScreen() {
	return (
		<Flex direction="column" gap="lg">
			<Hero />
		</Flex>
	);
}
