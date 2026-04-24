import type { PropsWithChildren } from "react";
import { AuthGuard } from "@/features/auth/ui";
import { GlobalModalsProvider } from "@/shared/modals/ui";
import { Router } from "@/shared/router/ui";

export function AppRoot() {
	return <Router Provider={AppProviders} />;
}

export function AppProviders({ children }: PropsWithChildren) {
	return (
		<AuthGuard>
			<GlobalModalsProvider>{children}</GlobalModalsProvider>
		</AuthGuard>
	);
}
