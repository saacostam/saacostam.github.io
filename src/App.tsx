import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HashRouter } from "react-router";
import { AdaptersProvider } from "@/shared/adapters/core/ui";
import { ClientsProvider } from "@/shared/clients/ui";
import { MainErrorBoundary } from "@/shared/errors/ui";
import { AppRoot } from "./AppRoot";
import { theme } from "./mantine-theme";

const queryClient = new QueryClient();

function App() {
	return (
		<MainErrorBoundary>
			<ColorSchemeScript defaultColorScheme="auto" />
			<MantineProvider defaultColorScheme="auto" theme={theme}>
				<QueryClientProvider client={queryClient}>
					<HashRouter>
						<AdaptersProvider>
							<ClientsProvider>
								<AppRoot />
							</ClientsProvider>
						</AdaptersProvider>
						<ReactQueryDevtools />
					</HashRouter>
				</QueryClientProvider>
				<Notifications />
			</MantineProvider>
		</MainErrorBoundary>
	);
}

export default App;
