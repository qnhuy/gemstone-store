'use client'

import { Button, ControlledInput, FieldGroup } from '@/components/ui'
import { useCreatePost } from '@/features/post/use-post'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const createPostSchema = z.object({
	title: z.string('Post title is required').min(2, 'Post title must has at least 2 characters'),
})

export function CreatePostForm() {
	const { control, handleSubmit, reset } = useForm<z.infer<typeof createPostSchema>>({
		resolver: zodResolver(createPostSchema),
		defaultValues: {
			title: '',
		},
	})

	const { mutate, isPending } = useCreatePost()

	async function onSubmit(data: z.infer<typeof createPostSchema>) {
		mutate({ title: data.title, userId: 1 })
		reset()
	}

	return (
		<div>
			<h4>Create new post</h4>

			<form onSubmit={handleSubmit(onSubmit)}>
				<FieldGroup>
					<ControlledInput
						control={control}
						name='title'
						id='title'
						label='Title'
						placeholder='Enter post title'
					/>
					<Button type='submit'>{isPending ? 'Submitting...' : 'Submit'}</Button>
				</FieldGroup>
			</form>
		</div>
	)
}
