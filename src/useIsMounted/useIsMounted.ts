import { useEffect, useRef } from 'react'

/**
 * `useIsMounted` is a custom React hook that returns a ref indicating whether the component is mounted.
 *
 * @returns A ref containing a boolean indicating if the component is currently mounted.
 */
export const useIsMounted = (): React.RefObject<boolean> => {
	const isMountedRef = useRef<boolean>(false)

	useEffect(() => {
		isMountedRef.current = true // Set to true when the component mounts

		return () => {
			isMountedRef.current = false // Set to false when the component unmounts
		}
	}, [])

	return isMountedRef // Return the ref
}
