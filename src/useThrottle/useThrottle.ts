import { useEffect, useRef, useState } from 'react'

/**
 * `useThrottle` is a custom React hook that returns a throttled value after a specified delay.
 *
 * @param value - The value to be throttled
 * @param delay - The delay in milliseconds
 * @returns The throttled value
 */
export const useThrottle = <T>(value: T, delay: number): T => {
	const [throttledValue, setThrottledValue] = useState(value)
	const lastRan = useRef<number>(Date.now())

	useEffect(() => {
		const timeSinceLastRun = Date.now() - lastRan.current

		if (timeSinceLastRun >= delay) {
			setThrottledValue(value)
			lastRan.current = Date.now()
		}
	}, [value, delay])

	return throttledValue
}
