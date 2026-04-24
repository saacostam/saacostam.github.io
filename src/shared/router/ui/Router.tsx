import {
	type JSXElementConstructor,
	lazy,
	type PropsWithChildren,
	Suspense,
} from "react";
import { Outlet, Route, Routes } from "react-router";
import { SuspenseLoader } from "@/shared/components";
import { AppLayout, LandingLayout } from "@/shared/layout/ui";
import { genRoute, RouteName } from "@/shared/router/app";

// Lazy imports
const ErrorScreen = lazy(() => import("@/shared/screens/error-screen"));
const HomeScreen = lazy(() => import("@/shared/screens/home-screen"));
const LandingScreen = lazy(() => import("@/shared/screens/landing-screen"));

export interface RouterProps {
	Provider: JSXElementConstructor<PropsWithChildren>;
}

export function Router({ Provider }: RouterProps) {
	return (
		<Provider>
			<Suspense fallback={<SuspenseLoader style={{ height: "100vh" }} />}>
				<Routes>
					<Route element={<Outlet />}>
						<Route
							index
							element={
								<LandingLayout>
									<LandingScreen />
								</LandingLayout>
							}
						/>
						<Route path="app" element={<AppLayout>{<Outlet />}</AppLayout>}>
							<Route element={<HomeScreen />} index />
						</Route>
					</Route>
					<Route
						path="*"
						element={
							<ErrorScreen
								resetHref={genRoute({
									name: RouteName.LANDING,
								})}
							/>
						}
					/>
				</Routes>
			</Suspense>
		</Provider>
	);
}
