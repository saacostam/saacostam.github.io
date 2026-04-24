import type { ITodo } from "../entities";

export interface ITodoClient {
	createTodo(
		args: ITodoClientPayload["CreateTodoIn"],
	): Promise<ITodoClientPayload["CreateTodoOut"]>;
	deleteTodo(id: string): Promise<void>;
	queryTodos(): Promise<ITodo[]>;
	patchTodo(args: ITodoClientPayload["PatchTodoIn"]): Promise<void>;
}

export interface ITodoClientPayload {
	CreateTodoIn: {
		todo: Omit<ITodo, "id">;
	};
	CreateTodoOut: {
		id: string;
	};
	PatchTodoIn: {
		id: string;
		patch: Partial<Omit<ITodo, "id">>;
	};
}
