import { useCallback, useState } from 'react'

/**
 * `useToggle` is a custom React hook that manages a boolean state and provides a function to toggle its value.
 *
 * @param initialValue - The initial state value (default is false).
 * @returns An array containing the current state value and a toggle function.
 */
export const useToggle = (
	initialValue: boolean = false
): [boolean, () => void] => {
	const [value, setValue] = useState<boolean>(initialValue)

	const toggle = useCallback(() => setValue(prevValue => !prevValue), [])

	return [value, toggle]
}
