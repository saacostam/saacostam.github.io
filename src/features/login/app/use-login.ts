import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import z from "zod";
import { useAdapters } from "@/shared/adapters/core/app";
import { genRoute, RouteName } from "@/shared/router/app";
import { FormUtils } from "@/shared/utils/form";
import { useMutateLogin } from "./use-mutate-login";

const loginSchema = z.object({
	username: z.string().min(1, { message: "Username is required" }).max(48),
	password: z.string().min(1, { message: "Password is required" }).max(48),
});

export function useLogin() {
	const nav = useNavigate();

	const { analyticsAdapter, sessionAdapter, errorMonitoringAdapter } =
		useAdapters();

	const form = useForm({
		defaultValues: {
			username: "",
			password: "",
		},
		resolver: zodResolver(loginSchema),
	});

	const login = useMutateLogin();

	const onSubmit = useCallback(
		(data: ReturnType<typeof loginSchema.parse>) => {
			login.mutate(
				{
					...data,
				},
				{
					onSuccess: (data) => {
						sessionAdapter.setToken(data.token);
						nav(genRoute({ name: RouteName.HOME }));

						analyticsAdapter.trackEvent({
							name: "login",
							payload: {
								success: true,
							},
						});
					},
					onError: (error) => {
						FormUtils.handleApiErrors({
							error,
							setError: form.setError,
						});

						errorMonitoringAdapter.report(error, {
							where: "useLogin.onSubmit.login.mutate",
						});

						analyticsAdapter.trackEvent({
							name: "login",
							payload: {
								success: false,
							},
						});
					},
				},
			);
		},
		[
			analyticsAdapter.trackEvent,
			sessionAdapter.setToken,
			errorMonitoringAdapter.report,
			form.setError,
			login,
			nav,
		],
	);

	return useMemo(
		() => ({
			form,
			isLoading: login.isPending,
			onSubmit,
		}),
		[form, login.isPending, onSubmit],
	);
}
