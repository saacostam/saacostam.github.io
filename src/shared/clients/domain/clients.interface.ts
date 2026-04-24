import type { IProjectClient } from "@/features/project/core/domain";

/**
 * Interface for managing various application clients.
 */
export interface IClients {
	project: IProjectClient;
}
