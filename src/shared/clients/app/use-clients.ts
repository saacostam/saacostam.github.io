import { useContext } from "react";
import { ClientsContext } from "./clients.context";

/**
 * Custom hook to access the application clients from the context.
 *
 * This hook provides a way to retrieve the current set of clients that are
 * provided via the `ClientsContext`. The context is expected to contain
 * an object conforming to the `IClients` interface.
 *
 * @returns {IClients} The current set of clients.
 */
export function useClients() {
	return useContext(ClientsContext);
}
