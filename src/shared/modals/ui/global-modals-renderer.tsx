import { Modal, Skeleton } from "@mantine/core";
import { useCallback } from "react";
import { useGlobalModals } from "@/shared/modals/app";
import { IModalType } from "@/shared/modals/domain";
import { TestModal } from "./TestModal";

export function GlobalModalsRenderer() {
	const { modal, set } = useGlobalModals();

	const onClose = useCallback(() => {
		set({ type: IModalType.NONE });
	}, [set]);

	return (
		<section>
			<Modal opened={modal.type === IModalType.TEST} onClose={onClose}>
				{modal.type === IModalType.TEST ? (
					<TestModal onClose={onClose} />
				) : (
					<Skeleton w="100%" height="50px" />
				)}
			</Modal>
		</section>
	);
}
