import { useEffect, useRef } from 'react'

/**
 * `useTimeout` is a custom React hook that invokes a callback function after a specified delay.
 *
 * @param callback - The function to be invoked after the delay.
 * @param delay - The delay in milliseconds. Use `null` to clear the timeout.
 * @returns A function that clears the timeout.
 *
 * */

export const useTimeout = (callback: () => void, delay: number | null) => {
	const savedCallback = useRef(callback)

	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	useEffect(() => {
		if (delay !== null) {
			const handler = () => savedCallback.current()
			const id = setTimeout(handler, delay)
			return () => clearTimeout(id)
		}
	}, [delay])
}
