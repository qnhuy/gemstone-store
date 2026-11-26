export const ENV = {
	SERVER_API_URL: process.env.NEXT_PUBLIC_SERVER_API,
	NEXTJS_API_URL: process.env.NEXT_PUBLIC_NEXTJS_API,
} as const

export const STORAGE_KEYS = {
	THEME: 'theme',
	AUTH_TOKEN: 'auth_token',
	REFRES_TOKEN: 'refresh_token',
} as const

export const SESSION_KEYS = {
	ACCESS_TOKEN: 'token',
	REFRESH_TOKEN: 'refresh_token',
}

export const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	CHANGE_EVENT: 'theme-change-event',
} as const

// Theme is: 'light' | 'dark'
export type Theme = (typeof THEMES)[keyof typeof THEMES]
