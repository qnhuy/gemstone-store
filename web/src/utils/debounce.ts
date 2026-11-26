export function debounce<T extends unknown[]>(fn: (...args: T) => void, timeout: number = 700) {
	let timeoutId: NodeJS.Timeout | undefined

	return (...args: T) => {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}

		timeoutId = setTimeout(() => fn(...args), timeout)
	}
}
