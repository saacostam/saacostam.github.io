import { useCallback, useMemo, useRef } from "react";
import { useAdapters } from "@/shared/adapters/core/app";
import type { ITodo, ITodoClient } from "../../domain";

export function useTodoClient(): ITodoClient {
	const { uuidAdapter } = useAdapters();
	const todosRef = useRef<ITodo[]>([]);

	const waitAndFail = useCallback(async () => {
		await new Promise((res) => setTimeout(res, 500));
		if (Math.random() < 0.2) throw new Error("Random network error");
	}, []);

	const createTodo: ITodoClient["createTodo"] = useCallback(
		async (args) => {
			await waitAndFail();

			const id = uuidAdapter.gen();
			const newTodo = { id, ...args.todo };
			todosRef.current = [...todosRef.current, newTodo];

			return {
				id,
			};
		},
		[uuidAdapter, waitAndFail],
	);

	const deleteTodo: ITodoClient["deleteTodo"] = useCallback(
		async (id) => {
			await waitAndFail();
			todosRef.current = todosRef.current.filter((t) => t.id !== id);
		},
		[waitAndFail],
	);

	const queryTodos: ITodoClient["queryTodos"] = useCallback(async () => {
		await waitAndFail();
		return [...todosRef.current];
	}, [waitAndFail]);

	const patchTodo: ITodoClient["patchTodo"] = useCallback(
		async (args) => {
			await waitAndFail();
			todosRef.current = todosRef.current.map((t) =>
				t.id === args.id ? { ...t, ...args.patch } : t,
			);
		},
		[waitAndFail],
	);

	return useMemo(
		() => ({
			createTodo,
			deleteTodo,
			queryTodos,
			patchTodo,
		}),
		[createTodo, deleteTodo, queryTodos, patchTodo],
	);
}
