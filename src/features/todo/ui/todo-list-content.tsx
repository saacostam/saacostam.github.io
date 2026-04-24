import {
	ActionIcon,
	Button,
	Card,
	Checkbox,
	CloseIcon,
	Divider,
	Flex,
	Text,
	TextInput,
} from "@mantine/core";
import { useQueryClient } from "@tanstack/react-query";
import { type FormEventHandler, useRef } from "react";
import { useAdapters } from "@/shared/adapters/core/app";
import { type OptimDataSetter, QueryKeys } from "@/shared/async-state";
import { EmptyQuery } from "@/shared/components";
import { getErrorCopy } from "@/shared/errors/domain";
import {
	useMutationCreateTodo,
	useMutationDeleteTodo,
	useMutationPatchTodo,
} from "../app";
import type { ITodo } from "../domain";

export interface TodoListContentProps {
	todos: ITodo[];
	optimSetTodos: OptimDataSetter<ITodo[]>;
}

export function TodoListContent({
	todos,
	optimSetTodos,
}: TodoListContentProps) {
	const {
		analyticsAdapter,
		errorMonitoringAdapter,
		notificationAdapter,
		uuidAdapter,
	} = useAdapters();

	const labelInputRef = useRef<HTMLInputElement>(null);

	const queryClient = useQueryClient();
	const createTodo = useMutationCreateTodo();
	const deleteTodo = useMutationDeleteTodo();
	const patchTodo = useMutationPatchTodo();

	const onCreate: FormEventHandler = (e) => {
		e.preventDefault();

		const label = labelInputRef.current?.value;
		if (!label) return;

		if (labelInputRef.current) {
			labelInputRef.current.value = "";
			labelInputRef.current.focus();
		}

		const newTodo: ITodo = {
			id: uuidAdapter.gen(),
			label,
			done: false,
		};

		optimSetTodos((_prev) => {
			const prev = _prev === undefined ? [] : _prev;
			return [...prev, newTodo];
		});

		createTodo.fastMutate(
			{
				todo: newTodo,
			},
			{
				onSuccess: (createdTodo) => {
					analyticsAdapter.trackEvent({
						name: "createTodo",
						payload: {
							todoId: createdTodo.id,
						},
					});
				},
				onError: (e) => {
					notificationAdapter.notify({
						type: "error",
						msg: getErrorCopy(
							e,
							"Unnable to create todo item. Please try again",
						),
					});

					errorMonitoringAdapter.report(e, {
						where: "TodoListContent.onCreate.createTodo.fastMutate",
					});
				},
				onSettled: () =>
					queryClient.invalidateQueries({
						queryKey: [QueryKeys.QUERY_TODOS],
					}),
			},
		);
	};

	const onDelete = (id: string) => {
		optimSetTodos((prev) => prev?.filter((todo) => todo.id !== id));

		deleteTodo.fastMutate(id, {
			onSuccess: () => {
				analyticsAdapter.trackEvent({
					name: "deleteTodo",
					payload: {
						todoId: id,
					},
				});
			},
			onError: (e) => {
				notificationAdapter.notify({
					type: "error",
					msg: getErrorCopy(e, "Unnable to delete todo item. Please try again"),
				});

				errorMonitoringAdapter.report(e, {
					where: "TodoListContent.onDelete.deleteTodo.fastMutate",
				});
			},
			onSettled: () =>
				queryClient.invalidateQueries({
					queryKey: [QueryKeys.QUERY_TODOS],
				}),
		});
	};

	const onToggleCheck = (id: string, checked: boolean) => {
		optimSetTodos((prev) =>
			prev?.map((todo) => (todo.id === id ? { ...todo, done: checked } : todo)),
		);

		patchTodo.fastMutate(
			{
				id,
				patch: {
					done: checked,
				},
			},
			{
				onError: (e) => {
					notificationAdapter.notify({
						type: "error",
						msg: getErrorCopy(
							e,
							"Unnable to update todo item. Please try again",
						),
					});

					errorMonitoringAdapter.report(e, {
						where: "TodoListContent.onToggleCheck.patchTodo.fastMutate",
					});
				},
				onSettled: () =>
					queryClient.invalidateQueries({
						queryKey: [QueryKeys.QUERY_TODOS],
					}),
			},
		);
	};

	return (
		<Flex direction="column" gap="md">
			{todos.length <= 0 ? (
				<Card withBorder>
					<EmptyQuery description="Create a todo" />
				</Card>
			) : (
				todos.map((todo) => (
					<Card key={todo.id} p="xs" withBorder>
						<Flex align="center" gap="md">
							<Text
								style={{ flex: 1, minWidth: 0 }}
								td={todo.done ? "line-through" : undefined}
							>
								{todo.label}
							</Text>
							<Checkbox
								checked={todo.done}
								onClick={() => onToggleCheck(todo.id, !todo.done)}
							/>
							<ActionIcon
								color="red"
								onClick={() => onDelete(todo.id)}
								size="sm"
							>
								<CloseIcon />
							</ActionIcon>
						</Flex>
					</Card>
				))
			)}
			<Divider />
			<form onSubmit={onCreate}>
				<Flex align="center" gap="md">
					<TextInput
						placeholder="✍️ Todo..."
						ref={labelInputRef}
						required
						style={{ flex: 1, minWidth: 0 }}
					/>
					<Button type="submit">Create</Button>
				</Flex>
			</form>
		</Flex>
	);
}
