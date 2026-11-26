// các hàm tương ứng với các HTTP method
// response: sử dụng NextResponse

import { NextRequest, NextResponse } from 'next/server'

export const GET = (req: NextRequest) => {
	const searchParams = req.nextUrl.searchParams
	const q = searchParams.get('q')
	const xKey = req.headers.get('x-key')

	return NextResponse.json({
		message: 'success',
		q,
		xKey,
	})
}
