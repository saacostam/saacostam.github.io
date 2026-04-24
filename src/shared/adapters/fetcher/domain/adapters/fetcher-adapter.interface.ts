export interface IFetcherAdapter {
	get<TResponse>(
		url: string,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse>;
	post<TResponse, TBody = unknown>(
		url: string,
		body?: TBody,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse>;
	put<TResponse, TBody = unknown>(
		url: string,
		body?: TBody,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse>;
	patch<TResponse, TBody = unknown>(
		url: string,
		body?: TBody,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse>;
	delete<TResponse, TBody = unknown>(
		url: string,
		body?: TBody,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse>;
}

export interface IFetcherAdapterRequestConfig {
	headers?: Record<string, string>;
	params?: Record<string, string | number | boolean>;
	responseType?: "json" | "string" | "void";
}

export interface IFetcherSideEffects {
	onUnauthorized?: () => Promise<void> | void;
	onForbidden?: () => Promise<void> | void;
	onNotFound?: () => void;
}
