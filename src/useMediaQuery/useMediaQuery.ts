import { useCallback, useSyncExternalStore } from 'react'

/**
 * A custom hook that listens for media query changes using `useSyncExternalStore`.
 *
 * @param query - The media query string to match against.
 * @returns A boolean indicating if the media query matches or not.
 */
export function useMediaQuery(query: string): boolean {
	const subscribe = useCallback(
		(callback: () => void) => {
			const matchMedia = window.matchMedia(query)
			matchMedia.addEventListener('change', callback)

			// Cleanup the event listener
			return () => {
				matchMedia.removeEventListener('change', callback)
			}
		},
		[query]
	)

	const getSnapshot = useCallback(() => {
		return window.matchMedia(query).matches
	}, [query])

	const getServerSnapshot = useCallback(() => {
		// This hook is client-only, so no SSR support
		throw new Error('useMediaQuery is a client-only hook')
	}, [])

	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
