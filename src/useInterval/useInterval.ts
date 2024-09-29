import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

/**
 *
 * @param {() => void} callback - The function to be invoked at each interval.
 * @param {number | null} delay - The time, in milliseconds, between each invocation of the callback. Use `null` to clear the interval.
 */
export function useInterval(callback: () => void, delay: number | null) {
	const savedCallback = useRef(callback)

	// Update the ref to the latest callback
	useIsomorphicLayoutEffect(() => {
		savedCallback.current = callback
	}, [callback])

	useEffect(() => {
		// Clear interval if no delay is specified
		if (delay === null) {
			return
		}

		const id = setInterval(() => {
			savedCallback.current()
		}, delay)

		return () => clearInterval(id) // Clear the interval on cleanup
	}, [delay])
}
