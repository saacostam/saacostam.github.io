import { useContext } from "react";
import { GlobalModalsContext } from "./global-modals.context";

export function useGlobalModals() {
	return useContext(GlobalModalsContext);
}
