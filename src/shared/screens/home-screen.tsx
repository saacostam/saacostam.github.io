import { Button, Flex, Text } from "@mantine/core";
import { TodoList } from "@/features/todo/ui";
import { useGlobalModals } from "@/shared/modals/app";
import { IModalType } from "../modals/domain";

export default function HomeScreen() {
	const modals = useGlobalModals();

	return (
		<Flex direction="column" gap="md">
			<Text size="xl" fw="bold" display="block">
				📌 Todo List
			</Text>
			<TodoList />

			<Button onClick={() => modals.set({ type: IModalType.TEST })}>
				Open Test Modal
			</Button>
		</Flex>
	);
}
