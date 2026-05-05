import {
	Anchor,
	Box,
	Container,
	Divider,
	Flex,
	Grid,
	GridCol,
	List,
	ListItem,
	Space,
	Text,
	ThemeIcon,
} from "@mantine/core";
import { useMemo } from "react";
import { Link } from "react-router";
import { useAdapters } from "@/shared/adapters/core/app";
import { IThemeVariant } from "@/shared/adapters/theme/domain";
import { CommandLineIcon } from "@/shared/icons";
import { genRoute, RouteName } from "@/shared/router/app";

const NAV_LINKS = [
	{ label: "Home", name: RouteName.HOME },
	{ label: "Projects", name: RouteName.PROJECTS },
] as const;

const NETWORKING_LINKS = [
	{ label: "Github", href: "https://github.com/saacostam" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/santiago-acosta-meza/?locale=en-US",
	},
] as const;

export function Footer() {
	const { themeAdapter } = useAdapters();

	const navLinksContent = useMemo(
		() =>
			NAV_LINKS.map(({ label, name }) => (
				<ListItem key={name}>
					<Anchor c="dimmed" component={Link} size="sm" to={genRoute({ name })}>
						{label}
					</Anchor>
				</ListItem>
			)),
		[],
	);

	const networkingLinksContent = useMemo(
		() =>
			NETWORKING_LINKS.map(({ label, href }) => (
				<ListItem key={href}>
					<Anchor
						c="dimmed"
						component="a"
						href={href}
						size="sm"
						target="_blank"
					>
						{label}
					</Anchor>
				</ListItem>
			)),
		[],
	);

	return (
		<Box>
			<Divider />
			<Box
				bg={themeAdapter.theme === IThemeVariant.DARK ? "dark.8" : "gray.1"}
				p="lg"
			>
				<Container size="lg" mx="auto">
					<Flex align="center" direction="row" gap="xs">
						<ThemeIcon p="0" size="sm" variant="transparent">
							<CommandLineIcon />
						</ThemeIcon>
						<Text c="var(--mantine-primary-color-5)" fw="bold" size="md">
							Santiago Acosta Meza
						</Text>
					</Flex>
					<Space h="md" />
					<Grid gutter="md">
						<GridCol span={{ base: 12, md: 8 }}>
							<Text fw="bold" size="sm">
								Full Stack Software Engineer
							</Text>
							<Space h="md" />
							<Text c="dimmed" size="sm">
								I build clean, maintainable web applications, interactive
								systems, and music-driven tools. This portfolio is a snapshot of
								that work.
							</Text>
						</GridCol>
						<GridCol span={{ base: 6, md: 2 }}>
							<Text fw="bold" size="sm">
								Navigation
							</Text>
							<Space h="md" />
							<List icon="•">{navLinksContent}</List>
						</GridCol>
						<GridCol span={{ base: 6, md: 2 }}>
							<Text fw="bold" size="sm">
								Networking
							</Text>
							<Space h="md" />
							<List icon="•">{networkingLinksContent}</List>
						</GridCol>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
}
