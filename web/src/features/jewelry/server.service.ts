import 'server-only'

import { Http } from '@/utils/http'
import { Jewelry, JewelryResponse } from './types'

export class JewelryServerService {
	private static readonly http = new Http('/jewelries')

	static async findAll(page = 1, limit = 24): Promise<Jewelry[]> {
		const response = await this.http.get<JewelryResponse>(`?_page=${page}&_per_page=${limit}`)
		return response.data
	}
}
