import { Flex, Text, ThemeIcon, Tooltip } from "@mantine/core";
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
			<Tooltip label="Santiago Acosta">
				<Text c="var(--mantine-primary-color-5)" fw="bold" size="xl">
					saacostam
				</Text>
			</Tooltip>
		</Flex>
	);
}
