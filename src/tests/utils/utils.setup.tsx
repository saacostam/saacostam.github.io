import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { AdaptersContext } from "@/shared/adapters/core/app";
import type { IAdapters } from "@/shared/adapters/core/domain";
import { ClientsContext } from "@/shared/clients/app";
import type { IClients } from "@/shared/clients/domain";

// CLIENTS
export type MockClients = {
	[K in keyof IClients]?: Partial<IClients[K]>;
};

interface ClientsProviderProps {
	children: ReactNode;
	mock?: MockClients;
}

export function MockClientsProvider({ children, mock }: ClientsProviderProps) {
	const value = mock as IClients;
	return (
		<ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
	);
}

// ADAPTERS
export type MockAdapters = {
	[K in keyof IAdapters]?: Partial<IAdapters[K]>;
};

interface AdapterProviderProps {
	children: ReactNode;
	mock?: MockAdapters;
}

export function MockAdaptersProvider({ children, mock }: AdapterProviderProps) {
	const value = mock as IAdapters;
	return (
		<AdaptersContext.Provider value={value}>
			{children}
		</AdaptersContext.Provider>
	);
}

// NON INVERTED DEPENDENCIES
// ✅ A fresh QueryClient per test avoids cache bleed between tests
const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false, // don't retry by default in tests
			},
		},
	});

interface ProvidersProps {
	children: ReactNode;
}

export function TestProviders({ children }: ProvidersProps) {
	const queryClient = createTestQueryClient();

	return (
		<MantineProvider>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>{children}</BrowserRouter>
			</QueryClientProvider>
		</MantineProvider>
	);
}
