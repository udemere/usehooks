import { useEffect, useRef } from 'react'

/**
 * `usePrevious` is a custom React hook that stores the previous value of a state or prop.
 *
 * @param value - The current value to store and return the previous value of.
 * @returns The previous value of the provided value or `undefined` if it's the first render.
 */
export const usePrevious = <T>(value: T): T | undefined => {
	const ref = useRef<T | undefined>(undefined)

	useEffect(() => {
		ref.current = value
	}, [value])

	return ref.current
}
