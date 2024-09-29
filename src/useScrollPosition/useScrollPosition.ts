import { useEffect, useState } from 'react'

/**
 * `useScrollPosition` is a custom React hook that returns the current scroll position of the window.
 *
 * @returns The current scroll position of the window in pixels.
 */
export const useScrollPosition = (): number => {
	const [scrollPosition, setScrollPosition] = useState<number>(window.scrollY) // Initialize with the current scroll position

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, []) // Empty dependency array ensures this effect only runs on mount and unmount

	return scrollPosition // Return the current scroll position
}
