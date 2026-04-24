import { type PropsWithChildren, useMemo } from "react";
import { useLoginClient } from "@/features/login/infra";
import { useTodoClient } from "@/features/todo/infra";
import { ClientsContext } from "../app";
import type { IClients } from "../domain";

/**
 * Provider component to supply application clietns to the component tree.
 *
 * This component wraps its children with the necessary context provider (`ClientsContext.Provider`)
 * to make clients available throughout the app.
 *
 * @param {PropsWithChildren} props - The props object containing the children to be rendered.
 *
 * @returns {JSX.Element} A context provider wrapping the children with available clients.
 */
export function ClientsProvider({ children }: PropsWithChildren) {
	const loginClient = useLoginClient();
	const todoClient = useTodoClient();

	const clients: IClients = useMemo(
		() => ({
			loginClient,
			todoClient,
		}),
		[loginClient, todoClient],
	);

	return (
		<ClientsContext.Provider value={clients}>
			{children}
		</ClientsContext.Provider>
	);
}
