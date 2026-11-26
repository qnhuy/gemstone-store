import { ThemeToggle } from '@/components/shared'
import { LoginForm } from './login-form'
import { Button, Card, CardContent, CardFooter, CardHeader } from '@/components/ui'

export default function LoginPage() {
	return (
		<div className='min-h-screen flex items-center justify-center'>
			<Card className='w-xl'>
				<CardHeader className='text-2xl font-bold flex justify-between'>
					Login
					<ThemeToggle />
				</CardHeader>
				<CardContent>
					<LoginForm />
				</CardContent>
				<CardFooter className='justify-end'>
					<Button type='submit' form='login-form'>
						Submit
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
