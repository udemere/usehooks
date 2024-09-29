import { useMemo } from 'react'

/**
 * Generates a version 4 UUID.
 * @returns A randomly generated UUID string.
 */
const generateUUID = (): string => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		const randomHex = (Math.random() * 16) | 0 // Random hex value
		const value = c === 'x' ? randomHex : (randomHex & 0x3) | 0x8 // Ensures the correct variant
		return value.toString(16) // Converts to hex string
	})
}

/**
 * Custom hook to generate a unique identifier (UUID).
 * @returns A UUID string.
 */
const useUUID = (): string => {
	const uuid = useMemo(generateUUID, []) // Memoizes UUID to avoid re-generation
	return uuid
}

export default useUUID
