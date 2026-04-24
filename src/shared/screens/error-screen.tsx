import { Button, Container, Space, Text, Title } from "@mantine/core";
import { Link } from "react-router";

export interface ErrorPageProps {
	resetHref: string;
}

export default function ErrorPage({ resetHref }: ErrorPageProps) {
	return (
		<Container size="sm" py="xl" ta="center">
			<Title size="h2" order={4}>
				Page Not Found
			</Title>
			<Space h="md" />
			<Title size="h1" order={5} style={{ fontSize: "48px" }}>
				404
			</Title>
			<Space h="xs" />
			<Text size="sm" fw={500}>
				Sorry, we couldn&apos;t find the page you&apos;re looking for.
			</Text>
			<Space h="md" />
			<Button component={Link} to={resetHref} mx="auto" size="sm">
				Back To Home
			</Button>
		</Container>
	);
}
