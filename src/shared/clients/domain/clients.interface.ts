import type { ILoginClient } from "@/features/login/domain";
import type { ITodoClient } from "@/features/todo/domain";

/**
 * Interface for managing various application clients.
 */
export interface IClients {
	loginClient: ILoginClient;
	todoClient: ITodoClient;
}
