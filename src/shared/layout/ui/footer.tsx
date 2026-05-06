import {
	ActionIcon,
	Anchor,
	Box,
	Container,
	Divider,
	Grid,
	GridCol,
	Group,
	List,
	ListItem,
	Space,
	Text,
} from "@mantine/core";
import { useMemo } from "react";
import { Link } from "react-router";
import { NETWORKING_LINKS } from "@/features/networking/app";
import { useAdapters } from "@/shared/adapters/core/app";
import { IThemeVariant } from "@/shared/adapters/theme/domain";
import { genRoute, RouteName } from "@/shared/router/app";

const NAV_LINKS = [
	{ label: "Home", name: RouteName.HOME },
	{ label: "Projects", name: RouteName.PROJECTS },
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
			NETWORKING_LINKS.map(({ icon, href }) => (
				<ActionIcon
					key={href}
					color="base"
					component="a"
					href={href}
					variant="outline"
					target="_blank"
				>
					{icon}
				</ActionIcon>
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
					<Grid gutter="md">
						<GridCol span={{ base: 12, md: 8 }}>
							<Text fw="bold" size="sm">
								Santiago Acosta Meza
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
							<Group gap="xs">{networkingLinksContent}</Group>
						</GridCol>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
}
