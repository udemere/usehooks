import { useCallback, useState } from 'react'

// Define the return type of the hook
type CopyToClipboardReturn = [
	string | null, // State representing the copied text or null
	(value: string) => void // Function to copy the text to the clipboard
]

// Define the hook
export function useCopyToClipboard(): CopyToClipboardReturn {
	const [state, setState] = useState<string | null>(null)

	const copyToClipboard = useCallback((value: string) => {
		const handleCopy = async () => {
			try {
				if (navigator?.clipboard?.writeText) {
					await navigator.clipboard.writeText(value)
					setState(value)
				} else {
					throw new Error('writeText not supported')
				}
			} catch (e) {
				setState(null)
			}
		}

		handleCopy()
	}, [])

	return [state, copyToClipboard]
}
