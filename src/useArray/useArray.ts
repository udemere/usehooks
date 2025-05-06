import { useCallback, useState } from 'react'

/** The useArray return type. */
type UseArrayReturn<T> = {
	value: T[]
	setValue: React.Dispatch<React.SetStateAction<T[]>>
	push: (item: T) => void
	removeAt: (index: number) => void
	clear: () => void
	insertAt: (index: number, item: T) => void
	updateAt: (index: number, item: T) => void
}

/**
 * Custom hook that manages an array with utility functions.
 *
 * @param initial - The initial array value.
 * @returns {UseArrayReturn} Object with array state and helpers.
 */
export function useArray<T>(initial: T[] = []): UseArrayReturn<T> {
	const [value, setValue] = useState<T[]>(initial)

	const push = useCallback((item: T) => {
		setValue(arr => [...arr, item])
	}, [])

	const removeAt = useCallback((index: number) => {
		setValue(arr => arr.filter((_, i) => i !== index))
	}, [])

	const clear = useCallback(() => {
		setValue([])
	}, [])

	const insertAt = useCallback((index: number, item: T) => {
		setValue(arr => [...arr.slice(0, index), item, ...arr.slice(index)])
	}, [])

	const updateAt = useCallback((index: number, item: T) => {
		setValue(arr => arr.map((v, i) => (i === index ? item : v)))
	}, [])

	return {
		value,
		setValue,
		push,
		removeAt,
		clear,
		insertAt,
		updateAt,
	}
}
