import { JewelryServerService } from '@/features/jewelry/server.service'
import Image from 'next/image'
import { AddToCartButton } from './add-to-cart-button'

export default async function JewelriesPage({}: PageProps<'/jewelries'>) {
	const jewelries = await JewelryServerService.findAll()

	return (
		<div>
			<ul className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-3'>
				{jewelries?.length > 0 &&
					jewelries.map((jewelry) => (
						<li key={jewelry.id} className='min-w-0'>
							<Image
								src={jewelry.image_urls[0]}
								alt={jewelry.title}
								width={300}
								height={340}
								loading='eager'
							/>
							<h3>{jewelry.collection}</h3>
							<h4>{jewelry.title}</h4>
							<p>${jewelry.price}</p>
							<AddToCartButton productId={jewelry.id} />
						</li>
					))}
			</ul>
		</div>
	)
}
