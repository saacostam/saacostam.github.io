import {
	AppShell,
	Container,
	Flex,
	Group,
	UnstyledButton,
} from "@mantine/core";
import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import { ThemeToggle } from "@/features/theme/ui";
import { Logo } from "@/shared/components";
import { genRoute, RouteName } from "@/shared/router/app";

export function LandingLayout({ children }: PropsWithChildren) {
	return (
		<AppShell header={{ height: 60 }} padding="md">
			<AppShell.Header px="md">
				<Group h="100%" justify="space-between" style={{ flex: 1 }}>
					<UnstyledButton
						component={Link}
						to={genRoute({
							name: RouteName.LANDING,
						})}
					>
						<Logo />
					</UnstyledButton>
					<Flex gap="lg">
						<ThemeToggle />
					</Flex>
				</Group>
			</AppShell.Header>

			<AppShell.Main>
				<Container mx="auto">{children}</Container>
			</AppShell.Main>
		</AppShell>
	);
}
