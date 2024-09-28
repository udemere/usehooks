import { useEffect } from 'react'

/**
 * Custom hook to set the browser's favicon.
 * 
 * @param url - The URL of the favicon image.
 */
export function useFavicon(url: string): void {
	useEffect(() => {
		// Try to find an existing favicon link element
		const existingLink =
			document.querySelector<HTMLLinkElement>(`link[rel~="icon"]`)

		if (existingLink) {
			// If found, update its href
			existingLink.href = url
		} else {
			// If not found, create a new link element
			const link = document.createElement('link')
			link.type = 'image/x-icon'
			link.rel = 'icon'
			link.href = url

			// Append the new link element to the head
			document.head.appendChild(link)
		}
	}, [url]) // Re-run the effect if the URL changes
}
