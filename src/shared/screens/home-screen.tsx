import { Divider, Flex } from "@mantine/core";
import { Hero } from "@/features/hero/ui";
import { TopProjects } from "@/features/project/top/ui";

export default function HomeScreen() {
	return (
		<Flex direction="column" gap="lg">
			<Hero />
			<Divider />
			<TopProjects />
		</Flex>
	);
}
