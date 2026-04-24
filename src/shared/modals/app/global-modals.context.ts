import { createContext } from "react";
import type { IGlobalModals } from "@/shared/modals/domain";

export const GlobalModalsContext = createContext(
	null as unknown as IGlobalModals,
);
