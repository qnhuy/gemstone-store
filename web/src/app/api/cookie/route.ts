import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
	const name = req.nextUrl.searchParams.get('name') ?? ''
	const cookieStore = await cookies()
	const value = cookieStore.get(name)?.value
	return NextResponse.json({ success: true, data: value })
}

export const POST = async (req: NextRequest) => {
	const { name, value, ttl } = await req.json()
	const cookieStore = await cookies()
	cookieStore.set(name, value, {
		httpOnly: true,
		maxAge: ttl,
	})

	return NextResponse.json({
		success: true,
	})
}
