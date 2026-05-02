import {
	DomainError,
	DomainErrorType,
} from "@/shared/errors/domain/domain-error";

export function isNotFoundError(e: unknown) {
	if (!(e instanceof DomainError)) return false;
	return e.type === DomainErrorType.NOT_FOUND;
}
