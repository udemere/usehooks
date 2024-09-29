# `useMediaDevices` Hook

The `useMediaDevices` hook retrieves and tracks the media devices available to the browser, such as microphones, cameras, and speakers. It automatically updates the device list when changes occur (e.g., when a device is added or removed).

### Usage

```tsx
import { useMediaDevices } from '@udemere/usehooks'

const MediaDevicesComponent = () => {
	const devices = useMediaDevices()

	return (
		<div>
			<h2>Available Media Devices</h2>
			<ul>
				{devices.map(device => (
					<li key={device.deviceId}>
						{device.kind}: {device.label || 'No label'}
					</li>
				))}
			</ul>
		</div>
	)
}
```

### Returns

- **Array\<MediaDeviceInfo\>**: An array of `MediaDeviceInfo` objects representing the available media devices. Each object contains the following properties:
  - `deviceId`: A unique identifier for the device.
  - `kind`: The type of device (`"audioinput"`, `"audiooutput"`, `"videoinput"`).
  - `label`: The label of the device (may be empty if permission has not been granted).
  - `groupId`: The identifier for the group to which the device belongs.

### Example

```tsx
const App = () => {
	const devices = useMediaDevices()

	return (
		<div>
			<h1>Media Devices</h1>
			<ul>
				{devices.map(device => (
					<li key={device.deviceId}>
						{device.kind}: {device.label || 'No label available'}
					</li>
				))}
			</ul>
		</div>
	)
}
```

### Notes

- This hook requires the `navigator.mediaDevices` API, which is supported in most modern browsers.
- Permissions may be needed to access device labels. Ensure that your application handles permission requests properly to retrieve device labels.

### Related Hooks

- [`useEventListener`](#) - Attach an event listener to a specified element or window.
- [`useWindowSize`](#) - Get the current dimensions of the window.
