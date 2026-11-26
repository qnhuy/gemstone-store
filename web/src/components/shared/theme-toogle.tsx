'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../providers/theme'
import { Button } from '../ui/button'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			onClick={toggleTheme}
			size='icon'
			aria-label='Toggle dark mode'
			className='rounded-full bg-background hover:bg-foreground/10 text-foreground'>
			{theme === 'dark' ? <Sun /> : <Moon />}
		</Button>
	)
}
