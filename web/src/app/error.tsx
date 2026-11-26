'use client'

import { BackButton } from '@/components/ui'

interface ErrorPageProps {
	error: Error & { digest?: string }
	reset: () => void
}

export default function ErrorPage({ error }: ErrorPageProps) {
	return (
		<div className='min-h-screen flex items-center justify-center flex-col gap-3'>
			<h1 className='block'>Error: {error.message}</h1>
			<p className='text-sm'>Please try again later</p>
			<div>
				<BackButton />
			</div>
		</div>
	)
}
