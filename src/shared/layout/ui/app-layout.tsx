import {
	AppShell,
	Burger,
	Container,
	Flex,
	Group,
	Space,
	UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { type PropsWithChildren, useMemo } from "react";
import { Link } from "react-router";
import { ThemeToggle } from "@/features/theme/ui";
import { useAdapters } from "@/shared/adapters/core/app";
import { IThemeVariant } from "@/shared/adapters/theme/domain";
import { Logo } from "@/shared/components";
import { genRoute, RouteName } from "@/shared/router/app";
import { Footer } from "./footer";

const MAIN_LINKS = [
	{
		label: "Home",
		name: RouteName.HOME,
	},
	{
		label: "Projects",
		name: RouteName.PROJECTS,
	},
] as const;

export function AppLayout({ children }: PropsWithChildren) {
	const { themeAdapter } = useAdapters();

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
		>
			<AppShell.Header
				bg={themeAdapter.theme === IThemeVariant.DARK ? "dark.8" : "gray.1"}
			>
				<Container size="lg" h="100%">
					<Group h="100%">
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
							<Flex align="center" gap="lg">
								{links.map(({ href, label }) => (
									<UnstyledButton
										component={Link}
										key={href}
										to={href}
										visibleFrom="sm"
									>
										{label}
									</UnstyledButton>
								))}
								<ThemeToggle />
							</Flex>
						</Group>
					</Group>
				</Container>
			</AppShell.Header>

			<AppShell.Navbar py="md" px="lg">
				{links.map(({ href, label }) => (
					<UnstyledButton component={Link} key={href} p="sm" to={href}>
						{label}
					</UnstyledButton>
				))}
			</AppShell.Navbar>

			<AppShell.Main>
				<Container size="lg" mx="auto" py="md">
					{children}
				</Container>
				<Space h="lg" />
				<Footer />
			</AppShell.Main>
		</AppShell>
	);
}
