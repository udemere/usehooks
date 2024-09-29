import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useState } from 'react'

/** The useBoolean return type. */
type UseBooleanReturn = {
	/** The current boolean state value. */
	value: boolean
	/** Function to set the boolean state directly. */
	setValue: Dispatch<SetStateAction<boolean>>
	/** Function to set the boolean state to `true`. */
	setTrue: () => void
	/** Function to set the boolean state to `false`. */
	setFalse: () => void
	/** Function to toggle the boolean state. */
	toggle: () => void
}

/**
 * Custom hook that manages a boolean state with utility functions.
 *
 * @param {boolean} [defaultValue=false] - The initial value for the boolean state (default is `false`).
 * @returns {UseBooleanReturn} An object containing the boolean state value and utility functions.
 * @throws Will throw an error if `defaultValue` is not a boolean.
 */
export function useBoolean(defaultValue = false): UseBooleanReturn {
	if (typeof defaultValue !== 'boolean') {
		throw new TypeError('defaultValue must be a boolean')
	}

	const [value, setValue] = useState<boolean>(defaultValue)

	const setTrue = useCallback(() => setValue(true), [])
	const setFalse = useCallback(() => setValue(false), [])
	const toggle = useCallback(() => setValue(prev => !prev), [])

	return { value, setValue, setTrue, setFalse, toggle }
}
