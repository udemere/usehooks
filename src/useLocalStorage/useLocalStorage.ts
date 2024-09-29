import { useState } from 'react'

/**
 * A custom hook to manage localStorage with an initial value and proper error handling.
 *
 * @param key - The key under which the value is stored in localStorage.
 * @param initialValue - The initial value to use if there is no stored value in localStorage.
 * @returns An array containing the stored value and a function to update it.
 */
export const useLocalStorage = <T>(
	key: string,
	initialValue: T
): [T, (value: T | ((val: T) => T)) => void] => {
	// Lazy state initialization to avoid accessing localStorage during SSR or unnecessary reads
	const [storedValue, setStoredValue] = useState<T>(() => {
		if (typeof window === 'undefined') {
			return initialValue // Prevent errors in SSR environments
		}
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error(`Error reading localStorage key "${key}":`, error)
			return initialValue
		}
	})

	// Function to set both state and localStorage value
	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error(`Error setting localStorage key "${key}":`, error)
		}
	}

	return [storedValue, setValue]
}
