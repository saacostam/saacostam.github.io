import { type PropsWithChildren, useMemo, useState } from "react";
import { GlobalModalsContext } from "@/shared/modals/app";
import { type IGlobalModals, IModalType } from "@/shared/modals/domain";
import { GlobalModalsRenderer } from "./global-modals-renderer";

export function GlobalModalsProvider({ children }: PropsWithChildren) {
	const [modal, setModal] = useState<IGlobalModals["modal"]>({
		type: IModalType.NONE,
	});

	const globalModals: IGlobalModals = useMemo(
		() => ({
			modal,
			set: setModal,
		}),
		[modal],
	);

	return (
		<GlobalModalsContext.Provider value={globalModals}>
			{children}
			<GlobalModalsRenderer />
		</GlobalModalsContext.Provider>
	);
}
