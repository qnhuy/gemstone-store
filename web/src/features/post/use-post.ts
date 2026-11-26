import { PostServerService } from './server.service'
import { CreatePostDto } from './types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function usePosts() {
	return useQuery({
		queryKey: ['posts', 'list'],
		queryFn: () => PostServerService.findAll(),
		staleTime: 60 * 1000,
	})
}

export function usePostsPagination({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
	return useQuery({
		queryKey: ['posts', 'pagination', page],
		queryFn: () => PostServerService.findAll(page, limit),
		staleTime: 2 * 60 * 1000,
	})
}

export function usePostDetail({ id }: { id: string }) {
	return useQuery({
		queryKey: ['posts', 'detail', id],
		queryFn: () => PostServerService.findById(id),
		staleTime: 60 * 1000,
	})
}

export function useCreatePost() {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: CreatePostDto) => PostServerService.create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] })
			toast.success('Post create successfully')
		},
		onError: (err) => {
			toast.error('Create new post failed')
			console.log('Error: ', err)
		},
	})
}
