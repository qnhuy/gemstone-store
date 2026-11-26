'use client'

import { Avatar, AvatarImage, Button } from '@/components/ui'
import { useAuth } from '@/features/auth/use-auth'
import Link from 'next/link'

export function UserMenu() {
	const { user } = useAuth()

	if (!user) {
		return (
			<Link href='/login'>
				<Button>Login</Button>
			</Link>
		)
	}

	return (
		<Avatar>
			<AvatarImage src='https://github.com/shadcn.png' alt={user.email} />
		</Avatar>
	)
}
