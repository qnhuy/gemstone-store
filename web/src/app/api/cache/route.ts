import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const DELETE = async (req: NextRequest) => {
	const { type, value } = await req.json()
	if (type === 'path') {
		revalidatePath(value)
		return NextResponse.json({
			success: true,
		})
	}

	return NextResponse.json({ success: true }, { status: 500 })
}
