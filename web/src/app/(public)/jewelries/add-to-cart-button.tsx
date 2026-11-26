import { Button } from '@/components/ui'
import { ShoppingCartPlus } from 'lucide-react'

export function AddToCartButton({ productId }: { productId: string }) {
	return (
		<Button size='icon' aria-label='add to cart'>
			<ShoppingCartPlus />
		</Button>
	)
}
