'use server'

import z from 'zod'
import { loginSchema } from './schemas'
import { cookies } from 'next/headers'
import { SESSION_KEYS } from '@/constants'

const token = 'SESSION_TOKEN'
const refreshToken = 'SESSION_TOKEN'

interface LoginResponse {
	success: boolean
	message: string
	user: {
		email: string
		password: string
	} | null
}

export async function loginAction(data: z.infer<typeof loginSchema>): Promise<LoginResponse> {
	const parsed = loginSchema.safeParse(data)
	if (!parsed.success) {
		return { success: false, message: 'Invalid data', user: null }
	}

	const cookieStore = await cookies()
	cookieStore.set(SESSION_KEYS.ACCESS_TOKEN, token, {
		httpOnly: true,
		maxAge: 60 * 60,
	})
	cookieStore.set(SESSION_KEYS.REFRESH_TOKEN, refreshToken, {
		httpOnly: true,
		maxAge: 60 * 60 * 24 * 7,
	})
	return { success: true, message: 'Login successfully', user: parsed.data }
}

export async function logoutAction() {
	const cookieStore = await cookies()
	cookieStore.delete(SESSION_KEYS.ACCESS_TOKEN)
	cookieStore.delete(SESSION_KEYS.REFRESH_TOKEN)
}

export async function getAccessToken() {
	const cookieStore = await cookies()
	return cookieStore.get(SESSION_KEYS.ACCESS_TOKEN)?.value
}
