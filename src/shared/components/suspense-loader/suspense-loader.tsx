import { Flex, Loader } from "@mantine/core";
import type { CSSProperties } from "react";

export interface SuspenseLoaderProps {
	style?: CSSProperties;
}

export function SuspenseLoader({ style }: SuspenseLoaderProps) {
	return (
		<Flex
			align="center"
			direction="column"
			justify="center"
			style={style}
			py="sm"
			data-testid="suspense-loader"
		>
			<Loader size="xl" type="dots" />
		</Flex>
	);
}
