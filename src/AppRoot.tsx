import type { PropsWithChildren } from "react";
import { GlobalModalsProvider } from "@/shared/modals/ui";
import { Router } from "@/shared/router/ui";

export function AppRoot() {
	return <Router Provider={AppProviders} />;
}

export function AppProviders({ children }: PropsWithChildren) {
	return <GlobalModalsProvider>{children}</GlobalModalsProvider>;
}
