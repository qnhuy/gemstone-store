'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { Card, CardHeader, CardTitle, Badge } from '@/components/ui'
import { Paging } from '@/components/shared'
import { usePostsPagination } from '@/features/post/use-post'
import { PostServerService } from '@/features/post/server.service'

const limit = 10

export function PostList() {
	const [page, setPage] = useState<number>(1)
	const { data } = usePostsPagination({ page, limit })
	const queryClient = useQueryClient()

	const maxPage = data?.length ? Math.ceil(data.length / limit) : 1

	useEffect(() => {
		if (page < maxPage) return
		queryClient.query({
			queryKey: ['post', 'pagination', page + 1],
			queryFn: () => PostServerService.findAll(page + 1),
		})
	}, [page, queryClient, maxPage])

	return (
		<div>
			<ul className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),10fr))] gap-4'>
				{data?.map((post) => (
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

			<Paging
				currentPage={page}
				maxPage={maxPage}
				onPageBack={() => setPage(page - 1)}
				onPageNext={() => setPage(page + 1)}
				onPageSelect={(selectedPage) => setPage(selectedPage)}
			/>
		</div>
	)
}
