import type { IProjectClient } from "@/features/project/domain";

/**
 * Interface for managing various application clients.
 */
export interface IClients {
	project: IProjectClient;
}
