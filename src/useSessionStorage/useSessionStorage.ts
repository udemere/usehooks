import { useEffect, useState } from 'react'

/**
 * `useSessionStorage` is a custom React hook that manages state using session storage.
 *
 * @param key - The key under which the data is stored in session storage.
 * @param initialValue - The initial value to store if the key does not exist.
 * @returns A tuple containing the stored value and a function to update it.
 */
export const useSessionStorage = <T>(
	key: string,
	initialValue: T
): [T | null, (value: T) => void] => {
	const [storedValue, setStoredValue] = useState<T | null>(() => {
		try {
			const item = window.sessionStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error('Error reading session storage', error)
			return initialValue
		}
	})

	const setValue = (value: T) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error('Error setting session storage', error)
		}
	}

	useEffect(() => {
		// Sync with session storage on mount
		const item = window.sessionStorage.getItem(key)
		if (item) {
			setStoredValue(JSON.parse(item))
		}
	}, [key])

	return [storedValue, setValue]
}
