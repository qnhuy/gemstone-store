import { CommonResponseData } from '@/common/types'

export interface Post {
	id: number
	title: string
	body: string
	tags: string[]
	reactions: {
		likes: number
		dislikes: number
	}
	views: number
	userId: number
}

export type CreatePostDto = Partial<Omit<Post, 'id' | 'reactions' | 'views'>>

export type PostResponse = CommonResponseData & {
	data: Post[]
}
