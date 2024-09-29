import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * A custom hook to handle redirection in React applications.
 *
 * @param to - The path to redirect to.
 * @param condition - The condition that triggers the redirection. Defaults to true.
 * @param delay - Optional delay in milliseconds before the redirection occurs.
 */
export const useRedirect = (
	to: string,
	condition: boolean = true,
	delay?: number
) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (condition) {
			const timeoutId = setTimeout(() => {
				navigate(to)
			}, delay || 0) // If delay is provided, use it, otherwise redirect immediately

			// Cleanup timeout if component unmounts before delay finishes
			return () => clearTimeout(timeoutId)
		}
	}, [condition, delay, navigate, to])
}
