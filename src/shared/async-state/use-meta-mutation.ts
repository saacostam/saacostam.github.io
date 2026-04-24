import {
	type MutationFunctionContext,
	type UseMutationOptions,
	useMutation,
} from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

/**
 * Custom hook to extend React Query's `useMutation` by providing a mechanism
 * to handle mutation lifecycle callbacks (like `onMutate`, `onSuccess`, `onError`, and `onSettled`)
 * without overriding the mutation observer when multiple mutations are called in quick succession.
 *
 * This hook allows you to trigger mutations in quick succession without having the mutation context
 * or the mutation observer being reset unexpectedly.
 *
 * @param {UseMutationOptions<TData, TError, TVariables, TContext>} defaultOptions
 *   The default options passed to the underlying `useMutation` hook, including mutation lifecycle callbacks.
 * @returns {object} Returns the mutation object with an additional `fastMutate` method
 *   to trigger mutations without overwriting the mutation observer.
 */
export function useMetaMutation<
	TData = unknown,
	TError = unknown,
	TVariables = void,
	TContext = unknown,
>(defaultOptions: UseMutationOptions<TData, TError, TVariables, TContext>) {
	// Initializes the mutation using the provided options.
	const mutation = useMutation(defaultOptions);

	/**
	 * A fast mutation trigger function that allows executing mutations with additional options or context.
	 * This method ensures that the mutation context and lifecycle callbacks (`onMutate`, `onSuccess`, `onError`, `onSettled`)
	 * are not overwritten when multiple mutations are triggered in quick succession.
	 *
	 * @param {TVariables} variables The variables to be passed to the mutation.
	 * @param {UseMutationOptions<TData, TError, TVariables, TContext>} [instanceOptions]
	 *   Optional override options that allow customization for this specific mutation execution.
	 *   These can include custom lifecycle callbacks or mutation behavior.
	 * @returns {Promise<TData>} The result of the mutation operation.
	 * @throws {TError} If an error occurs during mutation, it is thrown and can
	 *   be caught by the caller.
	 */
	const fastMutate = useCallback(
		async (
			variables: TVariables,
			instanceOptions?: UseMutationOptions<TData, TError, TVariables, TContext>,
		): Promise<TData> => {
			let onMutateResult: TContext | undefined;
			let data: TData | undefined;
			let error: TError | null = null;

			// Capture internal context before mutation begins
			const internalCtx: MutationFunctionContext =
				{} as MutationFunctionContext;

			try {
				// On mutate callbacks
				const dCtx = await defaultOptions.onMutate?.(variables, internalCtx);
				const iCtx = await instanceOptions?.onMutate?.(variables, internalCtx);

				// Merge contexts safely
				onMutateResult = {
					...(dCtx ?? {}),
					...(iCtx ?? {}),
				} as TContext;

				// Execute mutation
				data = await mutation.mutateAsync(variables);

				// Success callbacks
				if (defaultOptions.onSuccess) {
					await defaultOptions.onSuccess(
						data,
						variables,
						onMutateResult,
						internalCtx,
					);
				}
				if (instanceOptions?.onSuccess) {
					await instanceOptions.onSuccess(
						data,
						variables,
						onMutateResult,
						internalCtx,
					);
				}

				// Return the mutated data
				return data;
			} catch (e) {
				error = e as TError;

				// Error callbacks
				if (defaultOptions.onError) {
					await defaultOptions.onError(
						error,
						variables,
						onMutateResult,
						internalCtx,
					);
				}
				if (instanceOptions?.onError) {
					await instanceOptions.onError(
						error,
						variables,
						onMutateResult,
						internalCtx,
					);
				}

				// Rethrow the error after processing
				throw error;
			} finally {
				// Settled callbacks, called regardless of success or failure
				if (defaultOptions.onSettled) {
					await defaultOptions.onSettled(
						data,
						error,
						variables,
						onMutateResult,
						internalCtx,
					);
				}
				if (instanceOptions?.onSettled) {
					await instanceOptions.onSettled(
						data,
						error,
						variables,
						onMutateResult,
						internalCtx,
					);
				}
			}
		},
		[defaultOptions, mutation],
	);

	// Memoize the return value to avoid unnecessary re-renders.
	return useMemo(
		() => ({
			...mutation,
			fastMutate,
		}),
		[mutation, fastMutate],
	);
}
