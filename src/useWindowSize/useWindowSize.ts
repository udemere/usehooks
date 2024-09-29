import { useEffect, useState } from 'react'

/**
 * `useWindowSize` is a custom React hook that returns the current dimensions of the window.
 *
 * @returns An object containing the current width and height of the window.
 */
export const useWindowSize = (): {
	width: number | undefined
	height: number | undefined
} => {
	const [windowSize, setWindowSize] = useState<{
		width: number | undefined
		height: number | undefined
	}>({
		width: undefined,
		height: undefined,
	})

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		// Set initial size
		handleResize()

		// Add resize event listener
		window.addEventListener('resize', handleResize)

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowSize
}
