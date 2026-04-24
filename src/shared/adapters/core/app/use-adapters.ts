import { useContext } from "react";
import { AdaptersContext } from "./adapters-context";

/**
 * Custom hook to access the application adapters from the context.
 *
 * This hook provides a way to retrieve the current set of adapters that are
 * provided via the `AdaptersContext`. The context is expected to contain
 * an object conforming to the `IAdapters` interface.
 *
 * @returns {IAdapters} The current set of adapters.
 */
export function useAdapters() {
	return useContext(AdaptersContext);
}
