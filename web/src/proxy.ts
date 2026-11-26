import { NextRequest, NextResponse, ProxyConfig } from 'next/server'

export function proxy(req: NextRequest) {
	const res = NextResponse.next()
	return res
}

export const config: ProxyConfig = {
	matcher: ['/posts/:path*'],
}
