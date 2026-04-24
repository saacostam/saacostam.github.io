export enum IModalType {
	NONE = "NONE",
	TEST = "TEST",
}

export type IModal =
	| {
			type: IModalType.NONE;
	  }
	| {
			type: IModalType.TEST;
	  };

export interface IGlobalModals {
	modal: IModal;
	set: (modal: IModal) => void;
}
