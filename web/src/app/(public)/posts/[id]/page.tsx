import { Badge } from '@/components'
import { Post } from '@/types/post.type'
import { Http } from '@/utils/http'
import { ThumbsDown, ThumbsUp } from 'lucide-react'

const getPostById = async (id: string): Promise<Post> => {
	return (await Http.get(`/posts/${id}`, { cache: 'force-cache' })) as Post
}

export default async function PostDetailPage({ params }: PageProps<'/posts/[id]'>) {
	const { id } = await params
	const post = await getPostById(id)

	return (
		<div>
			<p>Views: {post.views}</p>
			<h2>{post.title}</h2>
			<div>
				{post.tags.map((tag, index) => (
					<Badge key={index}>{tag}</Badge>
				))}
			</div>
			<p>{post.body}</p>

			<div>
				<Badge>
					<ThumbsUp />
					{post.reactions.likes}
				</Badge>
				<Badge>
					<ThumbsDown />
					{post.reactions.dislikes}
				</Badge>
			</div>
		</div>
	)
}
