import { beforeEach, describe, expect, it, vi } from "vitest";
import { DomainErrorType } from "@/shared/errors/domain";
import { HttpFetcherAdapter } from "./http-fetcher-adapter";

describe("HttpFetcherAdapter", () => {
	const fetchMock = vi.fn();

	beforeEach(() => {
		vi.resetAllMocks();
		// @ts-expect-error: mock
		global.fetch = fetchMock as unknown as typeof fetch;
	});

	const mockResponse = (
		status: number,
		body?: string,
		ok = status >= 200 && status < 300,
	) =>
		Promise.resolve({
			ok,
			status,
			statusText: "ERROR",
			text: vi.fn().mockResolvedValue(body ?? ""),
		});

	// ----------------------------
	// Success cases
	// ----------------------------

	it("parses JSON responses", async () => {
		fetchMock.mockReturnValue(mockResponse(200, JSON.stringify({ id: 1 })));

		const adapter = new HttpFetcherAdapter();
		const result = await adapter.get<{ id: number }>("/test");

		expect(result).toEqual({ id: 1 });
	});

	it("returns string when responseType is string", async () => {
		fetchMock.mockReturnValue(mockResponse(200, "plain text"));

		const adapter = new HttpFetcherAdapter();
		const result = await adapter.get<string>("/test", {
			responseType: "string",
		});

		expect(result).toBe("plain text");
	});

	it("allows 204 when responseType is void", async () => {
		fetchMock.mockReturnValue(mockResponse(204));

		const adapter = new HttpFetcherAdapter();
		const result = await adapter.post<void>("/logout", undefined, {
			responseType: "void",
		});

		expect(result).toBeUndefined();
	});

	// ----------------------------
	// Contract violations
	// ----------------------------

	it("throws if 204 is returned but responseType is not void", async () => {
		fetchMock.mockReturnValue(mockResponse(204));

		const adapter = new HttpFetcherAdapter();

		await expect(adapter.get("/test")).rejects.toMatchObject({
			type: DomainErrorType.INVALID_RESPONSE,
		});
	});

	it("throws if response body is empty", async () => {
		fetchMock.mockReturnValue(mockResponse(200, ""));

		const adapter = new HttpFetcherAdapter();

		await expect(adapter.get("/test")).rejects.toMatchObject({
			type: DomainErrorType.INVALID_RESPONSE,
		});
	});

	it("throws on invalid JSON", async () => {
		fetchMock.mockReturnValue(mockResponse(200, "{invalid"));

		const adapter = new HttpFetcherAdapter();

		await expect(adapter.get("/test")).rejects.toMatchObject({
			type: DomainErrorType.INVALID_RESPONSE,
		});
	});

	// ----------------------------
	// HTTP errors + side-effects
	// ----------------------------

	it("handles 401 and triggers onUnauthorized", async () => {
		const onUnauthorized = vi.fn();

		fetchMock.mockReturnValue(mockResponse(401, "nope", false));

		const adapter = new HttpFetcherAdapter({ onUnauthorized });

		await expect(adapter.get("/secure")).rejects.toMatchObject({
			type: DomainErrorType.UNAUTHORIZED,
		});

		expect(onUnauthorized).toHaveBeenCalledOnce();
	});

	it("handles 403 and triggers onForbidden", async () => {
		const onForbidden = vi.fn();

		fetchMock.mockReturnValue(mockResponse(403, "nope", false));

		const adapter = new HttpFetcherAdapter({ onForbidden });

		await expect(adapter.get("/secure")).rejects.toMatchObject({
			type: DomainErrorType.FORBIDDEN,
		});

		expect(onForbidden).toHaveBeenCalledOnce();
	});

	it("handles 404 and triggers onNotFound", async () => {
		const onNotFound = vi.fn();

		fetchMock.mockReturnValue(mockResponse(404, "missing", false));

		const adapter = new HttpFetcherAdapter({ onNotFound });

		await expect(adapter.get("/missing")).rejects.toMatchObject({
			type: DomainErrorType.NOT_FOUND,
		});

		expect(onNotFound).toHaveBeenCalledOnce();
	});

	it("maps unknown errors to UNKNOWN domain error", async () => {
		fetchMock.mockReturnValue(mockResponse(500, "boom", false));

		const adapter = new HttpFetcherAdapter();

		await expect(adapter.get("/boom")).rejects.toMatchObject({
			type: DomainErrorType.UNKNOWN,
		});
	});

	// ----------------------------
	// Request building
	// ----------------------------

	it("passes params as query string", async () => {
		fetchMock.mockReturnValue(mockResponse(200, JSON.stringify({ ok: true })));

		const adapter = new HttpFetcherAdapter(undefined, {
			baseUrl: "https://api.test",
		});

		await adapter.get("/users", {
			params: { page: 2, active: true },
		});

		expect(fetchMock).toHaveBeenCalledWith(
			"https://api.test/users?page=2&active=true",
			expect.any(Object),
		);
	});

	it("sets JSON body and content-type for POST", async () => {
		fetchMock.mockReturnValue(mockResponse(200, JSON.stringify({ ok: true })));

		const adapter = new HttpFetcherAdapter();

		await adapter.post("/test", { a: 1 });

		const [, options] = fetchMock.mock.calls[0];

		expect(options.method).toBe("POST");
		expect(options.body).toBe(JSON.stringify({ a: 1 }));
		expect(options.headers["Content-Type"]).toBe("application/json");
	});
});
