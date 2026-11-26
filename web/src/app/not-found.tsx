'use client'

import { usePathname } from 'next/navigation'
import { BackButton, Button } from '../components/ui'
import Link from 'next/link'

export default function NotFoundPage() {
	const pathname = usePathname()

	return (
		<div className='min-h-screen flex flex-col items-center justify-center gap-3'>
			<h1>404 Not Found - You are lost</h1>
			<p>There is no page at {pathname}</p>
			<div className='flex gap-4'>
				<BackButton />
				<Button>
					<Link href='/'>Home</Link>
				</Button>
			</div>
		</div>
	)
}
