'use client'

import { ControlledInput, FieldGroup } from '@/components/ui'
import { useAuth } from '@/features/auth/use-auth'

export function LoginForm() {
	const { control, onSubmit } = useAuth()

	return (
		<form onSubmit={onSubmit} id='login-form'>
			<FieldGroup>
				<ControlledInput
					control={control}
					name='email'
					id='email'
					label='Email'
					placeholder='Enter email...'
					required
				/>
				<ControlledInput
					control={control}
					name='password'
					id='password'
					label='Password'
					placeholder='Enter password...'
					required
				/>
			</FieldGroup>
		</form>
	)
}
