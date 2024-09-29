import { useEffect, useRef, useState } from 'react'

/**
 * A custom hook to detect hover state on an element.
 *
 * @returns An array containing a ref to be attached to the element and a boolean indicating whether the element is hovered.
 */
export const useHover = <T extends HTMLElement>(): [
	React.RefObject<T>,
	boolean
] => {
	const [isHovered, setIsHovered] = useState(false)
	const ref = useRef<T | null>(null)

	const handleMouseOver = () => setIsHovered(true)
	const handleMouseOut = () => setIsHovered(false)

	useEffect(() => {
		const element = ref.current
		if (element) {
			element.addEventListener('mouseover', handleMouseOver)
			element.addEventListener('mouseout', handleMouseOut)

			// Cleanup event listeners on unmount
			return () => {
				element.removeEventListener('mouseover', handleMouseOver)
				element.removeEventListener('mouseout', handleMouseOut)
			}
		}
	}, [ref.current]) // Ensure the effect runs when the ref changes

	return [ref, isHovered]
}
