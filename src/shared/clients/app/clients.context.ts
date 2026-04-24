import { createContext } from "react";
import type { IClients } from "../domain";

/**
 * Context to provide application clients throughout the component tree.
 */
export const ClientsContext = createContext(null as unknown as IClients);
