import { Button, Flex } from "@mantine/core";

export interface TestModalProps {
	onClose: () => void;
}

export function TestModal({ onClose }: TestModalProps) {
	return (
		<Flex justify="end" gap="md" wrap="wrap">
			<Button onClick={onClose} size="sm" variant="light">
				Close Modal
			</Button>
		</Flex>
	);
}
