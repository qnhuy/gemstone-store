import { ShoppingCart } from 'lucide-react'
import { Button } from '../ui'
import Link from 'next/link'

export function Cart() {
	return (
		<Link href='/card'>
			<Button
				size='icon'
				className='rounded-full bg-background hover:bg-foreground/10 text-foreground'>
				<ShoppingCart />
			</Button>
		</Link>
	)
}
