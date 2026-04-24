import { useRetry } from "@/shared/async-state";
import { QueryError, SuspenseLoader } from "@/shared/components";
import { useMetaQueryTodos } from "../app";
import { TodoListContent } from "./todo-list-content";

export function TodoList() {
	const todoQuery = useMetaQueryTodos();
	const todos = todoQuery.useQuery();

	const retryTodoQuery = useRetry(todos.refetch, todos.isLoading);

	if (todos.isError)
		return (
			<QueryError
				msg="Unable to load todos"
				retry={retryTodoQuery}
				error={todos.error}
				where="[TodoList] todosQuery failed"
			/>
		);
	if (todos.isSuccess)
		return (
			<TodoListContent
				todos={todos.data}
				optimSetTodos={todoQuery.setOptimisticData}
			/>
		);

	return <SuspenseLoader style={{ height: "8rem" }} />;
}
