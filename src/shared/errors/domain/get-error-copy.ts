import { DomainError } from "./domain-error";

const DEFAULT_MESSAGE = "Something went wrong! Please try again.";

export function getErrorCopy(error: unknown, defaultMsg?: string) {
	if (error instanceof DomainError && error.userMsg) {
		return error.userMsg;
	}

	return defaultMsg ?? DEFAULT_MESSAGE;
}
