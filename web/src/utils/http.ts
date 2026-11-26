import { ENV } from '@/constants'

const METHOD = {
	GET: 'get',
	POST: 'post',
	PUT: 'put',
	PATCH: 'patch',
	DELETE: 'delete',
} as const

type Method = (typeof METHOD)[keyof typeof METHOD]

export class Http {
	private readonly prefixUrl: string

	constructor(prefixUrl = '/') {
		this.prefixUrl = prefixUrl
	}

	async performFetch<T>(method: Method, url = '', body?: unknown, config?: RequestInit) {
		const serializedBody = body ? JSON.stringify(body) : undefined
		const headers: HeadersInit = body ? { 'Content-Type': 'application/json' } : {}

		const fullUrl = `${ENV.SERVER_API_URL}${this.prefixUrl}${url}`
		const response = await fetch(fullUrl, {
			method,
			body: serializedBody,
			...config,
			headers: {
				...headers,
				...config?.headers,
			},
		})

		if (!response.ok) {
			throw new Error(`Error to ${method} ${fullUrl}`)
		}

		return (await response.json()) as T
	}

	async get<T>(url?: string, config?: RequestInit) {
		return await this.performFetch<T>(METHOD.GET, url, undefined, config)
	}

	async post<T>(body: unknown, url?: string, config?: RequestInit) {
		return await this.performFetch<T>(METHOD.POST, url, body, config)
	}

	async put<T>(body: unknown, url?: string, config?: RequestInit) {
		return await this.performFetch<T>(METHOD.PUT, url, body, config)
	}

	async patch<T>(body: unknown, url?: string, config?: RequestInit) {
		return await this.performFetch<T>(METHOD.PATCH, url, body, config)
	}

	async delete<T>(url: string, config?: RequestInit) {
		return await this.performFetch<T>(METHOD.DELETE, url, undefined, config)
	}
}
