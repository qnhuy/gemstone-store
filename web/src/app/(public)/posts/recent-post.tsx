'use client'

import { Badge, Card, CardHeader, CardTitle } from '@/components/ui'
import { usePostsPagination } from '@/features/post/use-post'
import Link from 'next/link'

export function RecentPost() {
	const { data } = usePostsPagination({ limit: 5 })

	return (
		<div>
			<h3>Recent posts</h3>

			<ul className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),10fr))] gap-4'>
				{data?.posts.map((post) => (
					<li key={post.id} className='min-w-0'>
						<Link href={`/posts/${post.id}`} className='block h-full'>
							<Card className='h-full'>
								<CardHeader>
									<CardTitle>{post.title}</CardTitle>
									<div className='flex gap-2'>
										{post.tags.map((tag, index) => (
											<Badge key={index}>{tag}</Badge>
										))}
									</div>
								</CardHeader>
							</Card>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
