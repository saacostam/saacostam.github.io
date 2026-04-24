import { DomainError, DomainErrorType } from "@/shared/errors/domain";
import type {
	IFetcherAdapter,
	IFetcherAdapterRequestConfig,
	IFetcherSideEffects,
} from "../../domain";

export class HttpFetcherAdapter implements IFetcherAdapter {
	private readonly baseUrl?: string;
	private readonly defaultHeaders?: Record<string, string>;

	constructor(
		private readonly sideEffects?: IFetcherSideEffects,
		options?: {
			baseUrl?: string;
			defaultHeaders?: Record<string, string>;
		},
	) {
		this.baseUrl = options?.baseUrl;
		this.defaultHeaders = options?.defaultHeaders;
	}

	private buildUrl(
		url: string,
		params?: Record<string, string | number | boolean | null | undefined>,
	): string {
		const fullUrl = this.baseUrl
			? `${this.baseUrl.replace(/\/$/, "")}/${url.replace(/^\//, "")}`
			: url;

		if (!params) return fullUrl;

		const query = new URLSearchParams(
			Object.entries(params).reduce<Record<string, string>>(
				(acc, [key, value]) => {
					if (value !== null && value !== undefined) {
						acc[key] = String(value);
					}
					return acc;
				},
				{},
			),
		).toString();

		return query ? `${fullUrl}?${query}` : fullUrl;
	}

	private buildHeaders(
		config?: IFetcherAdapterRequestConfig,
		hasBody = false,
	): HeadersInit {
		return {
			...(hasBody ? { "Content-Type": "application/json" } : {}),
			...this.defaultHeaders,
			...config?.headers,
		};
	}

	private async request<TResponse>(
		method: string,
		url: string,
		body?: unknown,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse> {
		const hasBody = body !== undefined;

		const response = await fetch(this.buildUrl(url, config?.params), {
			method,
			headers: this.buildHeaders(config, hasBody),
			body: hasBody ? JSON.stringify(body) : undefined,
		});

		if (!response.ok) {
			const errorBody = await response.text().catch(() => "");

			switch (response.status) {
				case 401:
					this.sideEffects?.onUnauthorized?.();
					throw new DomainError({
						type: DomainErrorType.UNAUTHORIZED,
						userMsg: "Unauthorized",
						msg: errorBody,
					});

				case 403:
					this.sideEffects?.onForbidden?.();
					throw new DomainError({
						type: DomainErrorType.FORBIDDEN,
						userMsg: "Forbidden",
						msg: errorBody,
					});

				case 404:
					this.sideEffects?.onNotFound?.();
					throw new DomainError({
						type: DomainErrorType.NOT_FOUND,
						userMsg: "Not found",
						msg: `[HttpFetcherAdapter.404]: ${errorBody}`,
					});

				default:
					throw new DomainError({
						type: DomainErrorType.UNKNOWN,
						userMsg: "Unexpected server error",
						msg: `HTTP ${response.status} ${response.statusText}: ${errorBody}`,
					});
			}
		}

		if (response.status === 204) {
			if (config?.responseType === "void") {
				return undefined as TResponse;
			}

			throw new DomainError({
				type: DomainErrorType.INVALID_RESPONSE,
				userMsg: "Unexpected empty response",
				msg: "Expected response body but received 204 No Content",
			});
		}

		const text = await response.text();

		if (!text) {
			throw new DomainError({
				type: DomainErrorType.INVALID_RESPONSE,
				userMsg: "Empty response body",
				msg: "Response body was empty but a payload was expected",
			});
		}

		if (config?.responseType === "string") {
			return text as TResponse;
		}

		try {
			return JSON.parse(text) as TResponse;
		} catch {
			throw new DomainError({
				type: DomainErrorType.INVALID_RESPONSE,
				userMsg: "Invalid server response",
				msg: `Invalid JSON response: ${text}`,
			});
		}
	}

	get<TResponse>(
		url: string,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse> {
		return this.request<TResponse>("GET", url, undefined, config);
	}

	post<TResponse, TBody = unknown>(
		url: string,
		body?: TBody,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse> {
		return this.request<TResponse>("POST", url, body, config);
	}

	put<TResponse, TBody = unknown>(
		url: string,
		body?: TBody,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse> {
		return this.request<TResponse>("PUT", url, body, config);
	}

	patch<TResponse, TBody = unknown>(
		url: string,
		body?: TBody,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse> {
		return this.request<TResponse>("PATCH", url, body, config);
	}

	delete<TResponse, TBody = unknown>(
		url: string,
		body?: TBody,
		config?: IFetcherAdapterRequestConfig,
	): Promise<TResponse> {
		return this.request<TResponse>("DELETE", url, body, config);
	}
}
