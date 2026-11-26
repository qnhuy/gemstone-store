import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { loginSchema } from './schemas'
import { loginAction } from './actions'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useAuth() {
	const [user, setUser] = useState<z.infer<typeof loginSchema> | null>(null)
	const router = useRouter()

	const { handleSubmit, control } = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	useEffect(() => {}, [])

	const onSubmit = handleSubmit(async (data: z.infer<typeof loginSchema>) => {
		const res = await loginAction(data)
		if (!res?.success) {
			return toast.error('Login error')
		}

		setUser(res.user)
		toast.success('Login successfully')
		router.push('/')
		router.refresh()
	})

	return { control, onSubmit, user }
}
