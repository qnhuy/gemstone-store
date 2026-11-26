import { Cart, Logo } from '@/components/shared'
import { ThemeToggle } from '@/components/shared/theme-toogle'
import Link from 'next/link'
import { UserMenu } from './user-menu'

interface HeaderLink {
	title: string
	href: string
}

const headerLinks: HeaderLink[] = [
	{ title: 'Home', href: '/' },
	{ title: 'Jewelry', href: '/jewelries' },
	{ title: 'Post', href: '/posts' },
	{ title: 'Animation', href: '/animation' },
]

export function PublicHeader() {
	return (
		<header className='w-full flex justify-between items-center px-4 py-2'>
			<Logo />
			<ul className='flex gap-3'>
				{headerLinks.map((link) => (
					<li key={link.title}>
						<Link href={link.href} className='text-sm'>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
			<div className='flex justify-between items-center gap-2'>
				<ThemeToggle />
				<Cart />
				<UserMenu />
			</div>
		</header>
	)
}
