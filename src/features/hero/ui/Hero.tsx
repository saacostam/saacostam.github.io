import { Avatar, Box, Button, Flex, Text, Title } from "@mantine/core";
import { Link } from "react-router";
import { PuzzlePieceIcon } from "@/shared/icons";
import { genRoute, RouteName } from "@/shared/router/app";

export function Hero() {
	return (
		<Flex
			align={{ base: "center", sm: "end" }}
			bdrs="md"
			direction={{ base: "column", sm: "row" }}
			gap="xl"
			py="md"
			wrap="wrap"
		>
			<Avatar
				bd="solid 2px var(--mantine-primary-color-5)"
				size="12rem"
				src="https://github.com/saacostam.png"
			/>
			<Flex direction="column" gap="md" flex="1">
				<Box>
					<Title size="2.4rem">Santiago Acosta Meza</Title>
					<Text c="indigo" fw="bold" lh="1.3rem" size="1.25rem">
						Full Stack Software Engineer
					</Text>
				</Box>
				<Text size="md">
					Full-stack engineer focused on{" "}
					<Text c="indigo" component="span" inherit fw="bold">
						TypeScript
					</Text>{" "}
					systems, UI{" "}
					<Text c="indigo" component="span" inherit fw="bold">
						architecture
					</Text>
					, and{" "}
					<Text c="indigo" component="span" inherit fw="bold">
						maintainable
					</Text>{" "}
					web applications.
				</Text>
				<Flex direction="row" gap="md" wrap="wrap">
					<Button
						component={Link}
						leftSection={<PuzzlePieceIcon height="1.2rem" width="1.2rem" />}
						size="sm"
						to={genRoute({ name: RouteName.PROJECTS })}
					>
						My Projects
					</Button>
					<Button
						component="a"
						href="https://github.com/saacostam"
						size="sm"
						target="_blank"
						variant="outline"
					>
						My Github
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
