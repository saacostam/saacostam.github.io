import { createContext } from "react";
import type { IAdapters } from "../domain";

/**
 * Context to provide application adapters throughout the component tree.
 */
export const AdaptersContext = createContext(null as unknown as IAdapters);
