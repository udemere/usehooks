import { useEffect, useState } from 'react'

type UseDebounceHook<T> = (value: T, delay: number) => T

/**
 * `useDebounce` is a hook that delays updating a value until after a specified amount of time has passed.
 * @param value - The input value that you want to debounce.
 * @param delay - The number of milliseconds to delay the update of the debounced value.
 * @returns The debounced value, which only updates after the specified delay.
 */

export function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}
