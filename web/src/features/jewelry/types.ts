import { CommonResponseData } from '@/common/types'

export interface Jewelry {
	id: string
	product_id: string
	sku: string
	asset_sku: string
	title: string
	collection: string
	category: string
	price: number
	price_formatted: string
	currency: string
	description: string | null
	badge: string | null
	available_materials: string | null
	material: string | null
	material_variants: string[] | null
	gemstones: string | null
	dimensions: string | null
	availability: string | null
	image_urls: string[]
	product_url: string
}

export type JewelryResponse = CommonResponseData & {
	data: Jewelry[]
}
