import { Flex, Text, ThemeIcon, Tooltip } from "@mantine/core";
import { CommandLineIcon } from "@/shared/icons";

export function Logo() {
	return (
		<Flex align="center" gap="xs">
			<ThemeIcon
				variant="transparent"
				size="lg"
				color="var(--mantine-primary-color-5)"
			>
				<CommandLineIcon />
			</ThemeIcon>
			<Tooltip label="Santiago Acosta">
				<Text fw="bold" size="xl">
					saacostam
				</Text>
			</Tooltip>
		</Flex>
	);
}
