import type { FieldPath, FieldValues, UseFormSetError } from "react-hook-form";
import { DomainError } from "@/shared/errors/domain";

export const FormUtils = {
	handleApiErrors: <TFormValues extends FieldValues = FieldValues>(args: {
		error: unknown;
		setError: UseFormSetError<TFormValues>;
	}): void => {
		const { error, setError } = args;

		if (!(error instanceof DomainError)) {
			setError("root", {
				type: "server",
				message: "An unexpected error occurred.",
			});

			return;
		}

		const rootMessage = error.userMsg;

		// Set root message
		setError("root", {
			type: "server",
			message: rootMessage,
		});

		// Set field specific error
		error.fields?.forEach((field) => {
			setError(field.name as FieldPath<TFormValues>, {
				type: "server",
				message: field.message,
			});
		});
	},
};
