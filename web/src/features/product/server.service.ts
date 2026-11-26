import { Http } from '@/utils/http'
import { Product, ProductResponse } from './types'

export class ProductServerService {
	private static readonly http = new Http('/products')

	static async findAll(page = 1, limit = 24): Promise<Product[]> {
		const response = await this.http.get<ProductResponse>(`?_page=${page}&_per_page=${limit}`)
		return response.data
	}
}
