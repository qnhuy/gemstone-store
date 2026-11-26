import { Http } from '@/utils/http'
import { CreatePostDto, Post, PostResponse } from './types'

export class PostServerService {
	private static readonly http = new Http('/posts')

	static async findAll(page = 1, limit = 24): Promise<Post[]> {
		const response = await this.http.get<PostResponse>(`?_page=${page}&_per_page=${limit}`)
		return response.data
	}

	static async findById(id: string): Promise<Post> {
		return await this.http.get<Post>(`/${id}`)
	}

	static async create(data: CreatePostDto): Promise<Post> {
		return await this.http.post<Post>(data)
	}
}
