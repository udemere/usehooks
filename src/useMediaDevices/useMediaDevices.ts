import { useEffect, useState } from 'react'

/**
 * `useMediaDevices` is a custom React hook that retrieves and tracks media devices available to the browser.
 *
 * @returns An array of `MediaDeviceInfo` objects representing the available media devices.
 */
export const useMediaDevices = (): MediaDeviceInfo[] => {
	const [devices, setDevices] = useState<MediaDeviceInfo[]>([])

	useEffect(() => {
		const fetchDevices = async () => {
			try {
				const mediaDevices = await navigator.mediaDevices.enumerateDevices()
				setDevices(mediaDevices)
			} catch (error) {
				console.error('Error fetching media devices:', error)
			}
		}

		fetchDevices()
		navigator.mediaDevices.addEventListener('devicechange', fetchDevices)

		return () => {
			navigator.mediaDevices.removeEventListener('devicechange', fetchDevices)
		}
	}, [])

	return devices
}
