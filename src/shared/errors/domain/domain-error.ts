export enum DomainErrorType {
	UNKNOWN = "Unknown",
	BAD_REQUEST = "Bad Request",
	NOT_FOUND = "Not Found",
	UNAUTHORIZED = "Unauthorized",
	FORBIDDEN = "Forbidden",
	INVALID_RESPONSE = "Invalid Response",
}

export interface DomainErrorField {
	name: string;
	message: string;
}

export class DomainError extends Error {
	userMsg: string;
	type: DomainErrorType;
	fields?: DomainErrorField[];

	constructor(args: {
		msg: string;
		type: DomainErrorType;
		userMsg: string;
		fields?: DomainErrorField[];
	}) {
		super(args.msg);

		this.userMsg = args.userMsg;
		this.type = args.type;
		this.fields = args.fields;
	}
}
