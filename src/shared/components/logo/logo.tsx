import { Flex, Text, ThemeIcon } from "@mantine/core";
import { FireIcon } from "@/shared/icons";

export function Logo() {
	return (
		<Flex align="center" gap="xs">
			<ThemeIcon
				variant="transparent"
				size="lg"
				color="var(--mantine-primary-color-5)"
			>
				<FireIcon />
			</ThemeIcon>
			<Text fw="bold" size="xl">
				<span style={{ color: "var(--mantine-primary-color-5)" }}>Clean</span>{" "}
				React{" "}
				<span style={{ color: "var(--mantine-primary-color-5)" }}>
					Template
				</span>
			</Text>
		</Flex>
	);
}
