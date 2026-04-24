import type { PropsWithChildren } from "react";
import { SuspenseLoader } from "@/shared/components";
import { useAuthGuard } from "../app";

export function AuthGuard({ children }: PropsWithChildren) {
	const status = useAuthGuard();

	if (status === "success") return children;

	return <SuspenseLoader style={{ height: "100vh" }} />;
}
