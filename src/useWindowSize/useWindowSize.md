# `useWindowSize` Hook

`useWindowSize` is a custom React hook that returns the current dimensions of the window, enabling responsive design in your applications.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

To utilize the `useWindowSize` hook in your component, follow the example below:

```tsx
import { useWindowSize } from '@udemere/usehooks'

const MyComponent = () => {
	const { width, height } = useWindowSize()

	return (
		<div>
			<h1>Current Window Size</h1>
			<p>Width: {width}px</p>
			<p>Height: {height}px</p>
		</div>
	)
}
```

## Returns

The `useWindowSize` hook returns an object with the following properties:

- **width**: The current width of the window in pixels. It may be `undefined` if not available.
- **height**: The current height of the window in pixels. It may be `undefined` if not available.

## Example

Here’s an example of how to implement the `useWindowSize` hook to create a responsive component:

```tsx
import React from 'react'
import { useWindowSize } from '@udemere/usehooks'

const ResponsiveComponent = () => {
	const { width, height } = useWindowSize()

	return (
		<div>
			<h2>Window Size Information</h2>
			<p>Width: {width}px</p>
			<p>Height: {height}px</p>
		</div>
	)
}

export default ResponsiveComponent
```

## Notes

- The hook sets the initial window size upon component mounting.
- It updates the window size dynamically as the window is resized.
- The event listener for the resize event is cleaned up when the component unmounts to prevent memory leaks.

## Related Hooks

- [`useScrollPosition`](#) - Get the current scroll position of the window.
- [`useDebounce`](#) - Debounce a value to limit the frequency of updates.
