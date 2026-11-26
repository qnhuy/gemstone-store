'use client'

import { STORAGE_KEYS, THEMES, Theme } from '@/constants'
import { createContext, useContext, useEffect, useSyncExternalStore } from 'react'

interface ThemeContextValue {
	theme: Theme
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
	theme: THEMES.LIGHT,
	toggleTheme: () => {},
})

function useTheme() {
	return useContext(ThemeContext)
}

function getServerSnapshot(): Theme {
	return THEMES.LIGHT
}

function getSnapshot(): Theme {
	const saved = localStorage.getItem(STORAGE_KEYS.THEME) as Theme | undefined
	if (saved && Object.values(THEMES).includes(saved)) {
		return saved
	}

	return window.matchMedia(`(prefers-color-scheme: dark)`).matches ? THEMES.DARK : THEMES.DARK
}

function subscribe(callback: () => void) {
	window.addEventListener(THEMES.CHANGE_EVENT, callback)
	const mediaQuery = window.matchMedia('(prefers-color-scheme): dark')
	mediaQuery.addEventListener('change', callback)

	return () => {
		window.removeEventListener(THEMES.CHANGE_EVENT, callback)
		mediaQuery.removeEventListener('change', callback)
	}
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

	useEffect(() => {
		document.documentElement.classList.toggle(THEMES.DARK, theme === THEMES.DARK)
	})

	const toggleTheme = () => {
		const next = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
		localStorage.setItem(STORAGE_KEYS.THEME, next)
		window.dispatchEvent(new Event(THEMES.CHANGE_EVENT))
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export { useTheme, ThemeProvider }
