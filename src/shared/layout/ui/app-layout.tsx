import {
	AppShell,
	Burger,
	Container,
	Flex,
	Group,
	UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { type PropsWithChildren, useMemo } from "react";
import { Link } from "react-router";
import { ThemeToggle } from "@/features/theme/ui";
import { Logo } from "@/shared/components";
import { genRoute, RouteName } from "@/shared/router/app";

const MAIN_LINKS: {
	name: RouteName;
	label: string;
}[] = [] as const;

export function AppLayout({ children }: PropsWithChildren) {
	const [opened, { toggle }] = useDisclosure();

	const links = useMemo(
		() =>
			MAIN_LINKS.map(({ name, label }) => ({
				href: genRoute({
					name,
				}),
				label,
			})),
		[],
	);

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { desktop: true, mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Container size="xl" h="100%">
					<Group h="100%" px="md">
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Group justify="space-between" style={{ flex: 1 }}>
							<UnstyledButton
								component={Link}
								to={genRoute({
									name: RouteName.HOME,
								})}
							>
								<Logo />
							</UnstyledButton>
							<Flex gap="lg">
								<Group gap="lg" visibleFrom="sm">
									{links.map(({ href, label }) => (
										<UnstyledButton component={Link} key={href} to={href}>
											{label}
										</UnstyledButton>
									))}
								</Group>
								<ThemeToggle />
							</Flex>
						</Group>
					</Group>
				</Container>
			</AppShell.Header>

			<AppShell.Navbar py="md" px="lg">
				{links.map(({ href, label }) => (
					<UnstyledButton component={Link} key={href} to={href}>
						{label}
					</UnstyledButton>
				))}
			</AppShell.Navbar>

			<AppShell.Main>
				<Container mx="auto">{children}</Container>
			</AppShell.Main>
		</AppShell>
	);
}
