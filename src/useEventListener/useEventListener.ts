import { useEffect } from 'react'

/**
 * `useEventListener` is a custom React hook that attaches an event listener to a specified element or the window.
 *
 * @param eventName - The name of the event to listen for.
 * @param handler - The function that will be called when the event is triggered.
 * @param element - The element to attach the event listener to. Defaults to `window`.
 */
export const useEventListener = <T extends HTMLElement | Window>(
	eventName: string,
	handler: (event: Event) => void,
	element: HTMLElement | Window | null = window
) => {
	useEffect(() => {
		const targetElement = element

		if (targetElement && targetElement.addEventListener) {
			targetElement.addEventListener(eventName, handler)

			// Cleanup function to remove the event listener on unmount
			return () => {
				targetElement.removeEventListener(eventName, handler)
			}
		}
	}, [eventName, handler, element]) // Dependencies ensure effect runs on relevant changes
}
