import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest, { params }: RouteContext<'/api/products/[id]'>) => {
	const { id } = await params
	return NextResponse.json({ id })
}
