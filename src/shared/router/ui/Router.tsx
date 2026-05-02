import {
	type JSXElementConstructor,
	lazy,
	type PropsWithChildren,
	Suspense,
} from "react";
import { Outlet, Route, Routes } from "react-router";
import { SuspenseLoader } from "@/shared/components";
import { AppLayout } from "@/shared/layout/ui";
import { genRoute, RouteName } from "@/shared/router/app";

// Lazy imports
const ErrorScreen = lazy(() => import("@/shared/screens/error-screen"));
const HomeScreen = lazy(() => import("@/shared/screens/home-screen"));
const ProjectsScreen = lazy(() => import("@/shared/screens/projects-screen"));
const ProjectByIdScreen = lazy(
	() => import("@/shared/screens/project-by-id-screen"),
);

export interface RouterProps {
	Provider: JSXElementConstructor<PropsWithChildren>;
}

export function Router({ Provider }: RouterProps) {
	return (
		<Provider>
			<Suspense fallback={<SuspenseLoader style={{ height: "100vh" }} />}>
				<Routes>
					<Route
						element={
							<AppLayout>
								<Outlet />
							</AppLayout>
						}
					>
						<Route index element={<HomeScreen />} />
						<Route path="projects" element={<ProjectsScreen />} />
						<Route path="p/:id" element={<ProjectByIdScreen />} />
					</Route>
					<Route
						path="*"
						element={
							<ErrorScreen
								resetHref={genRoute({
									name: RouteName.HOME,
								})}
							/>
						}
					/>
				</Routes>
			</Suspense>
		</Provider>
	);
}
